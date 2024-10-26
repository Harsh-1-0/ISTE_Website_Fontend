import Image from "next/image";
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";

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
    <div className="flex flex-col self-center m-6 md:my-[90px] w-[320px] md:w-[62%] p-4 border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-300 hover:border-[#27A5EF] hover:shadow-[0_0_25px_rgba(39,165,239,0.5)]">
      <div className="flex flex-col bg-white w-full h-full border-black border-4">
        <div className="flex items-center justify-center">
          <Image
            src={image}
            alt="eventimg"
            width={1080}
            height={1080}
            className="w-[360px] h-[120px] md:w-[930px] md:h-[310px] object-cover"
          />
        </div>

        <div className="flex flex-col border-y-4 border-black py-5">
          <div className="pl-5 md:pl-8 p-2 md:py-2 text-3xl md:text-5xl text-black font-anton">
            {title}
          </div>
          <div className="pl-5 md:pl-8 p-2 text-xl md:text-3xl font-hamlin text-gray-800">
            {speaker}
          </div>
          <div className="pl-5 font-hamlin md:pl-8 p-2 py-2 md:py-3 text-lg md:text-xl text-gray-600 leading-relaxed">
            {description}
          </div>
        </div>

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
            <div className="px-1 md:px-2">
              <CiLocationOn size={20} className="md:w-[30px] md:h-[30px]" />
            </div>
            <div className="px-1 font-bold md:px-2 text-gray-700">{venue}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomingeventscard;
