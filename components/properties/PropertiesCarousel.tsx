import PropertyCard from "./PropertyCard";
import { fetchProperties } from "@/lib/wpapi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function PropertiesCarousel() {
  const properties = await fetchProperties();

  return (
    <div className='flex lg:w-7xl w-[400px] justify-between gap-4'>
      <Carousel
        opts={{
          align: "start",
        }}
        className='w-full'>
        <CarouselContent>
          {properties.map((property) => (
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
