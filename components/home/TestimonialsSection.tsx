import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Brian Clark",
    title: "CEO & Founder",
    quote:
      '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
    rating: 5,
  },
  {
    name: "Stephanie Powell",
    title: "VP of Finance",
    quote:
      '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
    rating: 5,
  },
  {
    name: "Christopher White",
    title: "VP of Product",
    quote:
      '"Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare"',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className='flex flex-col items-center px-4 md:px-[167px] py-20 w-full bg-dark-red'>
      <header className='flex flex-col items-center gap-4 mb-12'>
        <h2 className="font-extrabold text-white text-4xl text-center tracking-[-1.08px] leading-10 [font-family:'Inter',Helvetica]">
          What our clients have to say
        </h2>
        <p className='max-w-[418.7px] text-white text-[length:var(--paragraph-medium-regular-font-size)] text-center leading-[var(--paragraph-medium-regular-line-height)] font-paragraph-medium-regular font-[number:var(--paragraph-medium-regular-font-weight)] tracking-[var(--paragraph-medium-regular-letter-spacing)] [font-style:var(--paragraph-medium-regular-font-style)]'>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
      </header>

      <div className='flex w-full max-w-[1090px] items-center justify-center gap-[22px]'>
        <Button
          variant='ghost'
          size='icon'
          className='w-[47px] h-[79px] bg-[#ffffff33] rounded hover:bg-[#ffffff4d] flex-shrink-0'
          aria-label='Previous testimonials'>
          <ChevronLeftIcon className='w-3 h-[13px] text-white' />
        </Button>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-[22px] flex-1'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='flex flex-col bg-white rounded-lg border border-solid border-[#e1e3ec] shadow-neutral-shadow-02'>
              <CardContent className='flex flex-col gap-2.5 pt-6 pb-[27px] px-6'>
                <div className='flex items-start gap-0 mb-2'>
                  {Array.from({ length: testimonial.rating }).map(
                    (_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        className='w-6 h-6 fill-current text-yellow-400'
                      />
                    )
                  )}
                </div>

                <p className='text-neutral-colors600 text-[length:var(--paragraph-default-regular-font-size)] leading-[var(--paragraph-default-regular-line-height)] font-paragraph-default-regular font-[number:var(--paragraph-default-regular-font-weight)] tracking-[var(--paragraph-default-regular-letter-spacing)] [font-style:var(--paragraph-default-regular-font-style)] mb-4'>
                  {testimonial.quote}
                </p>

                <div className='flex flex-col'>
                  <h3 className='font-[number:var(--display-3-semi-bold-font-weight)] text-dark-blue text-[length:var(--display-3-semi-bold-font-size)] tracking-[var(--display-3-semi-bold-letter-spacing)] leading-[var(--display-3-semi-bold-line-height)] font-display-3-semi-bold [font-style:var(--display-3-semi-bold-font-style)]'>
                    {testimonial.name}
                  </h3>
                  <p className='font-display-2-regular font-[number:var(--display-2-regular-font-weight)] text-neutral-colors500 text-[length:var(--display-2-regular-font-size)] tracking-[var(--display-2-regular-letter-spacing)] leading-[var(--display-2-regular-line-height)] [font-style:var(--display-2-regular-font-style)]'>
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          variant='ghost'
          size='icon'
          className='w-[47px] h-[79px] bg-[#ffffff33] rounded hover:bg-[#ffffff4d] flex-shrink-0'
          aria-label='Next testimonials'>
          <ChevronRightIcon className='w-3 h-[13px] text-white' />
        </Button>
      </div>
    </section>
  );
}
