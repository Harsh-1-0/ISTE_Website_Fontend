"use client";
const Videoback = ({ srcval }) => {
  return (
    <div className="w-full  h-[50%] md:h-screen overflow-x-hidden-hidden my-3 md:my-8">
      <video
        src="https://res.cloudinary.com/dleuqns7p/video/upload/v1729665630/jxkiuwj4bzmbyyb6330q.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover   grayscale hover:grayscale-0 transition-all duration-500"
      ></video>
    </div>
  );
};

export default Videoback;
