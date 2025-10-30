"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactCTASection() {
  return (
    <section className='flex flex-col w-full items-start gap-2.5 px-0 py-20 relative'>
      <div className='relative w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_369px] gap-0 relative'>
          <Card className='bg-dark-red rounded-lg overflow-hidden border-0 lg:rounded-r-none'>
            <CardContent className='flex flex-col items-start gap-6 pl-20 pr-[167px] py-[100px]'>
              <div className='flex flex-col items-start gap-4 max-w-[423px]'>
                <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-white text-3xl tracking-[-0.90px] leading-9">
                  Free Consultation
                  <br />
                  With Our Experts
                </h2>

                <p className='text-white text-[length:var(--paragraph-medium-regular-font-size)] leading-[var(--paragraph-medium-regular-line-height)] font-paragraph-medium-regular font-[number:var(--paragraph-medium-regular-font-weight)] tracking-[var(--paragraph-medium-regular-letter-spacing)] [font-style:var(--paragraph-medium-regular-font-style)]'>
                  Let our experienced team guide you through every step of
                  buying property in Türkiye.
                </p>

                <div className='inline-flex items-center gap-4 flex-wrap'>
                  <Button className='gap-[3px] px-[18px] py-3.5 bg-white hover:bg-white/90 text-black rounded-md h-auto'>
                    <span className='text-[length:var(--display-2-semi-bold-font-size)] leading-[var(--display-2-semi-bold-line-height)] font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] tracking-[var(--display-2-semi-bold-letter-spacing)] [font-style:var(--display-2-semi-bold-font-style)]'>
                      Book a Call
                    </span>
                    <ArrowRightIcon className='w-3 h-3' />
                  </Button>

                  <Button
                    variant='outline'
                    className='gap-[3px] px-[18px] py-[15px] bg-transparent hover:bg-white/10 text-white border-white rounded-md h-auto'>
                    <span className='text-[length:var(--display-2-semi-bold-font-size)] leading-[var(--display-2-semi-bold-line-height)] font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] tracking-[var(--display-2-semi-bold-letter-spacing)] [font-style:var(--display-2-semi-bold-font-style)]'>
                      Contact Us
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className='hidden lg:flex w-full h-[463px] items-center justify-center rounded-[8px_8px_0px_0px] overflow-hidden border border-solid border-[#b3b8c8] shadow-neutral-shadow-02 [background:url(/image-6.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(241,243,247,1)_0%,rgba(241,243,247,1)_100%)]'>
            <img
              className='w-[66px] h-[66px]'
              alt='Icon square image'
              src='/icon-square-image-8.svg'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
