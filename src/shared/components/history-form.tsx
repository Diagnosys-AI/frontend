"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import React from "react";

const FormSchema = z.object({
  introduction: z.string(),
  presentingComplaint: z.string(),
  socrates: z.string(),
  specificSystemsReview: z.string(),
  generalSystemsReview: z.string(),
  ice: z.string(),
  pastMedicalHistory: z.string(),
  medicationHistory: z.string(),
  socialHistory: z.string(),
  familyHistory: z.string(),
});

const HistoryFormField = ({
  form,
  name,
  label,
  description,
  placeholder,
}: {
  form: any;
  name: string;
  label: string;
  description: string;
  placeholder: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between ">
            <FormLabel>{label}</FormLabel>
            <Popover>
              <PopoverTrigger>
                <Info className="h-4 w-4" />
              </PopoverTrigger>
              <PopoverContent>
                <p>{description}</p>
              </PopoverContent>
            </Popover>
          </div>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export function HistoryForm({ onSubmitFn }: { onSubmitFn: any }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(`Submitted + ${JSON.stringify(data, null, 2)}`);
    console.log({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    onSubmitFn(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <HistoryFormField
          form={form}
          name="introduction"
          label="Introduction"
          description="
              Begin with basic patient details like name and demographics. This
              initial information sets the stage for the consultation."
          placeholder="General Information about the patient"
        />
        <HistoryFormField
          form={form}
          name="presentingComplaint"
          label="Presenting Complaint (PC)"
          description="
              What brought the patient in? This is their chance to express their
              primary concerns or symptoms in their own words. Start with an
              open question and listen."
          placeholder="Presenting Complaint"
        />

        <hr className="my-4" />
        <Accordion type="single" defaultValue="hxpc" collapsible>
          <AccordionItem value="hxpc">
            <AccordionTrigger>
              <p>History of Presenting Complaint (HxPC)</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 w-full px-2">
                <HistoryFormField
                  form={form}
                  name="socrates"
                  label="SOCRATES"
                  description="Dive deeper into the patient's main symptom(s), covering all aspects from location to severity."
                  placeholder="SOCRATES"
                />
                <HistoryFormField
                  form={form}
                  name="specificSystemsReview"
                  label="Specific Systems Review"
                  description="Explore other major symptoms related to the primary system involved."
                  placeholder="Specific Systems Review"
                />
                <HistoryFormField
                  form={form}
                  name="generalSystemsReview"
                  label="General Systems Review"
                  description="Ensure all bodily systems are checked for any additional symptoms."
                  placeholder="General Systems Review"
                />
                <HistoryFormField
                  form={form}
                  name="ice"
                  label="Ideas, Concerns & Expectations (ICE)"
                  description="Understand the patient's own ideas, concerns, and what they expect from the consultation."
                  placeholder="Ideas, Concerns, and Expectations"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <HistoryFormField
          form={form}
          name="pastMedicalHistory"
          label="Past Medical History (PMHx)"
          description="Gather information about past medical conditions, surgeries, or health events that could impact the current situation."
          placeholder="Past Medical History"
        />
        <HistoryFormField
          form={form}
          name="medicationHistory"
          label="Medication History (MHx)"
          description="Detail all medications, including prescriptions, OTC drugs, and any supplements or recreational drugs the patient uses. APRICOTS is a useful acronym to this end."
          placeholder="Medication History"
        />
        <HistoryFormField
          form={form}
          name="socialHistory"
          label="Social History (SHx)"
          description="Lifestyle factors like occupation, smoking, alcohol use, and more can greatly influence health. This section helps in understanding the patient's daily life and potential stressors."
          placeholder="Social History"
        />
        <HistoryFormField
          form={form}
          name="familyHistory"
          label="Family History (FHx)"
          description="Some health issues are hereditary. Knowing the patient's family health history can highlight potential genetic risks."
          placeholder="Family History"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
