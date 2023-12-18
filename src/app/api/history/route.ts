import { auth } from "@/auth";
export const runtime = "edge";

export async function POST(req: Request) {
  const { history } = await req.json();
  const userId = (await auth())?.user.id;

  if (!userId) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  console.log({
    history,
    userId,
  });
}
