import Gridlink from "./gridlink/Gridlink";

const Grid = () => {
  const gridpaths = [
    {
      title: "Technica",
      path:"/Pictures/gridpngs/technicagrid.png",
    },
    {
      title: "Pygame",
      path:"/Pictures/gridpngs/pygamegrid.png",
    },
    {
      title:"Nexus",
      path: "/Pictures/gridpngs/nexusgrid.png",
    }
  ]
  return ( 
    <div className="flex flex-col grayscale hover:grayscale-0 transition-all duration-150">
      {gridpaths.map((path=>(
        <Gridlink item={path} key={path.title}/>
      )))}
    </div>
   );
}
 
export default Grid;