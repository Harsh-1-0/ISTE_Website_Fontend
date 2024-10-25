import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Galleryskeleton = ({ imgs }) => {
  return (
    <SkeletonTheme baseColor="#3C3D37" highlightColor="#181C14">
      {Array.from({ length: imgs }).map((_, index) => (
        <div key={index} className="mb-4 break-inside-avoid p-4 border-4 border-black transition-all duration-500 bg-gray-100">
          <Skeleton 
            className="w-full h-[200px] sm:h-[250px] md:w-[420px] md:h-[340px]"
            width="100%" 
            height={340} 
          />
        </div>
      ))}
    </SkeletonTheme>
  );
};

export default Galleryskeleton;
