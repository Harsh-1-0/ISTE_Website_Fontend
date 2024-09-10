import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
function NavbarV(props) {
  return (
    <div className="mt-20 md:mt-24">
      {/* <div className="flex  flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center text-nowrap my-3">
          <p className="text-5xl md:text-8xl lg:text-[130px] text- py-3">
            THE PEOPLE OF ISTE
          </p>
        </div>
        <div className="border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 py-2 flex justify-between items-center text-4xl md:text-6xl lg:text-8xl my-3 text-nowrap">
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
              className="w-14 h-14 md:w-28 md:h-28 lg:w-32 lg:h-32"
            />
          </div>
        </div>
      </div> */}
      <div className="flex justify-between my-3 gap-5 text-3xl max-md:text-xl max-lg:text-lg">
        <div className="flex gap-5 max-md:gap-3 text-center">
          <div>
            <a href="/team/faculty">Faculty Coordinator</a>
          </div>
          <div>
            <a href="/team/advisory">Advisory</a>
          </div>
          <div>
            <a href="/team/board">Board</a>
          </div>
          <div>
            <a href="/team/core">Core</a>
          </div>
        </div>
        <div className="relative  ">
          <input
            type="text"
            placeholder="Search"
            className="border-b-2 placeholder:text-black text-[#27A5EF] focus:border-[#27A5EF]  border-black bg-white focus:outline-none pl-8"
          />
          <IoIosSearch className="absolute left-0 top-0    text-black text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default NavbarV;
