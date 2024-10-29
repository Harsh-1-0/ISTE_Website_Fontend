import Image from "next/image";
const Eventsheader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-nowrap my-1">
        <p className="text-[46px] md:text-6xl lg:text-[208px] py-1 md:py-2">
          READ ALL ABOUT IT
        </p>
      </div>
      <div className="border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 py-2 flex justify-between items-center text-[24px] md:text-4xl lg:text-7xl my-1 md:my-3 text-nowrap">
        <div>
          EXPERIENCE THE{" "}
          <span className="hover:text-[#27A5EF] transition-all duration-150 ease-in-out">
            MAGIC OF ISTE
          </span>
        </div>
        <div>
          <Image
            src="/Pictures/herovector.svg"
            alt="prop"
            width={100}
            height={100}
            className="w-10 h-10 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:min-w-30 lg:min-w-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Eventsheader;
