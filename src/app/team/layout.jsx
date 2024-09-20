"use client";
import Image from "next/image";
function NavbarV({ children }) {
  return (
    <div className="mt-20 md:mt-24">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center ">
          <p className="text-[60px] md:text-[100px] lg:text-[150px] font-extrabold tracking-wide leading-tight ">
            THE PEOPLE OF ISTE
          </p>
        </div>
        <div className="border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 py-2 flex justify-between items-center text-4xl md:text-5xl lg:text-7xl my-3 text-nowrap">
          <div>
            KEEPING IT FRESH{" "}
            <span className="hover:text-[#27A5EF] transition-all duration-500 ease-in-out">
              SINCE &apos;03
            </span>
          </div>
          <div>
            <Image
              src="/Pictures/herovector.svg"
              alt="prop"
              width={100}
              height={100}
              className="w-14 h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:min-w-30 lg:min-w-30"
            />
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default NavbarV;
