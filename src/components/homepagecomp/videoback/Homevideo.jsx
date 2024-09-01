import dynamic from "next/dynamic";
const Videoback = dynamic(() => import('../videoback/Videoback'),{ssr:false,})
const Homevideo = () => {
  let pathval = "/Videos/crtthefourth.mp4";
  return ( 
    <div>
      <Videoback srcval={pathval}/>
    </div>
   );
}
 
export default Homevideo;