import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Upcomingeventscard = ({
  title,
  image,
  date,
  time,
  speaker,
  venue,
  description,
}) => {
  return (
    <div className="flex flex-col self-center m-8 md:my-[90px] font-hamlin w-[300px] md:w-[60%] border-4 border-black">
      {/* Image section */}
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt="eventimg"
          width={1080}
          height={1080}
          className="w-[360px] h-[120px] md:w-[930px] md:h-[310px] object-cover"
        />
      </div>

      {/* Title, Speaker, and Description section */}
      <div className="flex flex-col border-y-4 border-black py-5">
        <div className="pl-5  md:pl-8 p-2 md:py-2 text-3xl md:text-5xl font-bold text-black font-anton">
          {title}
        </div>
        <div className="pl-5  md:pl-8 p-2 text-xl md:text-3xl font-bold  text-gray-800">
          {speaker}
        </div>
        <div className="pl-5 font-bold md:pl-8 p-2 py-2 md:py-3  text-lg md:text-xl text-gray-600 leading-relaxed">
          {description}
        </div>
      </div>

      {/* Date, Time, and Venue section */}
      <div className="grid md:grid-cols-3 font-hamlin py-2 md:py-0 text-sm md:text-lg justify-between">
        <div className="flex items-center p-1 md:p-3">
          <div className="px-1 md:px-2">
            <CiCalendar size={20} className="md:w-[30px] md:h-[30px]" />
          </div>
          <div className="px-1 font-bold md:px-2 text-gray-700">{date}</div>
        </div>
        <div className="flex items-center md:border-x-4 md:border-black p-1 md:p-2">
          <div className="px-1 md:px-2">
            <CiClock2 size={20} className="md:w-[30px] md:h-[30px]" />
          </div>
          <div className="px-1 font-bold md:px-2 text-gray-700">{time}</div>
        </div>
        <div className="flex items-center p-1 md:p-2">
          <div className="px-1  md:px-2">
            <CiLocationOn size={20} className="md:w-[30px] md:h-[30px]" />
          </div>
          <div className="px-1 font-bold md:px-2 text-gray-700">{venue}</div>
        </div>
      </div>
    </div>
  );
};

export default Upcomingeventscard;
