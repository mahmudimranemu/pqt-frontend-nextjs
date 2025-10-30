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
import Link from "next/link";
import { Property } from "@/types/property";
import { trim } from "zod";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US").format(price);
  };

  const rawHtmlArray = property.property_meta?.overview || [];
  const rawHtml = Array.isArray(rawHtmlArray) ? rawHtmlArray[0] : "";
  const plainText = rawHtml.replace(/<[^>]*>/g, "").trim(); // Strip HTML
  const overview = plainText
    ? plainText.length > 100
      ? plainText.slice(0, 97) + "..."
      : plainText
    : "No overview available";

  const title = property.title.rendered;
  const trimTitle = title.length > 70 ? title.slice(0, 65) + "..." : title;
  // const truncate = (input: string) =>
  //   input?.length > 75 ? `${input.substring(0, 70)}...` : input;

  return (
    <Card className='w-full p-0'>
      <div
        className='w-full h-70 bg-cover bg-center rounded-t-lg flex justify-between p-4'
        style={{ backgroundImage: `url(${property.featured_image_url})` }}>
        <Link
          href='#'
          passHref>
          <Button
            asChild
            className='rounded-full bg-black/10'>
            <span>
              <Heart />
            </span>
          </Button>
        </Link>

        <Link
          href='#'
          passHref>
          <Button
            asChild
            className='bg-blue-800/80 rounded-sm'>
            <span>Apartment</span>
          </Button>
        </Link>
      </div>
      <CardHeader>
        <CardTitle className='font-semibold text-lg'>
          <Link href={`property/${property.slug}`}>{trimTitle}</Link>
        </CardTitle>
        <CardDescription>{overview}</CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between'>
        <span className='flex gap-1 items-center'>
          <MapPin
            size={16}
            className='text-blue-800'
          />
          <p className='text-sm text-gray-500'>{property.property_city}</p>
        </span>
        <span className='flex gap-1 items-center'>
          <Bed
            size={16}
            className='text-blue-800'
          />
          <p className='text-sm text-gray-500'>
            {property.property_meta?.fave_property_bedrooms || "1"} Beds
          </p>
        </span>
        <span className='flex gap-1 items-center'>
          <Bath
            size={16}
            className='text-blue-800'
          />
          <p className='text-sm text-gray-500'>
            {property.property_meta?.fave_property_bathrooms || "1"} Baths
          </p>
        </span>
        <span className='flex gap-1 items-center'>
          <RulerDimensionLine
            size={16}
            className='text-blue-800'
          />
          <p className='text-sm text-gray-500'>
            {property.property_meta?.fave_property_size || "100"} sq.m
          </p>
        </span>
      </CardContent>
      <CardFooter className='pb-4 flex justify-between'>
        <p className='text-red-600 font-semibold'>
          ${formatPrice(property.property_meta?.fave_property_price || "N/A")}
        </p>
        <Link
          href='#'
          passHref>
          <Button
            asChild
            className='ml-auto bg-red-600 text-white hover:bg-red-700'>
            <span>
              <ArrowRight />
            </span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
