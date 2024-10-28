"use client";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

function Card(props) {
  return (
    <div
      onClick={props.onClick}
      className="group w-full cursor-pointer max-w-sm bg-whites border-4 border-black flex flex-col md:flex-row overflow-hidden 
        transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image Container with Animation */}
      <div
        className="w-full md:w-2/5 lg:w-1/2 relative aspect-[16/9]  bg-contain bg-no-repeat 
          border-black max-md:border-b-4 max-md:border-0 border-r-4 bg-center overflow-hidden"
      >
        <div
          className="w-full h-full transform bg-left-top md:bg-center bg-cover  max-md:bg-no-repeat transition-all duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        />
        {/* Gradient Overlay */}
      </div>

      {/* Content Container */}
      <div className="flex flex-col   justify-between w-full md:w-3/5 lg:w-1/2 transform transition-all duration-500">
        {/* Text Content */}
        <div className="flex flex-col items-start py-2 px-5 mb-4">
          <h2
            className="text-3xl   leading-tight transform transition-all duration-500 
            translate-x-0 group-hover:translate-x-2"
          >
            {props.name}
          </h2>

          <h3
            className="text-2xl leading-tight transform transition-all duration-500 delay-75
            translate-x-0 group-hover:translate-x-2"
          >
            {props.surname}
          </h3>

          <p
            className="text-xl mt-2 font-hamlin font-light text-gray-600 transform transition-all duration-500 delay-100
            translate-x-0 group-hover:translate-x-2 opacity-90 group-hover:opacity-100"
          >
            {props.domain}
          </p>
        </div>

        {/* Social Links */}
        <div
          className="grid grid-cols-2 w-full text-2xl md:text-4xl border-t-4 border-black 
          transform transition-all duration-500"
        >
          {/* LinkedIn */}
          <div
            className="relative border-r-2 border-black p-5 grid place-items-center overflow-hidden
            group/linkedin"
          >
            <a
              href={props.linkedin}
              target="_blank"
              className="transform transition-all duration-400 hover:scale-110 group-hover:text-blue-600"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-5xl transform transition-all duration-400" />
              <span
                className="absolute inset-0 bg-blue-50 opacity-0 group-hover/linkedin:opacity-20 
                transition-opacity duration-300"
              />
            </a>
          </div>

          {/* Website */}
          <div
            className="relative border-l-2 border-black p-5 grid place-items-center overflow-hidden
            group/website"
          >
            <a
              href={props.connectlink}
              className="transform transition-all duration-400 hover:scale-110 group-hover:text-[#27A5EF]"
              target="_blank"
              aria-label="Connct Link"
            >
              <SlGlobe className="text-5xl transform transition-all duration-400" />
              <span
                className="absolute inset-0 bg-blue-50 opacity-0 group-hover/website:opacity-20 
                transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Add subtle animation on mouse move */}
      <style jsx global>{`
        @keyframes tiltAnimation {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          100% {
            transform: perspective(1000px) rotateY(3deg);
          }
        }

        .group:hover {
          animation: tiltAnimation 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default Card;
