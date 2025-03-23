"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Heropage from "@/components/homepagecomp/heropage/Heropage";
import Videoback from "@/components/homepagecomp/videoback/Videoback";
import Upcominganim from "@/components/homepagecomp/upcominganim/Upcominganim";
import Horizonembed from "@/components/homepagecomp/horizonembed/Horizonembed";
import Aboutus from "@/components/homepagecomp/aboutus/Aboutus";
import Domainsec from "@/components/homepagecomp/domainsec/Domainsec";
import Projectsembed from "@/components/homepagecomp/projectsembed/Projectsembed";
import Eventshero from "@/components/homepagecomp/eventshero/Eventshero";
import Webinarmain from "@/components/homepagecomp/webinarmain/Webinarmain";
import Partners from "@/components/homepagecomp/partners/Partners";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [executed, setExecuted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      setExecuted(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-[100vh] relative">
          {executed && (
            <video
              src={
                isMobile
                  ? "https://iste-website-v2.s3.ap-south-1.amazonaws.com/verticalthesecond.mp4"
                  : "https://iste-website-v2.s3.ap-south-1.amazonaws.com/ideathesecondthefourth.mp4"
              }
              autoPlay
              muted
              playsInline
              preload="auto" // Ensures video loads instantly
              className="w-full h-full object-cover transition-all duration-500 overflow-y-hidden"
            />
          )}
          <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>
        </div>
      ) : (
        <div>
          <Navbar />
          <main className="mt-14 md:mt-24 overflow-x-hidden w-full">
            <div className="w-full">
              <Heropage />
            </div>
            <div className="w-full">
              <Videoback />
            </div>
            <div className="w-full">
              <Upcominganim />
            </div>
            <div className="w-full">
              <Horizonembed />
            </div>
            <div className="w-full">
              <Aboutus />
            </div>
            <div className="w-full">
              <Domainsec />
            </div>
            <div className="w-full">
              <Projectsembed />
            </div>
            <div className="w-full">
              <Eventshero />
            </div>
            <div className="w-full">
              <Webinarmain />
            </div>
            <div className="w-full">
              <Partners />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
