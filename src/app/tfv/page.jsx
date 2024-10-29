import Tfvimagepart from "@/components/tfvtabcomp/tfvimagepart/Tfvimagepart";
import Tfvheader from "@/components/tfvtabcomp/tfvheader/Tfvheader";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const Tfv = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-14 md:mt-24 flex flex-col">
        <Tfvheader />
        <div className="flex justify-center items-center">
          <Tfvimagepart />
        </div>
        <div className="font-hamlin text-sm  md:text-3xl mx-6 md:mx-20 my-[20px] mt-[70px] md:my-[60px] md:mt-[200px]">
          <p className="text-justify">
            Teach for Vellore is an ISTE-VIT initiative aimed at spreading
            knowledge and awareness among young minds. It serves underprivileged
            children, particularly those aged 11-15, helping them chart their
            education and explore fields of interest. Since 2012, our engaging
            events conducted in various schools have provided a platform for
            intellectual growth. These events not only inspire but also
            contribute to nurturing well-rounded citizens who are essential to
            our nation
            {"'"}s progress.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tfv;
