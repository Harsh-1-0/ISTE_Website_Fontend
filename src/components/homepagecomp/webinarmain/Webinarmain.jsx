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
  ];
  return (
    <div className="relative w-full my-10 grayscale hover:grayscale-0 transition-all duration-150 overflow-x-hidden">
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
                <CarouselItem key={index} className="md:pl-44">
                  <Link href={item.path}>
                    <div className="mx-10" key={item.title}>
                      <Image
                        src={item.imgpath}
                        height={1080}
                        alt="webinar"
                        width={1080}
                        className="w-fit h-fit mt-9 md:mt-36 md:w-[1080px] md:h-[600px]"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="md:w-full md:h-full relative z-10">
        <video
          src="https://res.cloudinary.com/dleuqns7p/video/upload/v1729665675/pfba3jkv0iboecqo7jjf.mp4 "
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
