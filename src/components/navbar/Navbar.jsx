'use client'
import Image from "next/image";
import Links from "./links/Links";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled,setIsScrolled] = useState(false);

  const handleClick = ()=>{
    setIsOpen(false);
  }
  useEffect(()=>{
    const handleScroll = ()=>{
      const offset = window.scrollY;
      if(offset>0){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
  },[]);
  
  return ( 
    <div className={`flex items-center justify-between text-4xl md:text-2xl lg:text-3xl w-full fixed top-0 border-b-black border-b-4 p-4 z-50
    ${isScrolled || isOpen ? "bg-black" : "bg-white"}
    ${isScrolled || isOpen ? "text-white" : "text-black"}`}>
      <div className="flex items-center">
        <a href="/"><Image src='/Pictures/istelogo.svg' alt="logo" width={45} height={45} className="sm:mx-4 w-12"/></a>
        <a href="/"><div className={`${isOpen || isScrolled ? "text-white" : "text-black"} mx-2`}>ISTE</div></a>
      </div>
      <div className="flex items-center">
        <Links isOpen={isOpen} handleClick={handleClick}/>
        <div className="md:hidden flex items-center ml-4">
          {!isOpen && 
            <button onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu size={30} />
            </button>}
          {isOpen && 
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose size={35} className="text-white"/>
            </button>}
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;
