"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
    {
      title: "Delve Into Github Fundamentals",
      path: "https://www.youtube.com/watch?v=qVSRpNegp3I",
      imgpath: "/Pictures/webinarthumbnails/GITHUB.png",
    },
    {
      title: "Sustainable & Corporate India",
      path: "https://www.youtube.com/watch?v=wyVmRqEkEq8&pp=ygUMaXN0ZSB2aXQgc2Rn",
      imgpath: "/Pictures/webinarthumbnails/SDG2.png",
    },
    {
      title: "TaskFlow With GCP",
      path: "https://www.youtube.com/live/-M-cwRXmAnw?feature=shared",
      imgpath: "/Pictures/webinarthumbnails/GCP.png",
    },
  ];
  return (
    <div
      id="webinar"
      className="relative w-full my-10 grayscale hover:grayscale-0 transition-all duration-150 overflow-x-hidden"
    >
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white bg-[url('/Pictures/webinarbg.png')] bg-fixed bg-center bg-repeat">
        <div className="absolute inset-0 justify-center">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {webinarcontent.map((item, index) => (
                <CarouselItem key={index} className="">
                  <Link
                    href={item.path}
                    target="_blank"
                    className="flex justify-center"
                  >
                    <div className="mx-10 ju" key={item.title}>
                      <Image
                        src={item.imgpath}
                        height={1080}
                        alt="webinar"
                        width={1080}
                        className="w-fit h-fit mt-9 md:mt-36 md:w-[1080px] md:h-[600px] border-4 md:border-[10px] border-black"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-1 md:left-5 top-1/2 transform -translate-y-1/2  text-black rounded-full p-3 shadow-lg  transition" />
            <CarouselNext className="absolute right-1 md:right-5 top-1/2 transform -translate-y-1/2 text-black rounded-full p-3 shadow-lg transition" />
          </Carousel>
        </div>
      </div>
      <div className="md:w-full md:h-full relative z-10">
        <video
          src="https://res.cloudinary.com/dleuqns7p/video/upload/v1729665675/pfba3jkv0iboecqo7jjf.mp4 "
          autoPlay
          loop
          muted
          playsinline
          style={{ pointerEvents: "none" }}
          className="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Webinarmain;
