import Domainmain from "./domainmain/Domainmain";
const Domainsubsec = () => {
  const domainroll = [
    {
      domainname: "MANAGEMENT",
      imgpath: "/Pictures/managementdomain.png",
      description: "Develop astute managerial skills to publicize, promote and manage a world full of wonderful events! Enrapture the audience with your pitching skills and learn what it takes to make an event successful."
    },
    {
      domainname:"DESIGN",
      imgpath: "/Pictures/designdomain.png",
      description: "Develop astute managerial skills to publicize, promote and manage a world full of wonderful events! Enrapture the audience with your pitching skills and learn what it takes to make an event successful."
    },
    {
      domainname:"TECHNICAL",
      imgpath: "/Pictures/technicaldomain.png",
      description: "Develop astute managerial skills to publicize, promote and manage a world full of wonderful events! Enrapture the audience with your pitching skills and learn what it takes to make an event successful."
    }
  ]
  return ( 
    <div className="flex flex-col lg:flex lg:flex-row md:my-20">
      {domainroll.map(link => (
        <Domainmain item={link} key={link.domainname} />  
      ))}
    </div>
   );
}
 
export default Domainsubsec;