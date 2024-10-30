import Domainsubsec from "./domainsubsec/Domainsubsec";

const Domainsec = () => {
  return ( 
    <div className="flex flex-col items-center md:mx-4">
        <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 flex flex-col items-center group w-full hover:text-[#27A5EF]">
          DOMAINS
          <hr className="h-1 w-[60%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
        </div>
      <div>
        <Domainsubsec/>
      </div>
    </div>
   );
}
 
export default Domainsec;