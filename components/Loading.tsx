import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Properties</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[...Array(6)].map(
          (
            _,
            index // Simulate 6 placeholder cards
          ) => (
            <Card
              key={index}
              className='animate-pulse'>
              <CardContent className='pt-6'>
                <div className='h-6 bg-gray-200 rounded mb-4'></div>
                <div className='h-4 bg-gray-200 rounded mb-2'></div>
                <div className='h-4 bg-gray-200 rounded'></div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
