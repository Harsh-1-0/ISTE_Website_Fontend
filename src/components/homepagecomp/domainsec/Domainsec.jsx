import React, { useEffect, useRef, useState } from "react";
import Domainsubsec from "./domainsubsec/Domainsubsec";

const Domainsec = () => {
  const [inView, setInView] = useState(false);
  const hrRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );

    if (hrRef.current) {
      observer.observe(hrRef.current);
    }

    return () => {
      if (hrRef.current) {
        observer.unobserve(hrRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center md:mx-4">
      <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 flex flex-col items-center w-full text-[#27A5EF]">
        DOMAINS
        <hr
          ref={hrRef}
          className={`h-1 bg-black mt-2 md:mt-4 transition-all duration-500 
            ${inView ? "w-[90%]" : "w-[60%]"}`}
        />
      </div>
      <div>
        <Domainsubsec />
      </div>
    </div>
  );
};

export default Domainsec;
