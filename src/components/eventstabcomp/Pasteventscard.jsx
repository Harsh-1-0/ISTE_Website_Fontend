import Image from "next/image";
const Pasteventscard = () => {
  return ( 
    <div className="flex flex-col self-center m-8 md:my-[90px] font-hamlin w-[300px] md:w-[40%] border-4 border-black">
      <div className="flex items-center justify-center"><Image src="/Pictures/gridpngs/pygamegrid.png" alt="eventimg" width={1080} height={1080} className="w-[360px] h-[120px] md:w-[930px] md:h-[310px]"/></div>
      <div className="flex flex-col border-t-4 border-black py-5 px-4"> 
        <div className="pl-5 md:pl-8 p-2 md:py-2 text-lg md:text-3xl md:font-bold font-anton md:font-hamlin">build.apk</div>
        <div className="pl-5 md:pl-8 p-2 text-sm md:text-2xl">By Ashwani Kumar Moudgil</div>
        <div className="pl-5 md:pl-8 p-2 py-2 md:py-3 text-sm md:text-2xl text-wrap">Participants will engage in an immersive Kotlin and Android app develoment workshop, learning to build powerful mobile apps from scratch.</div>
      </div>
    </div>
   );
}
 
export default Pasteventscard;