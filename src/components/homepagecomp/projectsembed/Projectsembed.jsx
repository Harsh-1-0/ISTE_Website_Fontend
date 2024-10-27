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
      <div className="hidden lg:h-[700px] py-[100px] md:flex justify-center items-center z-13 absolute inset-0">
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
