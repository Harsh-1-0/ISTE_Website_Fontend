"use client";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";

function Nav({ handleSearch, active }) {
  const [isMwidth, setIsMwidth] = useState(false);
  const [isActive, setIsActive] = useState([0, 0, 0, 0]);
  useEffect(() => {
    function checkActive(active) {
      if (active === "faculty") {
        setIsActive([1, 0, 0, 0]);
      } else if (active === "advisory") {
        setIsActive([0, 1, 0, 0]);
      } else if (active === "board") {
        setIsActive([0, 0, 1, 0]);
      } else if (active === "core") {
        setIsActive([0, 0, 0, 1]);
      }
    }
    checkActive(active);
  }, [active]);
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
    <div className="flex justify-between my-3 p-4 px-12  max-sm:text-2xl   max-md:text-xl max-md:justify-center gap-5 text-3xl  max-lg:text-lg ">
      <div className="flex gap-5 max-md:gap-3 font-hamlin text-center">
        <div className="hover:text-[#27A5EF] duration-500">
          <a href="/team/faculty" className={isActive[0] && "underline  "}>
            {" "}
            Coordinator
          </a>
        </div>
        <div className="hover:text-[#27A5EF]  duration-500">
          <a href="/team/advisory" className={isActive[1] && "underline  "}>
            {" "}
            Advisory
          </a>
        </div>
        <div className="hover:text-[#27A5EF] duration-500">
          <a href="/team/board" className={isActive[2] && "underline "}>
            {" "}
            Board
          </a>
        </div>
        <div className="hover:text-[#27A5EF] duration-500">
          <a href="/team/core" className={isActive[3] && "underline "}>
            {" "}
            Core
          </a>
        </div>
      </div>

      {!isMwidth && (
        <div className="relative flex flex-row items-center">
          <input
            type="text"
            onChange={handleSearch}
            placeholder={
              isActive[3] ? "Search By Name or Domain" : "Search By Name"
            }
            className={
              isActive[3]
                ? "placeholder:text-black font-hamlin placeholder:text-xl   text-[#27A5EF] focus:border-[#27A5EF] border-black bg-white focus:outline-none pl-8"
                : "placeholder:text-black font-hamlin  text-[#27A5EF] focus:border-[#27A5EF] border-black bg-white focus:outline-none pl-8"
            }
          />
          <IoIosSearch
            size={30}
            className="absolute left-0 top-0 text-black text-2xl -mx-2"
          />
        </div>
      )}
    </div>
  );
}

export default Nav;
