import Image from "next/image";

const Gallerycard = ({ gallery, getImg }) => {
  return (
    <div>
      {gallery.map((item, index) => (
        <div
          key={index}
          className="mb-4 break-inside-avoid p-4 border-4 border-black grayscale hover:grayscale-0 transition-all duration-500"
          onClick={() => getImg(item.image)}
        >
          <Image
            src={item.image}
            alt={item.id || "gallery image"}
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallerycard;
