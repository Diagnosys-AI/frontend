import { UseChatHelpers } from "ai/react";
import { HistoryForm } from "@/components/history-form";

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, "setInput">) {
  let onSubmit = (data: any) => {
    console.log("data");
  };

  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Diagnosys AI 🩺
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Diagnosys AI a tool tailored and aimed at the UK's medical students
          and junior doctors (F1's, F2's, and IMT1's). Diagnosys AI is designed
          to alleviate the challenges of diagnostic uncertainty and efficiency
          that junior doctors frequently encounter. Our solution focuses on
          streamlining the diagnostic process, enhancing decision-making, and
          ultimately contributing to better patient outcomes, as well as
          constituting a useful learning tool for medical students.
        </p>
        <p className="mb-2 leading-normal text-muted-foreground">
          Fill out the history form below to get started!
        </p>

        <hr className="my-4" />

        <HistoryForm onSubmitFn={onSubmit} />
      </div>
    </div>
  );
}
