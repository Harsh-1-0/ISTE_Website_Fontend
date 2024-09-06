import Image from "next/image";
const Upcominganim = () => {
  return ( 
    <div className="flex flex-col justify-center items-center my-4 h-fit  overflow-x-hidden">
      <div className="flex overflow-hidden whitespace-nowrap h-fit"> 
        <div className="w-[4000px] flex animate-infinite-scroll ease-linear">
          <span className="mr-8"><Image src="/Pictures/upcomingscrollb.svg" alt="img" height={1000} width={1000} layout="responsive" className="w-10 h-10 lg:w-[500px] lg:h-[100px]"/></span>
          <span className="mr-8"><Image src="/Pictures/upcomingscrollw.svg" alt="img" height={1000} width={1000} layout="responsive" className="w-10 h-10 lg:w-[500px] lg:h-[100px]"/></span>
          <span className="mr-8"><Image src="/Pictures/upcomingscrollb.svg" alt="img" height={1000} width={1000} layout="responsive" className="w-10 h-10 lg:w-[500px] lg:h-[100px]"/></span>
          <span className="mr-8"><Image src="/Pictures/upcomingscrollw.svg" alt="img" height={1000} width={1000} layout="responsive" className="w-10 h-10 lg:w-[500px] lg:h-[100px]"/></span>
        </div>
      </div>
    </div>
   );
}
 
export default Upcominganim;
