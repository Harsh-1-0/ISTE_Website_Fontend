"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import NextImage from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const DevsData = [
  {
    name: "HARSH KUMAR SINHA",
    role: "Developer",
    img: "https://res.cloudinary.com/dleuqns7p/image/upload/v1729964323/omvamc3841hskzen6j78.png",
    linkdin: "https://www.linkedin.com/in/harsh-kumar-sinha-604929216/",
  },
  {
    name: "GAGAN N BANGARAGIRI",
    role: "Designer",
    img: "https://res.cloudinary.com/dleuqns7p/image/upload/v1729964320/amawix57zm06dsgn9lpp.png",
    linkdin: "https://www.linkedin.com/in/gagan-n-bangaragiri/",
  },
  {
    name: "SHANKAR BS",
    role: "Developer",
    img: "https://res.cloudinary.com/dleuqns7p/image/upload/v1729964320/amawix57zm06dsgn9lpp.png",
    linkdin: "https://www.linkedin.com/in/shankar-bs/",
  },
  {
    name: "ARADHYE SWARUP",
    role: "Designer",
    img: "https://res.cloudinary.com/dleuqns7p/image/upload/v1729964320/hvrssvhkrs2pufz72nxf.png",
    linkdin: "https://www.linkedin.com/in/aradhyeswarup/",
  },
];

function ImageSection({ src, name, role, linkdin }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const rotate = useTransform(scrollYProgress, [0.2, 0.7], [12.5, -12.5]);

  return (
    <div className="relative group min-h-screen flex items-center justify-center">
      <motion.div
        ref={ref}
        className="w-80 h-80 relative transition-all duration-500 ease-linear"
        style={{
          rotate,
          boxShadow: "0px 20px 20px 0px rgba(0,0,0,0.2)",
        }}
      >
        <a href={linkdin} className="" target="_blank">
          <NextImage
            fill
            src={src}
            alt="Devs Images"
            className="w-full border-x-8 border-black grayscale group-hover:grayscale-0 h-full object-cover"
          />
        </a>
      </motion.div>

      <motion.h2
        style={{ y }}
        className="left-10 max-md:text-2xl max-md:3xl max-md:text-[#27A5EF] font-anton  group-hover:text-6xl group-hover:text-[#27A5EF] transition-all ease-linear absolute text-5xl font-bold text-black mix-blend-difference"
      >
        {name}
      </motion.h2>
      <motion.h2
        style={{ y }}
        className="right-10 max-md:mt-48 max-md:text-2xl  max-md:text-[#27A5EF]   max-md:hover:2xl font-hamlin  group-hover:text-6xl group-hover:text-[#27A5EF] transition-all ease-linear absolute text-5xl  text-black mix-blend-difference"
      >
        {role}
      </motion.h2>
    </div>
  );
}

const ParallaxGallery = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mounted, setMounted] = useState(false);

  // Randomize the Devs array once the component is mounted
  const randomizedDevs = useMemo(() => {
    return [...DevsData].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const text = "WE MADE IT".split(" ");
  const textHov = "BRICK BY BRICK".split(" ");
  return (
    <div>
      <Navbar />
      <div className="mt-24 md:mt-28">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-nowrap my-1">
            <p className="text-[46px] md:text-6xl lg:text-[196px] py-1 md:py-2">
              MEET THE BUILDERS{" "}
            </p>
          </div>
          <div className="border-t-4 md:border-t-8 border-b-4 md:border-b-8 border-black w-11/12 py-2 flex justify-between items-center text-[24px] md:text-4xl lg:text-7xl my-1 md:my-3 text-nowrap">
            <div>
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
              <span className="hover:text-[#27A5EF] transition-all duration-500 ease-in-out">
                {textHov.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: (text.length + i) / 10,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </span>
            </div>
            <div>
              <NextImage
                src="/Pictures/herovector.svg"
                alt="prop"
                width={100}
                height={100}
                className="w-10 h-10 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:min-w-30 lg:min-w-30"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          {randomizedDevs.map((dev, index) => (
            <ImageSection
              key={index}
              src={dev.img}
              role={dev.role}
              name={dev.name}
              linkdin={dev.linkdin}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ParallaxGallery;
