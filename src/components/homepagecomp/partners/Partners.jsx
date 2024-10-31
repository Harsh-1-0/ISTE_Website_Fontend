"use client";
import Partnerin from "./partnerin/Partnerin";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
const Partners = () => {
  const [inView, setInView] = useState(false);
  const hrRef = useRef(null);

  useEffect(() => {
    if (!hrRef.current) {
      console.warn("hrRef is not attached to the element.");
      return;
    }
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Entry observed:", entry);
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
  
    observer.observe(hrRef.current);
  
    return () => {

      if (hrRef.current) {
        observer.unobserve(hrRef.current);
      }
    };
  }, []);
  const partnersroll = [
    {
      title: "GitHub",
      imgpath: "/Pictures/partnersimg/githubsv.svg",
    },
    {
      title: "Adobe",
      imgpath: "/Pictures/partnersimg/adobesv.svg",
    },
    {
      title: "ValueCreed",
      imgpath: "/Pictures/partnersimg/valuecreedsv.svg",
    },
    {
      title: "ColorTokens",
      imgpath: "/Pictures/partnersimg/colortokenssv.svg",
    },
    {
      title: "Python",
      imgpath: "/Pictures/partnersimg/pythonsv.svg",
    },
    {
      title: "Wolfram",
      imgpath: "/Pictures/partnersimg/wolframsv.svg",
    },
    {
      title: "JetBrains",
      imgpath: "/Pictures/partnersimg/jetbrainssv.svg",
    },
    {
      title: "MahindraRise",
      imgpath: "/Pictures/partnersimg/mahindrarisesv.svg",
    },
    {
      title: "DigitalOcean",
      imgpath: "/Pictures/partnersimg/digitaloceansv.svg",
    },
    {
      title: "Echo3D",
      imgpath: "/Pictures/partnersimg/echothreedsv.svg",
    },
    {
      title: "PrepBytes",
      imgpath: "/Pictures/partnersimg/prepbytessv.svg",
    },
    {
      title: "Taskade",
      imgpath: "/Pictures/partnersimg/taskadesv.svg",
    },
    {
      title: "BIMTECH",
      imgpath: "/Pictures/partnersimg/bimtechsv.svg",
    },
    {
      title: "Appligent",
      imgpath: "/Pictures/partnersimg/appligentsv.svg",
    },
    {
      title: "Mindgate",
      imgpath: "/Pictures/partnersimg/mindgatesv.svg",
    },
    {
      title: "balsamiq",
      imgpath: "/Pictures/partnersimg/balsamiqsv.svg",
    },
    {
      title: "CNSI",
      imgpath: "/Pictures/partnersimg/cnsisv.svg",
    },
    {
      title: "DorkLab",
      imgpath: "/Pictures/partnersimg/dorklabsv.svg",
    },
    {
      title: "Unlearn",
      imgpath: "/Pictures/partnersimg/unlearnsv.svg",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center my-4 md:my-16">
      <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 flex flex-col items-center group w-full hover:text-[#27A5EF]">
        PARTNERS
        <hr 
        ref={hrRef}
        className={`h-1 bg-black mt-2 md:mt-4 transition-all duration-500 ${
          inView ? "w-[90%] " : "w-[60%]"
        }`}/>
      </div>
      <div className="hidden  md:grid md:grid-cols-4  md:gap-4 my-8">
        {partnersroll.map((link) => (
          <Partnerin srcval={link} key={link.title} />
        ))}
      </div>
      <div className="flex ml-28 md:ml-0 md:hidden my-10 md:my-0">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {partnersroll.map((link, index) => (
              <CarouselItem key={index}>
                <Partnerin srcval={link} key={link.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="font-hamlin text-lg md:text-xl">
        &#9679; you have reached the end &#9679;
      </div>
    </div>
  );
};

export default Partners;
