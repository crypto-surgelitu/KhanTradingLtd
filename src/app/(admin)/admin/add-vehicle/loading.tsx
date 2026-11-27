// Loading skeleton for the Admin Add Vehicle screen (DESIGN.md Screen D).

export default function AdminAddVehicleLoading() {
  return (
    <div
      aria-hidden="true"
      className="flex min-h-screen animate-pulse flex-col bg-ivory motion-reduce:animate-none lg:flex-row"
    >
      <div className="bg-graphite px-4 py-6 lg:w-64 lg:shrink-0">
        <div className="h-10 w-40 rounded-sm bg-white/10" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-stone bg-white px-4 py-4 sm:px-6">
          <div className="h-6 w-56 rounded-sm bg-stone" />
        </div>
        <div className="flex flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="h-10 w-72 rounded-sm bg-stone" />
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-64 rounded-md bg-stone" />
          ))}
        </div>
      </div>
    </div>
  );
}
