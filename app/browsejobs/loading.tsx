export default function JobListingSkeleton() {
  return (
    <div className="space-y-8 mt-20">
      {/* <div className="p-6 rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto w-full pb-4">
          <h1 className="text-2xl font-bold text-primary mb-6">Find Jobs</h1>
          <form className="grid gap-4 md:grid-cols-3">
            <div className="h-12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-12 bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-12 bg-gray-700 rounded-md animate-pulse"></div>
          </form>
        </div>
      </div> */}

      <div className="grid gap-6 max-w-7xl mx-auto w-full pb-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-mainBackground p-6 rounded-lg shadow-sm border border-primary"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="h-7 bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-5 bg-gray-700 rounded w-1/2 mb-2 animate-pulse"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-4 bg-gray-700 rounded w-24 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-20 animate-pulse"></div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
                </div>
              </div>
              <div className="h-6 bg-gray-700 rounded w-24 animate-pulse ml-4"></div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="h-4 bg-gray-700 rounded w-32 animate-pulse"></div>
              <div className="h-10 bg-gray-700 rounded w-32 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
