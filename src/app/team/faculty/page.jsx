"use client";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Faculty() {
  return (
    <div className="flex flex-col">
      <div className="my-3 p-4 max-sm:text-lg px-16 max-md:px-4  max-md:text-3xl max-md:justify-center gap-5 text-3xl  max-lg:text-lg ">
        <div className="font-hamlin flex gap-5 max-md:gap-3  text-center">
          <div className="hover:underline underline hover:text-[#27A5EF] duration-500">
            <a href="/team/faculty"> Coordinator</a>
          </div>
          <div className="hover:underline hover:text-[#27A5EF] duration-500">
            <a href="/team/advisory"> Advisory</a>
          </div>
          <div className="hover:underline  hover:text-[#27A5EF] duration-500">
            <a href="/team/board"> Board</a>
          </div>
          <div className="hover:underline hover:text-[#27A5EF]  duration-500">
            <a href="/team/core"> Core</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center my-2 md:my-10 gap-10">
        <div
          className="group w-full cursor-pointer max-w-xl max-md:max-w-xs bg-whites border-4 border-black flex flex-col md:flex-row overflow-hidden 
                        transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image Container with Animation */}
          <div
            className="w-full md:w-1/2 lg:w-1/2 relative aspect-[16/9] bg-contain bg-no-repeat 
                            border-black max-md:border-b-4 max-md:border-0 border-r-4 bg-center overflow-hidden"
          >
            <div
              className="w-full h-full transform bg-left-top md:bg-center bg-cover max-md:bg-no-repeat transition-all duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
              style={{
                backgroundImage: `url(/Pictures/FacultyCoordinators/Amitsir.webp)`,
              }}
            />
          </div>

          {/* Content Container */}
          <div className="flex flex-col justify-between  md:w-1/2 transform transition-all duration-500">
            <div className="flex flex-col items-start py-6 px-2 mb-6">
              <h2 className="text-[40px] leading-tight transform transition-all duration-500 group-hover:translate-x-2">
                DR. AMIT B
              </h2>

              <h3 className="text-[40px] leading-tight transform transition-all duration-500 delay-75 group-hover:translate-x-2">
                MAHINDRAKAR
              </h3>

              <p className="text-xl mt-3 font-hamlin font-bold text-gray-600 transform transition-all duration-500 delay-100 group-hover:translate-x-2 opacity-90 group-hover:opacity-100">
                Ex-Director of Student Welfare
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 w-full text-3xl border-t-4 border-black transform transition-all duration-500">
              <div className="relative border-r-2 border-black p-6 grid place-items-center overflow-hidden group/linkedin">
                <a
                  href="https://www.linkedin.com/in/dr-amit-mahindrakar-a1110614/?originalSubdomain=in"
                  className="transform transition-all duration-400 hover:scale-110 group-hover:text-blue-600"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-5xl transform transition-all duration-400" />
                  <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover/linkedin:opacity-20 transition-opacity duration-300" />
                </a>
              </div>

              <div className="relative border-l-2 border-black p-6 grid place-items-center overflow-hidden group/website">
                <a
                  href="https://scholar.google.co.in/citations?user=NFk6QPYAAAAJ&hl=en"
                  className="transform transition-all duration-400 hover:scale-110 group-hover:text-[#27A5EF]"
                  aria-label="Personal Website"
                >
                  <FaGoogleScholar className="text-5xl transform transition-all duration-400" />
                  <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover/website:opacity-20 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group w-full cursor-pointer max-w-xl max-md:max-w-xs  bg-whites border-4 border-black flex flex-col md:flex-row overflow-hidden 
                        transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
        >
          <div
            className="w-full md:w-1/2 lg:w-1/2 relative aspect-[16/9] bg-contain bg-no-repeat 
                            border-black max-md:border-b-4 max-md:border-0 border-r-4 bg-center overflow-hidden"
          >
            <div
              className="w-full h-full transform bg-left-top md:bg-center bg-cover max-md:bg-no-repeat transition-all duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
              style={{
                backgroundImage: `url(/Pictures/FacultyCoordinators/Sasisir.webp)`,
              }}
            />
          </div>

          <div className="flex flex-col justify-between w-full md:w-1/2 transform transition-all duration-500">
            <div className="flex flex-col items-start py-6 px-2 mb-6">
              <h2 className="text-[40px] leading-tight transform transition-all duration-500 group-hover:translate-x-2">
                DR. S
              </h2>

              <h3 className="text-[40px] leading-tight transform transition-all duration-500 delay-75 group-hover:translate-x-2">
                SASIKUMAR
              </h3>

              <p className="text-xl mt-3 font-hamlin font-bold text-gray-600 transform transition-all duration-500 delay-100 group-hover:translate-x-2 opacity-90 group-hover:opacity-100">
                Director of <br /> Post-Graduate and Under-Graduate Admissions
              </p>
            </div>

            <div className="grid grid-cols-2 w-full text-3xl border-t-4 border-black transform transition-all duration-500">
              <div className="relative border-r-2 border-black p-6 grid place-items-center overflow-hidden group/linkedin">
                <a
                  href="https://www.linkedin.com/in/sasikumarswamiappan/?originalSubdomain=in"
                  className="transform transition-all duration-400 hover:scale-110 group-hover:text-blue-600"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-5xl transform transition-all duration-400" />
                  <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover/linkedin:opacity-20 transition-opacity duration-300" />
                </a>
              </div>

              <div className="relative border-l-2 border-black p-6 grid place-items-center overflow-hidden group/website">
                <a
                  href="https://scholar.google.co.in/citations?user=fG5hX5cAAAAJ&hl=en"
                  className="transform transition-all duration-400 hover:scale-110 group-hover:text-[#27A5EF]"
                  aria-label="Personal Website"
                >
                  <FaGoogleScholar className="text-5xl transform transition-all duration-400" />
                  <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover/website:opacity-20 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
