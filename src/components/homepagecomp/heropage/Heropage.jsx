import Image from "next/image";

const Heropage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-nowrap my-3">
        <p className="text-[38px] md:text-6xl lg:text-[120px] py-1 md:py-3">
          INDIAN SOCIETY
        </p>
        <p className="text-[26px] md:text-5xl lg:text-7xl hover:text-[#27A5EF] transition-all duration-150 ease-in-out">
          FOR
        </p>
        <p className="text-[38px] md:text-6xl lg:text-[120px] py-1 md:py-3">
          TECHNICAL EDUCATION
        </p>
      </div>
      <div className="border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 py-2 flex justify-between items-center text-[28px] md:text-4xl lg:text-7xl my-3 text-nowrap">
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
            className="w-10 h-10 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:min-w-30 lg:min-w-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Heropage;
