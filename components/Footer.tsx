import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

const aboutUsLinks = [
  { label: "Mission", href: "#" },
  { label: "Our team", href: "#" },
  { label: "Awards", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Privacy policy", href: "#" },
];

const buyersGuideLinks = [
  { label: "Investing in Turkey", href: "#" },
  { label: "Purchase Process", href: "#" },
  { label: "Residency Permit", href: "#" },
  { label: "Visas", href: "#" },
  { label: "Concierge Service", href: "#" },
];

const propertiesLinks = [
  { label: "Properties in istanbul", href: "/search?location%5B%5D=Istanbul" },
  { label: "Luxury apartment", href: "#" },
  { label: "Villas", href: "#" },
  { label: "Apartment", href: "#" },
  { label: "Bursa villas", href: "#" },
];

export default function Footer() {
  return (
    <footer className='flex flex-col items-start gap-[72px] pt-[72px] pb-0 px-[167px] w-full border-t [border-top-style:solid] border-[#e1e3ec] bg-[linear-gradient(0deg,rgba(0,20,48,0.95)_0%,rgba(0,20,48,0.95)_100%)]'>
      <div className='flex flex-col items-start gap-10 w-full'>
        <div className='flex items-end justify-between pt-0 pb-10 px-0 w-full border-b [border-bottom-style:solid] border-[#e1e3ec]'>
          <div className='inline-flex flex-col items-start'>
            <div className='inline-flex flex-col items-center justify-center gap-[1.4px] p-[5.61px]'>
              <Link href='/'>
                <Image
                  src='/PQT_logo.svg'
                  alt='Property Quest Logo'
                  width={150}
                  height={80}
                />
              </Link>
            </div>

            <p className='text-white'>
              Find your dream property in Turkey. We provide beautiful Villas &
              Properties in cities of Turkey like Istanbul and Bursa. Luxurious
              Villas for Sale. Government Guaranteed.
            </p>
          </div>

          <div className='inline-flex flex-col items-start'>
            <h3 className='w-[421px] font-[number:var(--display-4-semi-bold-font-weight)] text-white text-[length:var(--display-4-semi-bold-font-size)] tracking-[var(--display-4-semi-bold-letter-spacing)] leading-[var(--display-4-semi-bold-line-height)] flex items-end justify-center mt-[-1.00px] font-display-4-semi-bold [font-style:var(--display-4-semi-bold-font-style)]'>
              Subscribe to our newsletter
            </h3>

            <div className='inline-flex items-center gap-[148px] pl-[18px] pr-2 py-2 border border-solid border-[#f1f2f6] shadow-neutral-shadow-02 bg-[#ffffff] rounded-lg'>
              <Input
                placeholder='Enter your email address'
                className='border-0 shadow-none font-display-2-regular font-[number:var(--display-2-regular-font-weight)] text-neutral-colors600 text-[length:var(--display-2-regular-font-size)] tracking-[var(--display-2-regular-letter-spacing)] leading-[var(--display-2-regular-line-height)] [font-style:var(--display-2-regular-font-style)] p-0 h-auto focus-visible:ring-0'
              />

              <Button className='gap-[3px] p-3 bg-app-secondary rounded shadow-[0px_1px_4px_#18203c14] h-auto text-[#ffffff] text-[length:var(--display-1-semi-bold-font-size)] leading-[var(--display-1-semi-bold-line-height)] font-display-1-semi-bold font-[number:var(--display-1-semi-bold-font-weight)] tracking-[var(--display-1-semi-bold-letter-spacing)] [font-style:var(--display-1-semi-bold-font-style)] hover:bg-app-secondary/90'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className='flex items-start justify-between w-full'>
          <nav className='inline-flex flex-col items-start gap-8'>
            <h4 className='font-[number:var(--display-3-semi-bold-font-weight)] text-white text-[length:var(--display-3-semi-bold-font-size)] leading-[var(--display-3-semi-bold-line-height)] w-fit mt-[-1.00px] font-display-3-semi-bold tracking-[var(--display-3-semi-bold-letter-spacing)] whitespace-nowrap [font-style:var(--display-3-semi-bold-font-style)]'>
              About us
            </h4>

            <ul className='inline-flex flex-col items-start gap-6'>
              {aboutUsLinks.map((link, index) => (
                <li
                  key={index}
                  className='inline-flex items-center gap-1.5'>
                  <Link
                    href={link.href}
                    className='text-[#b3b8c8] hover:text-primary transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className='inline-flex flex-col items-start gap-8'>
            <h4 className='w-fit mt-[-1.00px] font-display-3-semi-bold font-[number:var(--display-3-semi-bold-font-weight)] text-white text-[length:var(--display-3-semi-bold-font-size)] tracking-[var(--display-3-semi-bold-letter-spacing)] leading-[var(--display-3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--display-3-semi-bold-font-style)]'>
              Buyers Guide
            </h4>

            <ul className='inline-flex flex-col items-start gap-6'>
              {buyersGuideLinks.map((link, index) => (
                <li
                  key={index}
                  className='inline-flex items-center gap-1.5'>
                  <Link
                    href={link.href}
                    className='text-[#b3b8c8] hover:text-primary transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className='inline-flex flex-col items-start gap-8'>
            <h4 className='font-[number:var(--display-3-semi-bold-font-weight)] text-white text-[length:var(--display-3-semi-bold-font-size)] leading-[var(--display-3-semi-bold-line-height)] w-fit mt-[-1.00px] font-display-3-semi-bold tracking-[var(--display-3-semi-bold-letter-spacing)] whitespace-nowrap [font-style:var(--display-3-semi-bold-font-style)]'>
              Properties
            </h4>

            <ul className='inline-flex flex-col items-start gap-6'>
              {propertiesLinks.map((link, index) => (
                <li
                  key={index}
                  className='inline-flex items-center gap-1.5'>
                  <Link
                    href={link.href}
                    className='text-[#b3b8c8] hover:text-primary transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='inline-flex flex-col items-start gap-6'>
            <h4 className='font-[number:var(--display-3-semi-bold-font-weight)] text-white text-[length:var(--display-3-semi-bold-font-size)] leading-[var(--display-3-semi-bold-line-height)] w-fit mt-[-1.00px] font-display-3-semi-bold tracking-[var(--display-3-semi-bold-letter-spacing)] whitespace-nowrap [font-style:var(--display-3-semi-bold-font-style)]'>
              Contact us
            </h4>

            <div className='inline-flex items-center gap-4'>
              <img
                className='w-12 h-12'
                alt='Icon square email'
                src='/icon-square-email.svg'
              />

              <div className='inline-flex flex-col items-start justify-center gap-3'>
                <div className='font-[number:var(--display-2-regular-font-weight)] text-neutral-colors600 text-[length:var(--display-2-regular-font-size)] leading-[var(--display-2-regular-line-height)] w-fit mt-[-1.00px] font-display-2-regular tracking-[var(--display-2-regular-letter-spacing)] whitespace-nowrap [font-style:var(--display-2-regular-font-style)]'>
                  Email:
                </div>

                <a
                  href='mailto:contact@propertyquestturkey.com'
                  className='w-fit font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--display-2-semi-bold-font-style)] hover:text-white transition-colors'>
                  contact@propertyquestturkey.com
                </a>
              </div>
            </div>

            <div className='inline-flex items-center gap-4'>
              <img
                className='w-12 h-12'
                alt='Icon square phone'
                src='/icon-square-phone.svg'
              />

              <div className='inline-flex flex-col items-start justify-center gap-3'>
                <div className='font-[number:var(--display-2-regular-font-weight)] text-neutral-colors600 text-[length:var(--display-2-regular-font-size)] leading-[var(--display-2-regular-line-height)] w-fit mt-[-1.00px] font-display-2-regular tracking-[var(--display-2-regular-letter-spacing)] whitespace-nowrap [font-style:var(--display-2-regular-font-style)]'>
                  Phone:
                </div>

                <a
                  href='tel:+14146875892'
                  className='w-fit font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-2-semi-bold-font-size)] tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--display-2-semi-bold-font-style)] hover:text-white transition-colors'>
                  (414) 687 - 5892
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-2.5 px-0 py-6 w-full border-t [border-top-style:solid] border-[#e1e3ec]'>
        <p className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-neutral-colors500 text-base text-center tracking-[0] leading-4 whitespace-nowrap">
          <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            Copyright © 2025{" "}
          </span>

          <span className='text-[#b3b8c8] leading-[22px]'>
            Property Quest Turkey
          </span>

          <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            &nbsp;
          </span>

          <span className='text-[#e1e3ec] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            |
          </span>

          <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            {" "}
            All Rights Reserved{" "}
          </span>

          <span className='text-[#e1e3ec] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            |
          </span>

          <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            &nbsp;
          </span>

          <a
            href='#'
            className='text-[#6c748f] leading-[22px] underline hover:text-white transition-colors'>
            Terms and Conditions
          </a>

          <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            &nbsp;
          </span>

          <span className='text-[#e1e3ec] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            |
          </span>

          <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
            &nbsp;
          </span>

          <a
            href='#'
            className='text-[#6c748f] leading-[22px] underline hover:text-white transition-colors'>
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
