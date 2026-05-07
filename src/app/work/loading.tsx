export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header Skeleton */}
        <div className="max-w-3xl mb-16 animate-pulse">
          <div className="h-4 w-24 bg-surface-dark rounded-full mb-6" />
          <div className="h-12 w-64 bg-surface-dark rounded-lg mb-4" />
          <div className="h-6 w-96 bg-surface-dark rounded-lg" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-surface-dark animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
