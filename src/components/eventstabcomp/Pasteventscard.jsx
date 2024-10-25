import Image from "next/image";
import { useState } from "react";

const PastEventsCard = ({
  title,
  image,
  speaker,
  description,
  galleryImages = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative w-full max-w-[300px] md:max-w-[40%] mx-auto my-8 md:my-[90px] font-hamlin">
      {/* Main Card */}
      <div
        className="flex flex-col border-4 border-black bg-white transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative w-full grayscale hover:grayscale-0 border-b-2 border-black  aspect-[3/1] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className=" transition-transform duration-700 ease-in-out group-hover:scale-110"
            priority
          />
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col border-t-4 border-black p-4 md:p-6 transform transition-all duration-500">
          <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-3 transform transition-all duration-500 group-hover:translate-x-2">
            {title}
          </h2>

          <h3 className="text-sm md:text-xl text-gray-700 mb-2 transform transition-all duration-500 delay-75 group-hover:translate-x-2">
            {speaker}
          </h3>

          <p className="text-sm md:text-lg text-gray-600 transform transition-all duration-500 delay-100 group-hover:translate-x-2">
            {description}
          </p>
        </div>
      </div>

      {/* Hover Gallery */}

      {isHovered && galleryImages.length > 0 && (
        <div className="absolute left-0 right-0  bg-white  border-4 border-black shadow-2xl p-4 z-10 animate-fade-up">
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.slice(0, 3).map((galleryImage, index) => (
              <div
                key={index}
                className="relative aspect-square transform transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeSlideUp 0.5s ease forwards",
                }}
              >
                <Image
                  src={galleryImage}
                  alt="Event Images"
                  fill
                  className=" border-4 border-black transition-all duration-500 hover:shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PastEventsCard;
