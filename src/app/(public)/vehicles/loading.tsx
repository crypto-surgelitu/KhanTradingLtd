// Loading skeleton for the Vehicles screen (DESIGN.md Screen 2). Placeholder
// blocks use the stone token; animation is disabled for reduced motion.

export default function VehiclesLoading() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto max-w-7xl animate-pulse px-4 pb-14 pt-8 motion-reduce:animate-none sm:px-6 sm:pb-18 lg:px-8 lg:pb-24"
    >
      <div className="flex flex-col gap-4 pb-8">
        <div className="h-4 w-24 rounded-sm bg-stone" />
        <div className="h-10 w-48 rounded-sm bg-stone" />
        <div className="h-4 w-full max-w-xl rounded-sm bg-stone" />
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="h-96 rounded-md bg-stone lg:col-span-3" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md border border-stone bg-white"
            >
              <div className="aspect-card bg-stone" />
              <div className="flex flex-col gap-3 p-4">
                <div className="h-5 w-3/4 rounded-sm bg-stone" />
                <div className="h-4 w-1/2 rounded-sm bg-stone" />
                <div className="h-4 w-2/3 rounded-sm bg-stone" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
