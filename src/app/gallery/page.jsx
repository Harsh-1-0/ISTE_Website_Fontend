"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Galleryheader from "@/components/gallerytabcomp/galleryheader/Galleryheader";
import Galleryskeleton from "@/components/gallerytabcomp/Galleryskeleton";
import Gallerycard from "@/components/gallerytabcomp/Gallerycard";
import { IoCloseOutline } from "react-icons/io5";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgsrc] = useState('');

  const getImg = (imgsrc) => {
    setTempImgsrc(imgsrc);
    setModel(true);
  }

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
  }

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await axios.get("https://iste-website-api.vercel.app/gallery");
        shuffleArray(response.data);
        setGallery(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getGallery();
  }, []);

  return (
    <div className="mt-20 md:mt-24 flex flex-col my-10">
      <div><Galleryheader /></div>
      {loading ? (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-3 mx-12">
          <Galleryskeleton imgs={12} />
        </div>
      ) : (
        <>
          <div className={`w-[100%] h-[100vh] fixed flex justify-center items-center bg-black top-0 left-0 z-50 transition duration-500 ease-in-out ${model ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"}`}>
            {tempimgSrc && (
              <Image src={tempimgSrc} width={1080} height={1080} alt="selectedimg" className="w-auto max-w-[100%] h-auto max-h-[100%] block box-border py-5 mx-auto"/>
            )}
            <IoCloseOutline className="absolute top-5 right-5 text-white text-4xl cursor-pointer" onClick={() => setModel(false)} />
          </div>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-3 mx-12">
            <Gallerycard gallery={gallery} getImg={getImg} />
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
