export function TodoTasksSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {Array.from({ length: 3 }, (_, outerIndex) => (
        <div className="space-y-4" key={outerIndex}>
          <div className="text-xl font-semibold w-36 h-7 bg-gray-200 rounded-lg"></div>
          <div className="space-y-4">
            {Array.from({ length: 3 }, (_, innerIndex) => (
              <div
                key={innerIndex}
                className="w-full p-4 border-gray-200/50 bg-slate-200/50 border shadow-md rounded-lg animate-pulse space-y-2"
              >
                <div className="text-lg font-bold h-6 w-48 bg-gray-200 rounded-lg"></div>
                <div className="text-sm h-4 w-64 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
