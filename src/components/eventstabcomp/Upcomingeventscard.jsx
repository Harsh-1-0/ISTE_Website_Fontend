import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const Upcomingeventscard = () => {
  return ( 
    <div className="flex flex-col self-center m-8 md:my-[90px] font-hamlin w-[300px] md:w-[60%] border-4 border-black">
      <div className="flex items-center justify-center"><Image src="/Pictures/gridpngs/pygamegrid.png" alt="eventimg" width={1080} height={1080} className="w-[360px] h-[120px] md:w-[930px] md:h-[310px]"/></div>
      <div className="flex flex-col border-y-4 border-black py-5"> 
        <div className="pl-5 md:pl-8 p-2 md:py-2 text-lg md:text-3xl md:font-bold font-anton md:font-hamlin">build.apk</div>
        <div className="pl-5 md:pl-8 p-2 text-sm md:text-2xl">By Ashwani Kumar Moudgil</div>
        <div className="pl-5 md:pl-8 p-2 py-2 md:py-3 text-sm md:text-2xl text-wrap">Participants will engage in an immersive Kotlin and Android app develoment workshop, learning to build powerful mobile apps from scratch.</div>
      </div>
      <div className="grid md:grid-cols-3 py-2 md:py-0 text-sm md:text-2xl justify-between">
        <div className="flex items-center p-1 md:p-3">
          <div className="px-1 md:px-2"><CiCalendar size={20} className="md:w-[30px] md:h-[30px]"/></div>
          <div className="px-1 md:px-2">01/01/2024</div>
        </div>
        <div className="flex items-center md:border-x-4 md:border-black p-1 md:p-2">
          <div className="px-1 md:px-2"><CiClock2 size={20} className="md:w-[30px] md:h-[30px]"/></div>
          <div className="px-1 md:px-2">Time</div>
        </div>
        <div className="flex items-center p-1 md:p-2">
          <div className="px-1 md:px-2"><CiLocationOn size={20} className="md:w-[30px] md:h-[30px]"/></div>
          <div className="px-1 md:px-2">Location</div>
        </div>
      </div>
    </div>
   );
}
 
export default Upcomingeventscard;