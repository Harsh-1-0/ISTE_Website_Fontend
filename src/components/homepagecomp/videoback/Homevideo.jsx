import dynamic from "next/dynamic";
const Videoback = dynamic(() => import('./Videoback.jsx'),{ssr:false,})
const Homevideo = () => {
  const pathval = "/Videos/crtthefourth.mp4";
  return ( 
    <div>
      <Videoback srcval={pathval}/>
    </div>
   );
}
 
export default Homevideo;