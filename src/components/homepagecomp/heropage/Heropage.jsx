import Image from "next/image";

const Heropage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-nowrap mt-3 md:mt-0 md:my-3">
        <p className="text-[41px] md:text-6xl lg:text-[175px] leading-none py-1 md:py-3">
          INDIAN SOCIETY
        </p>
        <p className="text-[26px] md:text-5xl lg:text-7xl hover:text-[#27A5EF] transition-all duration-150 ease-in-out">
          FOR
        </p>
        <p className="text-[41px] md:text-6xl lg:text-[175px] leading-none py-1 md:py-3">
          TECHNICAL EDUCATION
        </p>
      </div>
      <div className="py-[4px] md:py-[6px] border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 flex justify-between items-center text-[22px] md:text-4xl lg:text-[58px] my-2 text-nowrap">
        <div>
          WELCOME TO{" "}
          <span className="hover:text-[#27A5EF] transition-all duration-150 ease-in-out">
            OUR INTERNET
          </span>
        </div>
        <div>
          <Image
            src="/Pictures/herovector.svg"
            alt="prop"
            width={100}
            height={100}
            className="w-[38px] h-[38px] md:w-24 md:h-24 lg:w-[72px] lg:h-[72px] lg:min-w-30 lg:min-w-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Heropage;
