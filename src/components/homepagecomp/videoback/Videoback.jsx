"use client";
import { useEffect, useRef, useState } from "react";

const Videoback = ({ srcval }) => {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => setInView(entry.isIntersecting));
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="group w-full h-[50%] md:h-screen overflow-x-hidden my-3 md:my-8 relative">
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dleuqns7p/video/upload/v1729665630/jxkiuwj4bzmbyyb6330q.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className={`w-full h-full object-cover transition-all duration-500 ${
          inView ? "grayscale-0" : "grayscale"
        } md:grayscale group-hover:md:grayscale-0`}
        style={{ pointerEvents: "none" }}
      ></video>
      <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>
    </div>
  );
};

export default Videoback;
