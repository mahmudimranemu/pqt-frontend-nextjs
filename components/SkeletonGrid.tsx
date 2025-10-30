// components/SkeletonGrid.tsx
export function SkeletonGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className='animate-pulse rounded-lg bg-muted h-64'
        />
      ))}
    </div>
  );
}
