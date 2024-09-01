import Heropage from "@/components/homepagecomp/heropage/Heropage";
import Videoback from "@/components/homepagecomp/videoback/Videoback";
import Upcominganim from "@/components/homepagecomp/upcominganim/Upcominganim";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-20 md:mt-24">
      <Heropage/>
      <Videoback/>
      <Upcominganim/>
    </main>
  );
}
