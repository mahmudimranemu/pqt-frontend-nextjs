"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  simpleContactSchema,
  SimpleContactFormData,
} from "@/lib/contactSchema";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SimpleContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SimpleContactFormData>({
    resolver: zodResolver(simpleContactSchema as any),
  });

  const onSubmit = async (data: SimpleContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Your message has been sent!", {
        description: "We will get back to you soon.",
        action: {
          label: "Close",
          onClick: () => {
            toast.dismiss();
          },
        },
      });

      reset();
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col lg:flex-row gap-4'>
      <div>
        <Input
          id='name'
          {...register("name")}
          placeholder='Name'
          className='bg-white rounded-md h-12 text-zinc-900 shadow-md'
        />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
      </div>
      <div>
        <Input
          id='email'
          type='email'
          placeholder='Email'
          {...register("email")}
          className='bg-white rounded-md h-12 text-zinc-900 shadow-md'
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
      </div>
      <div>
        <Input
          id='phone'
          {...register("phone")}
          placeholder='Phone'
          className='bg-white rounded-md h-12 text-zinc-900 shadow-md'
        />
        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
      </div>
      <Button
        type='submit'
        disabled={isSubmitting}
        className='bg-red-600 hover:bg-red-700 text-white h-12 px-8 font-semibold text-lg cursor-pointer'>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
