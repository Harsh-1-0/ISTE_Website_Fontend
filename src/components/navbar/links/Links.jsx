import Navlink from "./navlink/Navlink";

const Links = ({ isOpen , handleClick }) => {
  const linkroll = [
    { title: "HOME", path: "/" },
    { title: "PROJECTS", path: "/projects" },
    { title: "WEBINARS", path: "/webinars" },
    { title: "EVENTS", path: "/events" },
    { title: "TEAM", path: "/team" },
    { title: "GALLERY", path: "/gallery" },
  ];

  return ( 
    <div className={`${isOpen ? "flex absolute top-16 w-full  h-screen left-0 justify-start items-center gap-12 bg-black z-51 py-8 text-white": "hidden"} flex-col md:flex md:flex-row`}>
      {linkroll.map(link => (
        <Navlink item={link} handleClick={handleClick} key={link.title} />  
      ))}
    </div>
  );
}
 
export default Links;
