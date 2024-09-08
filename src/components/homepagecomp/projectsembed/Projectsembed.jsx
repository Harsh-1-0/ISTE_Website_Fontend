import Image from "next/image";
const Projectsembed = () => {
  return ( 
    <div className="bg-black bg-opacity-50">
      <div className="bg-[url('/Pictures/projectsembedbg.png')] hidden lg:h-[700px] bg-no-repeat py-[100px] md:flex justify-center items-center">
        <Image src="/Pictures/projectsupcomingposter.png" width={1000} height={1000} />
      </div>
  </div>
   );
}
 
export default Projectsembed;