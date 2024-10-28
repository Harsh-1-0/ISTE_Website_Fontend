import Image from "next/image";
const Tfvheader = () => {
  return ( 
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-nowrap my-1">
        <p className="text-[46px] md:text-6xl lg:text-[196px] md:py-2">
          TEACH FOR VELLORE
        </p>
      </div>
      <div className="py-[4px] md:py-[6px] border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 flex justify-between items-center text-[22px] md:text-4xl lg:text-[58px] text-nowrap">
        <div>
          OUR WAY OF {" "} 
          <span className="hover:text-[#27A5EF] transition-all duration-150 ease-in-out">
            GIVING BACK
          </span>
        </div>
        <div>
          <Image
            src="/Pictures/herovector.svg"
            alt="prop"
            width={100}
            height={100}
            className="w-[30px] h-[30px] md:w-24 md:h-24 lg:w-[72px] lg:h-[72px] lg:min-w-30 lg:min-w-30"
          />
        </div>
      </div>
    </div>
   );
}
 
export default Tfvheader;