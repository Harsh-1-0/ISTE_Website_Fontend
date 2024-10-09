"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Image from "next/image";
const Webinarmain = () => {
  const webinarcontent = [
    {
      title: "VITAA",
      path: "https://www.youtube.com/watch?v=fOnjz5p2CYM",
      imgpath: "/Pictures/webinarthumbnails/vitaa.png",
    },
    {
      title: "Exploring Flutter Framework",
      path: "https://www.youtube.com/watch?app=desktop&v=u1PIIWxUia4",
      imgpath: "/Pictures/webinarthumbnails/flutter.png",
    },
    {
      title: "OpenCV and Beyond",
      path: "https://www.youtube.com/watch?v=SenRcmWz6A8",
      imgpath: "/Pictures/webinarthumbnails/opencv.png",
    },
    {
      title: "SDG: Key to Sustainable future",
      path: "https://www.youtube.com/watch?v=xjG74e2fpMo",
      imgpath: "/Pictures/webinarthumbnails/sdg.png",
    },
    {
      title: "CASA",
      path: "https://www.youtube.com/watch?app=desktop&v=i21ByWUoXDQ",
      imgpath: "/Pictures/webinarthumbnails/casa.png",
    },
  ];
  return (
    <div className="relative w-full h-screen my-10 grayscale hover:grayscale-0 transition-all duration-150">
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white bg-[url('/Pictures/webinarbg.png')]">
        <div className="p-4">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            interval={3000}
            showArrows={false}
            swipeable={true}
            centerMode
          >
            {webinarcontent.map((item, key) => (
              <Link key={key} href={item.path}>
                <div className="mx-10">
                  <Image
                    alt={`Webinar about ${item.title}`} // More descriptive alt text
                    src={item.imgpath}
                    height={1080}
                    width={1080}
                  />
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-full h-full relative z-10">
        <video
          src="/Videos/webinarbgrun.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Webinarmain;
