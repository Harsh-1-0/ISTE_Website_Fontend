import Heropage from "@/components/homepagecomp/heropage/Heropage";
import Videoback from "@/components/homepagecomp/videoback/Videoback";
import Upcominganim from "@/components/homepagecomp/upcominganim/Upcominganim";
import Image from "next/image";
import Horizonembed from "@/components/homepagecomp/horizonembed/Horizonembed";
import Aboutus from "@/components/homepagecomp/aboutus/Aboutus";

export default function Home() {
  return (
    <main className="mt-20 md:mt-24">
      <Heropage/>
      <Videoback/>
      <Upcominganim/>
      <Horizonembed/>
      <Aboutus/>
    </main>
  );
}
