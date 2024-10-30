"use client";
const Videoback = ({ srcval }) => {
  return (
    <div className="w-full  h-[50%] md:h-screen overflow-x-hidden-hidden my-3 md:my-8">
      <video
        src="https://res.cloudinary.com/dleuqns7p/video/upload/v1729665630/jxkiuwj4bzmbyyb6330q.mp4"
        autoPlay
        loop
        muted
        playsinline
        controls={false}
        class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        style={{ pointerEvents: "none" }}
      ></video>
    </div>
  );
};

export default Videoback;
