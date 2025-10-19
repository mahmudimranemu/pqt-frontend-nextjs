import PropertyCard from "./PropertyCard";
import { fetchData } from "@/lib/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Property {
  id: number;
  title: string;
  description: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  price: number;
  location: string;
  featuredImage: string;
}

export default async function PropertiesCarousel() {
  const data = await fetchData<Property[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`
  );

  return (
    <div className='flex w-7xl justify-between gap-4'>
      <Carousel
        opts={{
          align: "start",
        }}
        className='w-full'>
        <CarouselContent>
          {data.map((property: Property) => (
            <CarouselItem
              key={property.id}
              className='md:basis-1/2 lg:basis-1/3'>
              <PropertyCard property={property} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
