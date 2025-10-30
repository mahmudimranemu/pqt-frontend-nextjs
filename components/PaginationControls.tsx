// components/PaginationControls.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  current: number;
  totalPages: number;
  basePath: string;
}

export default function PaginationControls({
  current,
  totalPages,
  basePath,
}: PaginationControlsProps) {
  const searchParams = useSearchParams();
  const extraParams = searchParams.get("sort")
    ? `&sort=${searchParams.get("sort")}`
    : "";

  const prev =
    current > 1 ? `${basePath}?page=${current - 1}${extraParams}` : null;
  const next =
    current < totalPages
      ? `${basePath}?page=${current + 1}${extraParams}`
      : null;

  return (
    <div className='flex items-center justify-center gap-2 mt-8'>
      {prev ? (
        <Button
          asChild
          variant='outline'
          size='sm'>
          <Link href={prev}>
            <ChevronLeft className='mr-1 h-4 w-4' />
            Prev
          </Link>
        </Button>
      ) : (
        <Button
          variant='outline'
          size='sm'
          disabled>
          <ChevronLeft className='mr-1 h-4 w-4' />
          Prev
        </Button>
      )}

      <span className='text-sm text-muted-foreground'>
        Page {current} of {totalPages}
      </span>

      {next ? (
        <Button
          asChild
          variant='outline'
          size='sm'>
          <Link href={next}>
            Next
            <ChevronRight className='ml-1 h-4 w-4' />
          </Link>
        </Button>
      ) : (
        <Button
          variant='outline'
          size='sm'
          disabled>
          Next
          <ChevronRight className='ml-1 h-4 w-4' />
        </Button>
      )}
    </div>
  );
}
