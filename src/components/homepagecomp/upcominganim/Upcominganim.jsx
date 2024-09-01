import Image from "next/image";
const Upcominganim = () => {
  return ( 
    <div className="flex flex-col justify-center items-center my-4">
      <div className="flex overflow-hidden whitespace-nowrap"> 
        <div className="w-fit flex animate-infinite-scroll ease-linear">
          <span className="mr-8"><Image src="/Pictures/upcomingscrollb.svg" alt="img" height={300} width={1000}/></span>
          <span className="mr-8"><Image src="/Pictures/upcomingscrollw.svg" alt="img" height={300} width={1000}/></span>
          <span className="mr-8"><Image src="/Pictures/upcomingscrollb.svg" alt="img" height={300} width={1000}/></span>
          <span className="mr-8"><Image src="/Pictures/upcomingscrollw.svg" alt="img" height={300} width={1000}/></span>
        </div>
      </div>
    </div>
   );
}
 
export default Upcominganim;
