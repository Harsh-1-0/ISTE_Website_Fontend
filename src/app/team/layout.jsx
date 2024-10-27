"use client";
import Teamheader from "@/components/teamtabcomp/teamheader/Teamheader";
import Image from "next/image";
function NavbarV({ children }) {
  return (
    <div className="mt-20 md:mt-24">
      <Teamheader/>
      <main>{children}</main>
    </div>
  );
}

export default NavbarV;
