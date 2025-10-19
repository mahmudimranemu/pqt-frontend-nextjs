import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Bath,
  Bed,
  Heart,
  MapPin,
  RulerDimensionLine,
} from "lucide-react";

interface PropertyCardProps {
  property: {
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
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US").format(price);
  };

  return (
    <Card className='w-full p-0'>
      <div
        className='w-full h-52 bg-cover bg-center rounded-t-lg flex justify-between p-4'
        style={{ backgroundImage: `url(${property.featuredImage})` }}>
        <Button className='rounded-full bg-black/10'>
          <Heart />
        </Button>
        <Button className='bg-blue-800/80 rounded-sm'>{property.type}</Button>
      </div>
      <CardHeader>
        <CardTitle className='font-semibold text-lg'>
          {property.title}
        </CardTitle>
        <CardDescription>{property.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between'>
        <span className='flex gap-1 items-center'>
          <MapPin
            size={16}
            className='text-blue-800'
          />
          <p className='text-sm text-gray-500'>{property.location}</p>
        </span>
        <span className='flex gap-1 items-center'>
          <Bed
            size={16}
            className='text-blue-800'
          />
          <p className='text-sm text-gray-500'>{property.bedrooms} Beds</p>
        </span>
        <span className='flex gap-1 items-center'>
          <Bath
            size={16}
            className='text-blue-800'
          />
          <p className='text-sm text-gray-500'>{property.bathrooms} Baths</p>
        </span>
        <span className='flex gap-1 items-center'>
          <RulerDimensionLine
            size={16}
            className='text-blue-800'
          />
          <p className='text-sm text-gray-500'>{property.area}</p>
        </span>
      </CardContent>
      <CardFooter className='pb-4'>
        <p className='text-red-600 font-semibold'>
          ${formatPrice(property.price)}
        </p>
        <Button className='ml-auto bg-red-600 text-white hover:bg-red-700'>
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}
