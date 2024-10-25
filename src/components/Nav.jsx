"use client";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";

function Nav({ handleSearch }) {
  const [isMwidth, setIsMwidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMwidth(window.innerWidth < 768); // 768px for mobile
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between my-3 p-4 max-sm:text-2xl   max-md:text-3xl max-md:justify-center gap-5 text-3xl  max-lg:text-lg px-3">
      <div className="flex gap-5 max-md:gap-3  text-center">
        <div className="hover:text-[#27A5EF] duration-500">
          <a href="/team/faculty"> Coordinator</a>
        </div>
        <div className="hover:text-[#27A5EF] duration-500">
          <a href="/team/advisory"> Advisory</a>
        </div>
        <div className="hover:text-[#27A5EF] duration-500">
          <a href="/team/board"> Board</a>
        </div>
        <div className="hover:text-[#27A5EF] duration-500">
          <a href="/team/core"> Core</a>
        </div>
      </div>

      {!isMwidth && (
        <div className="relative flex flex-row items-center">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search By Name"
            className="placeholder:text-black text-[#27A5EF] focus:border-[#27A5EF] border-black bg-white focus:outline-none pl-8"
          />
          <IoIosSearch size={30} className="absolute left-0 top-0 text-black text-2xl -mx-2" />
        </div>
      )}
    </div>
  );
}

export default Nav;
