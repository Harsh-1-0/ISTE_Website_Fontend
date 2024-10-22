import Link from "next/link";
import Grid from "./grid/Grid";
import { FaArrowRight } from "react-icons/fa6";

const Eventshero = () => {
  return ( 
    <div className="my-10 flex flex-col justify-center items-center overflow-x-hidden">
      <div className="text-6xl md:text-8xl lg:text-9xl py-4 border-black border-b-4">EVENTS</div>
      <div><Grid /></div>
      <div className="flex items-center text-lg md:text-2xl lg:text-3xl py-4 font-hamlin">
        <div>Explore all our events</div>
        <Link href="/events " className="px-4"><FaArrowRight /></Link>
      </div>
    </div>
   );
}
 
export default Eventshero;