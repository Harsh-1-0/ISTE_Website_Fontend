"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Tfvcard = () => {
  const galleryImages = [
    "/Pictures/tfv/img1.png",
    "/Pictures/tfv/img2.png",
    "/Pictures/tfv/img3.png",
    "/Pictures/tfv/img4.png",
    "/Pictures/tfv/img5.png",
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [imagePositions, setImagePositions] = useState([]);

  useEffect(() => {
    if (isHovered) {
      const positions = galleryImages.map(() => ({
        top: Math.random() * (window.innerHeight - 256),
        left: Math.random() * (window.innerWidth - 256),
      }));
      setImagePositions(positions);
    }
  }, [isHovered]);

  return (
    <>
      <div className="flex flex-col">
        <div className="text-center font-anton font-bold text-8xl max-md:text-4xl underline z-30 mt-10">
          <h1>TFV</h1>
        </div>
        <div
          className="flex justify-center my-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/Pictures/tfv/tfvdup.png"
            width={720}
            height={720}
            alt="TFV Main Image"
          />
        </div>
      </div>
      {isHovered &&
        galleryImages.slice(0, 3).map((galleryImage, index) => (
          <div
            key={index}
            className="fixed z-50 w-64 h-64"
            style={{
              top: `${imagePositions[index]?.top}px`,
              left: `${imagePositions[index]?.left}px`,
              animation: "fadeSlideUp 0.5s ease forwards",
              animationDelay: `${index * 100}ms`,
            }}
          >
            <Image
              src={galleryImage}
              alt={`Event Gallery Image ${index + 1}`}
              layout="fill"
              className="transition-all duration-500 hover:scale-105 hover:shadow-xl object-cover"
            />
          </div>
        ))}

      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Tfvcard;
