import Domainmain from "./domainmain/Domainmain";
const Domainsubsec = () => {
  const domainroll = [
    {
      domainname: "MANAGEMENT",
      imgpath: "/Pictures/gifs/managementgif.mp4",
      description: "Develop astute managerial skills to publicize, promote and manage a world full of wonderful events! Enrapture the audience with your pitching skills and learn what it takes to make an event successful."
    },
    {
      domainname:"DESIGN",
      imgpath: "/Pictures/gifs/designgif.mp4",
      description: "Develop astute managerial skills to publicize, promote and manage a world full of wonderful events! Enrapture the audience with your pitching skills and learn what it takes to make an event successful."
    },
    {
      domainname:"TECHNICAL",
      imgpath: "/Pictures/gifs/technicalgif.mp4",
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