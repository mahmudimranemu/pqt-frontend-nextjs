"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fullContactSchema,
  FullContactFormData,
  subjectOptions,
} from "@/lib/contactSchema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FullContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FullContactFormData>({
    resolver: zodResolver(fullContactSchema as any),
  });

  const selectedSubject = watch("subject"); // Watch for display in placeholder

  const onSubmit = async (data: FullContactFormData) => {
    try {
      const submitData = {
        ...data,
        pageUrl: window.location.href, // Capture current URL
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
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
      className='space-y-4 flex flex-col justify-center'>
      <div className='flex gap-1'>
        <Input
          id='name'
          placeholder='Name'
          {...register("name")}
          className='border px-4 py-6 w-full'
        />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
      </div>
      <div className='flex flex-col w-full justify-between lg:flex-row gap-4'>
        <div className='lg:w-2/4'>
          <Input
            id='email'
            type='email'
            {...register("email")}
            placeholder='Email'
            className='border px-4 py-6 w-full'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div className='lg:w-2/4'>
          <Input
            id='phone'
            {...register("phone")}
            placeholder='Phone'
            className='border px-4 py-6 w-full'
          />
          {errors.phone && (
            <p className='text-red-500'>{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div>
        <Select
          onValueChange={(value) =>
            setValue("subject", value as FullContactFormData["subject"])
          } // Update form value
          value={selectedSubject} // Controlled value
        >
          <SelectTrigger className='w-full px-4 py-6'>
            <SelectValue placeholder='Select a subject' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {subjectOptions.map((option) => (
                <SelectItem
                  key={option}
                  value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.subject && (
          <p className='text-red-500'>{errors.subject.message}</p>
        )}
      </div>
      <div>
        <Textarea
          id='body'
          {...register("body")}
          placeholder='Write your message here...'
          className='border px-4 py-6 w-full'
          rows={5}
        />
        {errors.body && <p className='text-red-500'>{errors.body.message}</p>}
      </div>
      <Button
        type='submit'
        disabled={isSubmitting}
        className='bg-primary px-9 py-6 text-white text-lg cursor-pointer'>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
