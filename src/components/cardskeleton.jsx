import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton({ cards }) {
  return (
    <>
      <SkeletonTheme baseColor="#3C3D37" highlightColor="#181C14">
        {Array.from({ length: cards }).map((_, index) => (
          <div
            key={index}
            className="w-full opacity-20  max-w-md bg-gray-100 border-4 border-[#282925] flex flex-col md:flex-row  overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="w-full md:w-2/5 lg:w-1/2 justify-center items-center relative aspect-[4/3] md:aspect-square bg-no-repeat bg-center grayscale hover:grayscale-0 transition-all duration-500 ease-in-out bg-gradient-animate"></div>

            {/* Text and icons skeleton */}
            <div className="flex flex-col justify-between p-4 md:p-6 w-full md:w-3/5 lg:w-2/3">
              {/* Name, Surname, Domain skeleton */}
              <div className="flex flex-col items-start mb-4">
                {/* Skeleton for name */}
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  <Skeleton width={150} />
                </h2>
                {/* Skeleton for surname */}
                <h3 className="text-xl md:text-2xl leading-tight">
                  <Skeleton width={120} />
                </h3>
                {/* Skeleton for domain */}
                <p className="text-lg mt-2 text-gray-600">
                  <Skeleton width={100} />
                </p>
              </div>

              {/* Icons skeleton */}
              <div className="flex justify-between text-2xl md:text-3xl">
                {/* Skeleton circles for icons */}
                <Skeleton circle width={50} height={50} />
                <Skeleton circle width={50} height={50} />
              </div>
            </div>
          </div>
        ))}
      </SkeletonTheme>
    </>
  );
}
