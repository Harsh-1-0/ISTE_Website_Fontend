import Image from "next/image";
function Faculty() {
    return ( 
        <div className="flex flex-col md:flex md:flex-row justify-center items-center my-12">
            <div className="flex flex-col border-2 md:border-[8px] border-black mx-10">
                <div className="border-b-2 md:border-b-[8px] border-black p-8"><Image src="/Pictures/FacultyCoordinators/Amitsir.webp" width={400} height={400} className="w-[300px] h-[230px] md:w-[400px] md:h-[400px]"/></div>
                <div className="flex flex-col p-5">
                    <div className="text-lg md:text-2xl py-1 md:py-2">Dr. B Amit Mahendrakar</div>
                    <div className="text-lg md:text-2xl py-1 md:py-2">Ex- Director Of Student Welfare</div>
                </div>
            </div>
            <div className="flex flex-col border-2 md:border-[8px] border-black my-8 md:my-0 md:m-4 ">
                <div className="border-b-2 md:border-b-[8px] border-black p-8"><Image src="/Pictures/FacultyCoordinators/Sasisir.webp" width={400} height={400} className="w-[230px] h-[230px] md:w-[400px] md:h-[400px]"/></div>
                <div className="flex flex-col p-5">
                    <div className="text-lg md:text-2xl py-1 md:py-2">Dr. S Sasikumar</div>
                    <div className="text-lg md:text-2xl py-1 md:py-2">Professor, Department of Chemistry</div>
                </div>
            </div>
        </div>
     );
}

export default Faculty;