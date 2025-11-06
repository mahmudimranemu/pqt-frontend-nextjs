import { z } from "zod";
export const subjectOptions = [
  "General Inquiry",
  "Support",
  "Feedback",
  "Partnership",
  "Other",
] as const; // 'as const' for TypeScript inference
// Simple form schema (home page)
export const simpleContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required").max(20),
  pageUrl: z.string().optional(),
});

// Full form schema (contact page)
export const fullContactSchema = simpleContactSchema.extend({
  subject: z.enum(subjectOptions, { message: "Please select a subject" }),
  body: z.string().min(1, "Message is required").max(1000),
});

export type SimpleContactFormData = z.infer<typeof simpleContactSchema>;
export type FullContactFormData = z.infer<typeof fullContactSchema>;
