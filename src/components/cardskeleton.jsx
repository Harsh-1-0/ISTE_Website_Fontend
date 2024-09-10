import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton({ cards }) {
  return (
    <>
      {Array.from({ length: cards }).map((_, index) => (
        <div
          key={index}
          className="w-full max-w-md bg-gray-100 border-4 border-black flex flex-col md:flex-row  overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          {/* Image skeleton */}
          <div className="w-full md:w-2/5 lg:w-1/3 relative aspect-[4/3] md:aspect-square bg-no-repeat bg-center grayscale hover:grayscale-0 transition-all duration-500 ease-in-out">
            <Skeleton className="w-full h-full" />
          </div>

          {/* Text and icons skeleton */}
          <div className="flex flex-col justify-between p-4 md:p-6 w-full md:w-3/5 lg:w-2/3">
            {/* Name, Surname, Domain skeleton */}
            <div className="flex flex-col items-start mb-4">
              {/* Skeleton for name */}
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                <Skeleton width={150} />
              </h2>
              {/* Skeleton for surname */}
              <h3 className="text-xl md:text-2xl leading-tight">
                <Skeleton width={120} />
              </h3>
              {/* Skeleton for domain */}
              <p className="text-lg mt-2 text-gray-600">
                <Skeleton width={100} />
              </p>
            </div>

            {/* Icons skeleton */}
            <div className="flex justify-between text-2xl md:text-3xl">
              {/* Skeleton circles for icons */}
              <Skeleton circle width={24} height={24} />
              <Skeleton circle width={24} height={24} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
