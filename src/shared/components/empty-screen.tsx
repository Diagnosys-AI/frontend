import { UseChatHelpers } from "ai/react";
import { HistoryForm } from "@/components/history-form";

export interface EmptyScreenProps extends Pick<UseChatHelpers, "append"> {
  id?: string;
}

export function EmptyScreen({ id, append }: EmptyScreenProps) {
  let onSubmit = async (data: {
    introduction: string;
    presentingComplaint: string;
    socrates: string;
    specificSystemsReview: string;
    generalSystemsReview: string;
    ice: string;
    pastMedicalHistory: string;
    medicationHistory: string;
    socialHistory: string;
    familyHistory: string;
  }) => {
    let displayMessage = `# Diagnosys AI: History Form\n\n1. **Introduction:**\n\n\t${data.introduction}\n\n2. **Presenting Complaint (PC):**\n\n\t${data.presentingComplaint}\n\n3. **History of Presenting Complaint (HxPC):**\n\n\tFrom listening to the patient’s HxPC, you start to form an idea of the nature of the problem.\n\n\t- **SOCRATES**: ${data.socrates}\n\n\t- **Specific Systems Review**: ${data.specificSystemsReview}\n\n\t- **General Systems Review**: ${data.generalSystemsReview}\n\n\t- **ICE**: ${data.ice}\n\n4. **Past Medical History (PMHx):**\n\n\t${data.pastMedicalHistory}"\n\n5. **Medication History (MHx):**\n\n\t${data.medicationHistory}\n\n6. **Social History (SHx):**\n\n\t${data.socialHistory}\n\n7. **Family History (FHx):**\n\n\t${data.familyHistory}`;

    await append({
      id,
      content: displayMessage,
      role: "user",
      data: {
        form: true,
        formData: data,
      },
    });
  };

  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Diagnosys AI 🩺
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Diagnosys AI a tool tailored and aimed at the UK&lsquo;s medical
          students and junior doctors (F1&lsquo;s, F2&lsquo;s, and
          IMT1&lsquo;s). Diagnosys AI is designed to alleviate the challenges of
          diagnostic uncertainty and efficiency that junior doctors frequently
          encounter. Our solution focuses on streamlining the diagnostic
          process, enhancing decision-making, and ultimately contributing to
          better patient outcomes, as well as constituting a useful learning
          tool for medical students.
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
