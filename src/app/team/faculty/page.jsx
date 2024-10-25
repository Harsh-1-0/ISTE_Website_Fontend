import Nav from "@/components/Nav";
import Image from "next/image";
function Faculty() {
    return ( 
        <div className="flex flex-col">
            <div className="flex justify-between my-3 p-4 max-sm:text-2xl   max-md:text-3xl max-md:justify-center gap-5 text-3xl  max-lg:text-lg px-3">
                <div className="flex gap-5 max-md:gap-3  text-center">
                    <div className="hover:text-[#27A5EF] duration-500">
                    <a href="/team/faculty"> Coordinator</a>
                    </div>
                    <div className="hover:text-[#27A5EF] duration-500">
                    <a href="/team/advisory"> Advisory</a>
                    </div>
                    <div className="hover:text-[#27A5EF] duration-500">
                    <a href="/team/board"> Board</a>
                    </div>
                    <div className="hover:text-[#27A5EF] duration-500">
                    <a href="/team/core"> Core</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex md:flex-row justify-center items-center my-12">
                <div className="flex flex-col border-2 md:border-4 border-black mx-10">
                    <div className="border-b-2 md:border-b-4 border-black"><Image src="/Pictures/FacultyCoordinators/Amitsir.webp" width={400} height={400} className="w-[300px] h-[230px] md:w-[400px] md:h-[400px]"/></div>
                    <div className="flex flex-col p-5 font-hamlin">
                        <div className="text-lg md:text-3xl py-1 md:py-2 font-anton">Dr. B Amit <br /> Mahendrakar</div>
                        <div className="text-lg md:text-xl py-1 md:py-2">Ex- Director Of Student Welfare</div>
                    </div>
                </div>
                <div className="flex flex-col border-2 md:border-4 border-black my-8 md:my-0 md:m-4 ">
                    <div className="border-b-2 md:border-b-4 border-black"><Image src="/Pictures/FacultyCoordinators/Sasisir.webp" width={400} height={400} className="w-[230px] h-[230px] md:w-[400px] md:h-[400px]"/></div>
                    <div className="flex flex-col p-5 font-hamlin">
                        <div className="text-lg md:text-3xl py-1 md:py-2 font-anton">Dr. S Sasikumar</div>
                        <div className="text-lg md:text-xl py-1 md:py-7">Professor, Department of Chemistry</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Faculty;