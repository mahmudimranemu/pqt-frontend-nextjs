"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const blogPosts = [
  {
    category: "Category",
    date: "Jan 18, 2022",
    title: "How to build the ultimate tech stack for growth",
    thumbnail: "/rectangle-1-2.svg",
  },
  {
    category: "Category",
    date: "Jan 20, 2024",
    title: "How to build the ultimate tech stack for growth",
    thumbnail: "/rectangle-1.svg",
  },
  {
    category: "Category",
    date: "Jan 18, 2024",
    title: "How to build the ultimate tech stack for growth",
    thumbnail: "/rectangle-1-1.svg",
  },
];

export function LatestNewsSection() {
  return (
    <section className='flex justify-center items-center w-full bg-white px-4 md:px-8 lg:px-[167px] pt-20 pb-0'>
      <div className='flex flex-col items-center gap-10'>
        <header className='flex flex-col items-center gap-4'>
          <h2 className="font-extrabold text-dark-red text-4xl text-center tracking-[-1.08px] leading-10 [font-family:'Inter',Helvetica]">
            Latest News
          </h2>
          <p className='max-w-[418.7px] text-black text-[length:var(--paragraph-medium-regular-font-size)] text-center leading-[var(--paragraph-medium-regular-line-height)] font-paragraph-medium-regular font-[number:var(--paragraph-medium-regular-font-weight)] tracking-[var(--paragraph-medium-regular-letter-spacing)] [font-style:var(--paragraph-medium-regular-font-style)]'>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </header>

        <div className='flex flex-col lg:flex-row items-start gap-6'>
          <Card className='w-full lg:w-[541px] bg-white rounded-lg border border-[#e1e3ec] shadow-neutral-shadow-02'>
            <CardContent className='p-0'>
              <div className='w-full h-64 rounded-t-lg bg-cover bg-center bg-[linear-gradient(0deg,rgba(241,243,247,1)_0%,rgba(241,243,247,1)_100%)]' />
              <div className='flex flex-col gap-4 px-8 py-6'>
                <div className='flex items-center gap-2'>
                  <span className='font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] [font-style:var(--display-2-semi-bold-font-style)]'>
                    Category
                  </span>
                  <Image
                    className='w-[22.27px] h-px'
                    alt='Blog card details divider'
                    src='/blog-card-details-divider.svg'
                    width={22}
                    height={1}
                  />
                  <span className='font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors500 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] [font-style:var(--display-2-semi-bold-font-style)]'>
                    Jan 24, 2024
                  </span>
                </div>
                <h3 className='font-[number:var(--display-6-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-6-semi-bold-font-size)] leading-[var(--display-6-semi-bold-line-height)] font-display-6-semi-bold tracking-[var(--display-6-semi-bold-letter-spacing)] [font-style:var(--display-6-semi-bold-font-style)]'>
                  Web design best practices: Optimizing speed
                </h3>
              </div>
            </CardContent>
          </Card>

          <div className='flex flex-col gap-10 w-full lg:w-[435px]'>
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <span className='font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] [font-style:var(--display-2-semi-bold-font-style)]'>
                    {post.category}
                  </span>
                  <Image
                    className='w-[22.27px] h-px'
                    alt='Blog card details divider'
                    src='/blog-card-details-divider.svg'
                    width={22}
                    height={1}
                  />
                  <span className='font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors500 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] [font-style:var(--display-2-semi-bold-font-style)]'>
                    {post.date}
                  </span>
                </div>
                <div className='flex items-start gap-2'>
                  <Image
                    className='w-[50px] h-[50px] object-cover flex-shrink-0'
                    alt='Blog thumbnail'
                    src={post.thumbnail}
                    width={50}
                    height={50}
                  />
                  <h4 className="flex-1 [font-family:'Inter',Helvetica] font-semibold text-neutral-colors600 text-2xl tracking-[0] leading-8">
                    {post.title}
                  </h4>
                </div>
                <Separator className='w-full' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
