import Image from "next/image";
import Projectbg from "./projectbg/projectbg";
const Projectsembed = () => {
  return (
    <div className="bg-black grayscale hover:grayscale-0 transition-all duration-150 relative">
      <div className="z-12">
        {Array.from({ length : 3 }).map((_,index)=>(
          <Projectbg key={index}/>
        ))}
      </div>
      <div className="hidden lg:h-fit lg:w-fit md:flex justify-center items-center z-13 absolute inset-0 top-14 left-60 p-4 border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-300 hover:border-[#27A5EF] hover:shadow-[0_0_25px_rgba(39,165,239,0.5)]">
        <Image
          alt="project poster"
          src="/Pictures/projectsupcomingposter.png"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Projectsembed;
