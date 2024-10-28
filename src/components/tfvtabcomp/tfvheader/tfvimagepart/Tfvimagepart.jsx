import Image from "next/image";
const Tfvimagepart = () => {
  return ( 
    <div className="-my-11 mx-20 md:mx-36">
      <div className="flex">
        <Image src="/Pictures/tfv/polaroids5.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-right hover:duration-400 hover:grayscale-0 transition-all duration-500 h-[120px] w-[120px] md:h-[350px] md:w-[350px]"/>
        <Image src="/Pictures/tfv/polaroids6.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-left hover:duration-400  hover:grayscale-0 transition-all duration-500"/>
        <Image src="/Pictures/tfv/polaroids7.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-right hover:duration-400 hover:grayscale-0 transition-all duration-500"/>
        <Image src="/Pictures/tfv/polaroids8.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-left hover:duration-400 hover:grayscale-0 transition-all duration-500"/>
        <Image src="/Pictures/tfv/polaroids9.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-right hover:duration-400 hover:grayscale-0 transition-all duration-500"/>
      </div>
      <div className="flex flex-wrap md:flex md:flex-nowrap mx-36 -my-24">
        <Image src="/Pictures/tfv/polaroids2.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-left hover:duration-400 hover:grayscale-0 transition-all duration-500"/>
        <Image src="/Pictures/tfv/polaroids1.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-right hover:duration-400 hover:grayscale-0 transition-all duration-500"/>
        <Image src="/Pictures/tfv/polaroids4.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-left hover:duration-400 hover:grayscale-0 transition-all duration-500"/>
        <Image src="/Pictures/tfv/polaroids3.png" width={300} height={300} alt="tfvimg" className="-mx-6 grayscale hover:animate-rotate-right hover:duration-400 hover:grayscale-0 transition-all duration-500"/>
      </div>
    </div>
   );
}
 
export default Tfvimagepart;