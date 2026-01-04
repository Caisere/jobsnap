export default function BrowsejobLoadingSkeleton() {
  return (
    <div className="w-full bg-mainBackground h-screen flex justify-center items-center">
      <div className="bg-white/10 rounded-lg shadow-sm p-8 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <div className="h-5 bg-gray-700 rounded w-32 mb-4 animate-pulse"></div>
          <div className="h-9 bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-700 rounded w-1/2 mb-4 animate-pulse"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-5 bg-gray-700 rounded w-24 animate-pulse"></div>
            <div className="h-5 bg-gray-700 rounded w-2 animate-pulse"></div>
            <div className="h-5 bg-gray-700 rounded w-20 animate-pulse"></div>
            <div className="h-5 bg-gray-700 rounded w-2 animate-pulse"></div>
            <div className="h-5 bg-gray-700 rounded w-28 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-700 rounded w-32 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-2 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-24 animate-pulse"></div>
          </div>
        </div>

        <div className="prose max-w-none">
          <div className="h-7 bg-gray-700 rounded w-40 mb-4 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-4/5 animate-pulse"></div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="h-10 bg-gray-700 rounded w-32 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
