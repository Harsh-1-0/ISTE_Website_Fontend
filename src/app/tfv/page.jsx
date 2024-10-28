import Tfvheader from "@/components/tfvtabcomp/tfvheader/Tfvheader";
import Tfvimagepart from "@/components/tfvtabcomp/tfvheader/tfvimagepart/Tfvimagepart";

const Tfv = () => {
  return (
    <div className="mt-20 md:mt-24 flex flex-col">
      <Tfvheader />
      <div>
        <Tfvimagepart />
      </div>
      <div className="font-hamlin text-sm  md:text-3xl mx-20 my-[130px]">
        <p className="text-justify">
          Teach for Vellore is an ISTE-VIT initiative aimed at spreading
          knowledge and awareness among young minds. It serves underprivileged
          children, particularly those aged 11-15, helping them chart their
          education and explore fields of interest. Since 2012, our engaging
          events conducted in various schools have provided a platform for
          intellectual growth. These events not only inspire but also contribute
          to nurturing well-rounded citizens who are essential to our nation
          {"'"}s progress.
        </p>
      </div>
    </div>
  );
};

export default Tfv;
