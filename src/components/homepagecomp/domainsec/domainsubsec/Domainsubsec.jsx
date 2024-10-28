import Domainmain from "./domainmain/Domainmain";
const Domainsubsec = () => {
  const domainroll = [
    {
      domainname: "MANAGEMENT",
      imgpath: "/Pictures/gifs/managementgif.mp4",
      description: "Here we focus on coordinating and promoting chapter activities. You'll manage events, lead promotional campaigns, and develop skills in organization, communication, project management, and strategic promotion, expanding the chapter's reach and engagement.",
    },
    {
      domainname:"DESIGN",
      imgpath: "/Pictures/gifs/designgif.mp4",
      description: "Learn to create attractive visuals and engaging social media posts, learning UI/UX design. Whether new or experienced, this opportunity enhances your ability to create effective, attention-grabbing designs.",
    },
    {
      domainname:"TECHNICAL",
      imgpath: "/Pictures/gifs/technicalgif.mp4",
      description: "Gain expertise in web and app development, AI/ML, and competitive programming. You'll create websites, apps, and AI solutions, solving challenges and refining skills to thrive in the evolving digital landscape.",
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