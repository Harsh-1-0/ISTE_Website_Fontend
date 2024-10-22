import Image from "next/image";
const Domainmain = ({ item }) => {
  return (
    <div className="flex flex-col lg:items-none lg:justify-start border-black border-[3px] md:border-[6px] p-6 lg:p-8 mx-6 lg:mx-4 my-8 lg:my-0">
      <div className="text-4xl md:text-5xl lg:text-6xl py-2">
        {item.domainname}
      </div>
      <div>
        <video autoPlay loop muted preload="none">
          <source src={item.imgpath} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="font-hamlin py-2 text-md md:text-xl lg:text-2xl">
        {item.description}
      </p>
    </div>
  );
};

export default Domainmain;
