import dynamic from "next/dynamic";
const Videoback = dynamic(() => import("./Videoback.jsx"), { ssr: false });
const Homevideo = () => {
  const pathval =
    "https://res.cloudinary.com/drmk3hter/video/upload/v1733467725/Landing_chm42q.mp4";
  return (
    <div>
      <Videoback srcval={pathval} />
    </div>
  );
};

export default Homevideo;
