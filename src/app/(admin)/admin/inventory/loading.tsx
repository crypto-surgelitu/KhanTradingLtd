// Loading skeleton for the Admin Inventory screen (DESIGN.md Screen C).

export default function AdminInventoryLoading() {
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
          <div className="h-10 w-64 rounded-sm bg-stone" />
          <div className="h-24 rounded-md bg-stone" />
          <div className="h-96 rounded-md bg-stone" />
          <div className="h-12 w-full rounded-sm bg-stone" />
        </div>
      </div>
    </div>
  );
}
