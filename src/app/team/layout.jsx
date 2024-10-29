"use client";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Teamheader from "@/components/teamtabcomp/teamheader/Teamheader";
import Image from "next/image";
function NavbarV({ children }) {
  return (
    <div className="mt-20 md:mt-24">
      <Navbar />
      <Teamheader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default NavbarV;
