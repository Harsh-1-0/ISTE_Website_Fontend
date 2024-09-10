'use client'
const Videoback = ({srcval}) => {
  console.log(srcval);
  return ( 
    <div className="w-full h-[50%] md:h-screen overflow-x-hidden-hidden my-3 md:my-8">
      <video src="/Videos/crtthefourth.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
    </div>
   );
}
 
export default Videoback;


