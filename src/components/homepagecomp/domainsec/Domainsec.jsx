import Domainsubsec from "./domainsubsec/Domainsubsec";

const Domainsec = () => {
  return ( 
    <div className="flex flex-col items-center">
      <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 border-b-black border-b-4">DOMAINS</div>
      <div>
        <Domainsubsec/>
      </div>
    </div>
   );
}
 
export default Domainsec;