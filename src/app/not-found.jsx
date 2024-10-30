"use client";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [audioReady, setAudioReady] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  let audio;

  // Preload audio on interaction
  const handleInteraction = () => {
    setHasInteracted(true);
    if (!audio) {
      audio = new Audio(
        "https://res.cloudinary.com/dleuqns7p/video/upload/v1729866841/q22ncmffx7jiiqs6crgt.mp3"
      );
      audio
        .play()
        .then(() => setAudioReady(true))
        .catch((error) => console.error("Audio playback failed:", error));
    }
  };

  useEffect(() => {
    // Add listeners for user interactions
    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("swipe", handleInteraction, { once: true });
    return () => {
      // Cleanup listeners
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("swipe", handleInteraction);

      // Cleanup audio
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className=" max-md:p-4 md:mt-12 flex flex-col justify-center items-center">
      <div className="flex flex-col mb-4 gap-5 align-middle items-center">
        <h1 className="font-anton text-7xl max-md:text-4xl">
          404: PAGE NOT FOUND
        </h1>
        <div className="text-4xl max-md:text-2xl  text-gray-600 font-hamlin text-center">
          We don{"'"}t know what you were searching for but it{"'"}s definitely
          not here{" "}
          {!hasInteracted ? (
            <div className="text-2xl  font-hamlin max-md:text-xl mt-2 text-blue-500">
              Although can here a tune if you are fast enough to interact with
              this page <br /> else try again by refreshing the page
            </div>
          ) : (
            <div>here is a tune for you </div>
          )}
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="w-1/4 h-1/4 max-md:w-10/12 max-md:mt-4 mt-16 object-cover"
        src="https://res.cloudinary.com/dleuqns7p/video/upload/v1729866478/z3lum3muozpd2fnmmpwr.mp4"
      />
    </div>
  );
}
