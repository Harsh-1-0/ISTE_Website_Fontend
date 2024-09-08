import Image from "next/image";
const Partnerin = ({srcval}) => {
  return ( 
    <div className="border-black border-4 p-10 flex items-center justify-center hover:bg-[#27A5EF] transition-all delay-150">
      <Image src={srcval.imgpath} width={200} height={200} alt={srcval.title}/>
    </div>
   );
}
 
export default Partnerin;