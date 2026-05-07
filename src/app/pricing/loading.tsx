export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center animate-pulse">
          <div className="h-8 w-32 bg-surface-dark rounded-full mx-auto mb-6" />
          <div className="h-12 w-96 bg-surface-dark rounded-lg mx-auto mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[500px] rounded-2xl bg-surface-dark" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
