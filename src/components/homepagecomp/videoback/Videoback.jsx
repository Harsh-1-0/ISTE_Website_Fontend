'use client'
import { useState,useEffect } from "react";

const Videoback = ({srcval}) => {
  const [isClient,setisClient] = useState(false);

  useEffect(()=>{
    setisClient(true);
  },[])

  if(!isClient){
    return null;
  }
  return ( 
    <div>
      <video autoPlay loop muted className="w-full">
        <source src={srcval} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
   );
}
 
export default Videoback;


