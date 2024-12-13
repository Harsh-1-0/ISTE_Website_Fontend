import Image from "next/image";
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";

const UpcomingEventsCard = ({
  title,
  image,
  date,
  time,
  speaker,
  venue,
  description,
}) => {
  return (
    <div className="w-full border-black border-4 max-w-xl md:max-w-2xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative border-b-2 border-black w-full h-56 md:h-72 overflow-hidden">
        <Image
          src={image}
          alt="Event Image"
          fill
          className="object-cover absolute inset-0"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      <div className="p-5 md:p-6 space-y-3">
        <h2 className="text-2xl md:text-3xl font-anton text-gray-900 truncate">
          {title}
        </h2>
        <h3 className="text-lg md:text-xl font-hamlin text-gray-700">
          {speaker}
        </h3>
        <p className="text-base md:text-lg font-hamlin text-gray-600 line-clamp-3">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-3 mt-4 border-t pt-4">
          <div className="flex items-center space-x-3">
            <CiCalendar className="w-6 h-6 md:w-7 md:h-7 text-blue-500" />
            <span className="text-sm md:text-base font-bold text-gray-700">
              {date}
            </span>
          </div>
          <div className="flex items-center space-x-3 border-x px-3">
            <CiClock2 className="w-6 h-6 md:w-7 md:h-7 text-green-500" />
            <span className="text-sm md:text-base font-bold text-gray-700">
              {time}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CiLocationOn className="w-6 h-6 md:w-7 md:h-7 text-red-500" />
            <span className="text-sm md:text-base font-bold text-gray-700">
              {venue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
