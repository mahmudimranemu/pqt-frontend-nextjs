import { z } from "zod";

// Simple form schema (home page)
export const simpleContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required").max(20),
});

// Full form schema (contact page)
export const fullContactSchema = simpleContactSchema.extend({
  subject: z.string().min(1, "Subject is required").max(100),
  body: z.string().min(1, "Message is required").max(1000),
});

export type SimpleContactFormData = z.infer<typeof simpleContactSchema>;
export type FullContactFormData = z.infer<typeof fullContactSchema>;
