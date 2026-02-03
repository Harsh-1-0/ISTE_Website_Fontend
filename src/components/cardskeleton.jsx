import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton({ cards }) {
  return (
    <SkeletonTheme baseColor="#3C3D37" highlightColor="#181C14">
      {Array.from({ length: cards }).map((_, index) => (
        <div
          key={index}
          className="w-full opacity-20 max-w-md bg-gray-100 border-4 border-[#282925]
          flex flex-col md:flex-row overflow-hidden shadow-lg"
        >
          {/* Image Skeleton */}
          <div className="w-full md:w-2/5 lg:w-1/2 aspect-[16/9] md:aspect-square bg-gray-300" />

          {/* Content Skeleton */}
          <div className="flex flex-col w-full md:w-3/5 lg:w-1/2">
            {/* Text */}
            <div className="flex flex-col items-start py-2 px-5 flex-grow">
              <Skeleton width={150} height={28} />
              <Skeleton width={120} height={24} className="mt-2" />
              <Skeleton width={140} height={18} className="mt-3" />
              {/* company placed */}
              <Skeleton width={110} height={16} className="mt-2" />
            </div>

            {/* Icons */}
            <div className="grid grid-cols-2 border-t-4 border-black">
              <div className="p-5 grid place-items-center border-r-2 border-black">
                <Skeleton circle width={40} height={40} />
              </div>
              <div className="p-5 grid place-items-center">
                <Skeleton circle width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </SkeletonTheme>
  );
}
