import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title='About Us'
        backgroundImage='/images/img2.jpg'
        description='Turkey, with its rich history, vibrant culture, and strategic location at the crossroads of Europe and Asia, has emerged as a lucrative destination for foreign investors seeking opportunities in the real estate sector. In recent years, the Turkish real estate market has witnessed a surge in interest from international investors, driven by various factors that make the country an attractive investment destination. Dive into our website to check all the properties for sale.'
      />
      <main className='max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-0'>
            <h1 className="font-extrabold text-dark-red text-4xl tracking-[-1.08px] leading-9 [font-family:'Inter',Helvetica]">
              About
            </h1>

            <h2 className="[font-family:'Playfair_Display'] font-normal leading-9 text-dark-red text-4xl tracking-[-1.08px]">
              Property Quest Turkey
            </h2>
          </div>

          <p className="max-w-[618px] text-neutral-700 text-base leading-6 [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            Property Quest Turkey was founded on the principle of providing the
            best Turkish investment opportunities to a global audience. No
            matter why you came to Turkey, whether it was to make a well-founded
            investment or to start a new life for your family, we will help you
            as a cohesive global team.
            <br />
            <br /> We’ll be here to help you take the initial step toward
            purchasing your next location in Turkey, till the moment you receive
            the key to your new home.
          </p>
        </div>
      </main>
    </>
  );
}
