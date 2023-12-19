import { kv } from "@vercel/kv";
import { StreamingTextResponse } from "ai";
import { auth } from "@/auth";
import { nanoid } from "@/lib/utils";

export const runtime = "edge";

export const onStreamComplete = async (
  userId: string,
  json: {
    id?: string;
    messages: {
      content: string;
      role: string;
      data?: { [key: string]: any };
    }[];
  },
  completion: string
) => {
  let title = json.messages[0].content.substring(0, 100);

  if (json.messages[0].data?.formData?.presentingComplaint?.length > 1) {
    title = `PC: ${json.messages[0].data?.formData?.presentingComplaint}`;
  }

  const id = json.id ?? nanoid();
  const createdAt = Date.now();
  const path = `/chat/${id}`;
  const payload = {
    id,
    title,
    userId,
    createdAt,
    path,
    messages: [
      ...json.messages,
      {
        content: completion,
        role: "assistant",
      },
    ],
  };
  await kv.hmset(`chat:${id}`, payload);
  await kv.zadd(`user:chat:${userId}`, {
    score: createdAt,
    member: `chat:${id}`,
  });
};

export async function POST(req: Request) {
  const userId = (await auth())?.user.id;
  if (!userId) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  // Define the URL of the Python API
  const apiUrl = `${process.env.AI_ENDPOINT}/api/chat`;
  try {
    const json = await req.json();
    // Fetch from Python API
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });

    if (!response.ok || !response.body) {
      throw new Error(`API responded with status ${response.status}`);
    }

    let responseBody = ""; // Placeholder for the response body

    // Stream the response
    const reader = response.body.getReader();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              // Invoke callback here on stream completion
              onStreamComplete(userId, json, responseBody);
              break;
            }
            responseBody += new TextDecoder().decode(value);
            controller.enqueue(value);
          }
        } catch (error) {
          // Handle any errors that occur during streaming
          console.error("Stream reading error:", error);
        } finally {
          controller.close();
        }
      },
    });

    return new StreamingTextResponse(stream);
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
    });
  }
}
