import Image from "next/image";
const Partnerin = ({srcval}) => {
  return ( 
    <div className="border-black border-4 py-20 md:p-10 flex items-center justify-center hover:bg-[#27A5EF] transition-all delay-150">
      <Image src={srcval.imgpath} width={200} height={200} className="w-[200px] h-[200px] md:w-[200px] md:h-[200px]" alt={srcval.title}/>
    </div>
   );
}
 
export default Partnerin;