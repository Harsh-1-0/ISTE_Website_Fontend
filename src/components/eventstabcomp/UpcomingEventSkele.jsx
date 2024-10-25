import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const UpcomingEventSkele = ({ cards }) => {
  return (
    <SkeletonTheme baseColor="#3C3D37" highlightColor="#181C14">
      {Array.from({ length: cards }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col self-center m-8 md:my-[90px] font-hamlin w-[300px] md:w-[40%] border-4 border-black"
        >
          {/* Image section skeleton */}
          <div className="flex bg-[#3C3D37] items-center justify-center">
            <Skeleton className="md:w-[930px] md:h-[310px]" />
          </div>

          {/* Title, Speaker, and Description section skeleton */}
          <div className="flex flex-col border-y-4 border-black py-5 px-4">
            <div className="pl-5 md:pl-8 p-2 md:py-2">
              <Skeleton height={30} width="75%" />
            </div>
            <div className="pl-5 md:pl-8 p-2">
              <Skeleton height={25} width="50%" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 font-hamlin py-2 md:py-0 text-sm md:text-lg justify-between">
            <div className="flex items-center p-1 md:p-3">
              <div className="px-1 md:px-2">
                <CiCalendar size={20} className="md:w-[30px] md:h-[30px]" />
              </div>
              <div className="px-1 font-bold md:px-2 text-gray-700">
                {" "}
                <Skeleton height={30} width="75%" />
              </div>
            </div>
            <div className="flex items-center md:border-x-4 md:border-black p-1 md:p-2">
              <div className="px-1 md:px-2">
                <CiClock2 size={20} className="md:w-[30px] md:h-[30px]" />
              </div>
              <div className="px-1 font-bold md:px-2 text-gray-700">
                {" "}
                <Skeleton height={30} width="75%" />
              </div>
            </div>
            <div className="flex items-center p-1 md:p-2">
              <div className="px-1  md:px-2">
                <CiLocationOn size={20} className="md:w-[30px] md:h-[30px]" />
              </div>
              <div className="px-1 font-bold md:px-2 text-gray-700">
                {" "}
                <Skeleton height={30} width="75%" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </SkeletonTheme>
  );
};

export default UpcomingEventSkele;
