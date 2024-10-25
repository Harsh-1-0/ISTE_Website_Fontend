"use client";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [audioReady, setAudioReady] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [audio] = useState(
    () =>
      new Audio(
        "https://res.cloudinary.com/dleuqns7p/video/upload/v1729866841/q22ncmffx7jiiqs6crgt.mp3"
      )
  );

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
    };

    // Add listeners for common user interactions
    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      // Cleanup listeners
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);

      // Cleanup audio
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // Handle audio playback after user interaction
  useEffect(() => {
    if (hasInteracted && !audioReady) {
      audio
        .play()
        .then(() => setAudioReady(true))
        .catch((error) => console.error("Audio playback failed:", error));
    }
  }, [hasInteracted, audioReady, audio]);

  return (
    <div className="mt-24 md:mt-28 flex flex-col justify-center items-center">
      <div className="flex flex-col mb-4 gap-5 align-middle items-center">
        <h1 className="font-anton text-7xl max-md:text-6xl">
          404: PAGE NOT FOUND
        </h1>
        <div className="text-4xl text-gray-600 font-anton text-center">
          The thing which you are searching for is not here but...
          {!hasInteracted ? (
            <div className="text-2xl mt-2 text-blue-500">
              (Interact with the page to hear a tune)
            </div>
          ) : (
            <div>here is a tune for you</div>
          )}
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="w-1/4 h-1/4 mt-16 object-cover"
        src="https://res.cloudinary.com/dleuqns7p/video/upload/v1729866478/z3lum3muozpd2fnmmpwr.mp4"
      />
    </div>
  );
}
