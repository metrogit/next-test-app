import { Skeleton } from "../ui/skeleton";

const CryptoListSkeletonLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-100 rounded-full z-10 blur-[100px]" />

      {Array.from({ length: 24 }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg p-2 m-1">
          <div className="border p-2 py-4 rounded-lg px-4 relative z-20">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Skeleton className="size-10 rounded-full" />
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-5 w-24" />
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-3 w-12" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-3 w-12" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoListSkeletonLoading;
