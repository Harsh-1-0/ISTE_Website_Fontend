import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

function Card(props) {
  return (
    <div className="w-full max-w-md bg-gray-100 border-4 border-black flex flex-col md:flex-row overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div
        className="w-full md:w-2/5 lg:w-1/2 relative aspect-[16/9] md:aspect-square bg-contain bg-no-repeat border-black max-md:border-b-4 max-md:border-0 border-r-4 bg-center grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col justify-between w-full md:w-3/5 lg:w-2/3">
        <div className="flex flex-col items-start py-2 px-5 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {props.name}
          </h2>
          <h3 className="text-3xl md:text-4xl leading-tight">
            {props.surname}
          </h3>
          <p className="text-lg mt-2 text-gray-600">{props.domain}</p>
        </div>
        <div className="grid grid-cols-2 w-full text-2xl md:text-4xl border-t-4 border-black">
          {/* LinkedIn Icon */}
          <div className="border-r-2 border-black p-5 grid place-items-center">
            <a
              href={props.linkedin}
              className="hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-5xl" />
            </a>
          </div>
          {/* Globe Icon */}
          <div className="border-l-2 border-black p-5 grid place-items-center">
            <a
              href={props.connectlink}
              className="hover:text-[#27A5EF] transition-colors duration-300"
              aria-label="Personal Website"
            >
              <SlGlobe className="text-5xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
