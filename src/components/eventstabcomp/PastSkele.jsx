import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const PastEventsSkele = ({ cards }) => {
  return (
    <>
      <SkeletonTheme baseColor="#3C3D37" highlightColor="#181C14">
        <div className="flex flex-wrap">
          {Array.from({ length: cards }).map((_, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[300px] md:max-w-[40%] mx-auto my-8 md:my-[90px] font-hamlin"
            >
              <div className="flex flex-col border-4 border-black bg-white transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative w-full grayscale bg-[#3C3D37] hover:grayscale-0 border-b-2 border-black aspect-[3/1] overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Container */}
                <div className="flex flex-col border-t-4 border-black p-4 md:p-6 transform transition-all duration-500">
                  <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-3 transform transition-all duration-500 group-hover:translate-x-2">
                    <Skeleton height={40} width="75%" />
                  </h2>

                  <h3 className="text-sm md:text-xl text-gray-700 mb-2 transform transition-all duration-500 delay-75 group-hover:translate-x-2">
                    <Skeleton height={30} width="60%" />
                  </h3>

                  <p className="text-sm md:text-lg text-gray-600 transform transition-all duration-500 delay-100 group-hover:translate-x-2">
                    <Skeleton height={30} width="50%" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SkeletonTheme>
    </>
  );
};

export default PastEventsSkele;
