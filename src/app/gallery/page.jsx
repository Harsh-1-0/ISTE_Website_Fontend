'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Galleryheader from "@/components/gallerytabcomp/galleryheader/Galleryheader";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await axios.get("https://iste-website-api.vercel.app/gallery");
        setGallery(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getGallery();
  }, []);

  return (
    <div className="mt-20 md:mt-24 flex flex-col">
      <div><Galleryheader/></div>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-3"> 
        {gallery.map((item, index) => (
          <div key={index} className="mb-4 break-inside-avoid p-4 border-4 border-black">
            <Image
              src={item.image}
              alt={item.id}
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
