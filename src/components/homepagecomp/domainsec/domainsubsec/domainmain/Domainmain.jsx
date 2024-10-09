import Image from "next/image";
const Domainmain = ({ item }) => {
  return (
    <div className="flex flex-col lg:items-none lg:justify-start border-black border-4 md:border-8 p-6 lg:p-8 mx-14 lg:mx-4 my-8 lg:my-0">
      <div className="text-4xl md:text-5xl lg:text-6xl py-2">
        {item.domainname}
      </div>
      <Image
        src={item.imgpath}
        alt="Domain Image"
        width={200}
        height={200}
        className="py-6 w-fit h-fit lg:w-fit lg:h-fit"
      />
      <p className="font-hamlin py-2 text-md md:text-xl lg:text-2xl">
        {item.description}
      </p>
    </div>
  );
};

export default Domainmain;
