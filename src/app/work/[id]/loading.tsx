export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Skeleton Header */}
        <div className="mb-16 animate-pulse">
          <div className="h-4 w-32 bg-surface-dark rounded mb-4" />
          <div className="h-16 w-3/4 bg-surface-dark rounded mb-6" />
          <div className="h-8 w-48 bg-surface-dark rounded" />
        </div>

        {/* Skeleton Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mb-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-3 w-16 bg-surface-dark rounded mb-2" />
              <div className="h-8 w-24 bg-surface-dark rounded" />
            </div>
          ))}
        </div>

        {/* Skeleton Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="animate-pulse space-y-4">
            <div className="h-4 w-24 bg-surface-dark rounded" />
            <div className="h-8 w-48 bg-surface-dark rounded mb-6" />
            <div className="h-4 w-full bg-surface-dark rounded" />
            <div className="h-4 w-full bg-surface-dark rounded" />
            <div className="h-4 w-2/3 bg-surface-dark rounded" />
          </div>
          <div className="animate-pulse space-y-4">
            <div className="h-4 w-24 bg-surface-dark rounded" />
            <div className="h-8 w-48 bg-surface-dark rounded mb-6" />
            <div className="h-4 w-full bg-surface-dark rounded" />
            <div className="h-4 w-full bg-surface-dark rounded" />
            <div className="h-4 w-2/3 bg-surface-dark rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
