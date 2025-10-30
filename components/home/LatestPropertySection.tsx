import PropertiesCarousel from "../properties/PropertiesCarousel";
import PropertyCard from "../properties/PropertyCard";
import { Button } from "../ui/button";

export default function LatestPropertySection() {
  const locationTabs = [
    { label: "All", active: false },
    { label: "Bodrum", active: false },
    { label: "Istanbul", active: true },
    { label: "Antalya", active: false },
    { label: "Bursa", active: false },
  ];
  return (
    <section className='flex flex-col items-center gap-12 px-0 py-20'>
      <h2 className="self-stretch [font-family:'Inter',Helvetica] font-bold text-red-800 text-[40px] text-center tracking-[-1.60px] leading-[48.0px]">
        Today&apos;s recommended Turkish properties
      </h2>
      {/* <div className='inline-flex items-center'>
        {locationTabs.map((tab, index) => {
          const isFirst = index === 0;
          const isLast = index === locationTabs.length - 1;
          const roundedClass = isFirst
            ? "rounded-[8px_0px_0px_8px]"
            : isLast
            ? "rounded-[0px_8px_8px_0px]"
            : "";

          return (
            <Button
              key={tab.label}
              variant='ghost'
              className={`h-auto gap-1 px-[22px] py-[18px] ${roundedClass} ${
                tab.active
                  ? "bg-[#ffffff] border border-solid border-[#e20a17]"
                  : "bg-app-primary"
              } shadow-[0px_1px_4px_#18203c14] rounded-none hover:bg-opacity-90`}>
              <span
                className={`font-display-3-semi-bold font-[number:var(--display-3-semi-bold-font-weight)] text-[length:var(--display-3-semi-bold-font-size)] text-center tracking-[var(--display-3-semi-bold-letter-spacing)] leading-[var(--display-3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--display-3-semi-bold-font-style)] ${
                  tab.active ? "text-black" : "text-[#ffffff]"
                }`}>
                {tab.label}
              </span>
            </Button>
          );
        })}
      </div> */}

      <PropertiesCarousel />
    </section>
  );
}
