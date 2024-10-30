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
        setExecuted(true);
      } else {
        setIsMobile(false);
        setExecuted(true);
      }
    };
    handleResize();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  });
  return (
    <>
      {loading ? (
        <div className="w-full  h-[100vh] overflow-hidden ">
          {executed && (
            <video
              src={
                isMobile
                  ? "https://res.cloudinary.com/dleuqns7p/video/upload/v1730209244/jcjx8fsnz4esmlowphqp.mp4"
                  : "https://res.cloudinary.com/dleuqns7p/video/upload/v1730269636/c5vsu6mg3ncy8sef68r1.mp4"
              }
              autoPlay
              muted
              className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          )}
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
