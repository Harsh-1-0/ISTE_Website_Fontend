import Link from "next/link";
import Grid from "./grid/Grid";
import { FaArrowRight } from "react-icons/fa6";

const Eventshero = () => {
  return ( 
    <div className="my-10 flex flex-col justify-center items-center overflow-x-hidden">
      <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 flex flex-col items-center group w-full hover:text-[#27A5EF]">
        EVENTS
        <hr className="h-1 w-[22%] bg-black mt-4 transition-all duration-300 group-hover:w-[85%]" />
      </div>
      <div><Grid /></div>
      <div className="flex items-center text-lg md:text-2xl lg:text-3xl py-4 font-hamlin">
        <div>Explore all our events</div>
        <Link href="/events " className="px-4"><FaArrowRight /></Link>
      </div>
    </div>
   );
}
 
export default Eventshero;