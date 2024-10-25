import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PasteventscardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
      <div className="flex flex-col self-center m-8 md:my-[90px] font-hamlin w-[300px] md:w-[40%] border-4 border-black">
        {/* Image section skeleton */}
        <div className="flex items-center justify-center">
          <Skeleton
            width={360}
            height={120}
            className="md:w-[930px] md:h-[310px]"
          />
        </div>

        {/* Title, Speaker, and Description section skeleton */}
        <div className="flex flex-col border-t-4 border-black py-5 px-4">
          <div className="pl-5 md:pl-8 p-2 md:py-2">
            <Skeleton height={30} width="75%" />
          </div>
          <div className="pl-5 md:pl-8 p-2">
            <Skeleton height={25} width="50%" />
          </div>
          <div className="pl-5 md:pl-8 p-2 py-2 md:py-3">
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="100%" className="mt-2" />
            <Skeleton height={20} width="80%" className="mt-2" />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default PasteventscardSkeleton;
