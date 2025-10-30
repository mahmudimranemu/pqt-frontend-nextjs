// app/search/page.tsx
import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import UniversalSearchForm from "@/components/UniversalSearchForm";
import { fetchProperties } from "@/lib/wpapi";
import { Property } from "@/types/property";

export default async function SearchPage() {
  const properties = await fetchProperties();

  return (
    <>
      <header
        style={{
          backgroundImage: `url('/images/slide1.jpg')`,
        }}
        className='w-full h-[30vh] bg-cover bg-center items-end flex justify-center relative overflow-hidden'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/80'></div>
        <div className='flex flex-col gap-3 items-end w-full z-10'>
          <UniversalSearchForm initialProperties={properties} />
        </div>
      </header>
      <div className='w-full mx-auto px-36'>
        <div className='py-10'>
          <h1 className='text-3xl font-bold mb-6'>Find Turkish Properties</h1>
          <p>
            Turkey, with its rich history, vibrant culture, and strategic
            location at the crossroads of Europe and Asia, has emerged as a
            lucrative destination for foreign investors seeking opportunities in
            the real estate sector. In recent years, the Turkish real estate
            market has witnessed a surge in interest from international
            investors, driven by various factors that make the country an
            attractive investment destination. Dive into our website to check
            all the properties for sale.
          </p>
        </div>
        <SearchResults initialProperties={properties} />
      </div>
    </>
  );
}
