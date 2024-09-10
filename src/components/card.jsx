import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

function Card(props) {
  return (
    <div className="w-full max-w-lg  bg-gray-100 border-4 border-black flex flex-col md:flex-row  overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div
        className="w-full md:w-2/5 lg:w-1/3 relative aspect-[4/3] md:aspect-square bg-no-repeat bg-center grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex flex-col justify-between p-4 md:p-6 w-full md:w-3/5 lg:w-2/3">
        <div className="flex flex-col items-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            {props.name}
          </h2>
          <h3 className="text-xl md:text-2xl leading-tight">{props.surname}</h3>
          <p className="text-lg mt-2 text-gray-600">{props.domain}</p>
        </div>
        <div className="flex justify-between text-2xl md:text-3xl">
          <a
            href={props.linkedin}
            className="hover:text-blue-600 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href={props.website}
            className="hover:text-green-600 transition-colors duration-300"
            aria-label="Personal Website"
          >
            <SlGlobe />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
