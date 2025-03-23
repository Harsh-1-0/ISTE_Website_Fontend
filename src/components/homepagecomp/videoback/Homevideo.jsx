import dynamic from "next/dynamic";
const Videoback = dynamic(() => import("./Videoback.jsx"), { ssr: false });
const Homevideo = () => {
  const pathval =
    "https://iste-website-v2.s3.ap-south-1.amazonaws.com/crtthefourth.mp4";
  return (
    <div>
      <Videoback srcval={pathval} />
    </div>
  );
};

export default Homevideo;
