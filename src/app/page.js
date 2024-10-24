import Heropage from "@/components/homepagecomp/heropage/Heropage";
import Videoback from "@/components/homepagecomp/videoback/Videoback";
import Upcominganim from "@/components/homepagecomp/upcominganim/Upcominganim";
import Horizonembed from "@/components/homepagecomp/horizonembed/Horizonembed";
import Aboutus from "@/components/homepagecomp/aboutus/Aboutus";
import Domainsec from "@/components/homepagecomp/domainsec/Domainsec";
import Projectsembed from "@/components/homepagecomp/projectsembed/Projectsembed";
import Eventshero from "@/components/homepagecomp/eventshero/Eventshero";
import Webinarmain from "@/components/homepagecomp/webinarmain/Webinarmain";
import Partners from "@/components/homepagecomp/partners/Partners";

export default function Home() {
  return (
    <main className="mt-20 md:mt-24 overflow-x-hidden w-full">
      <div className="w-full">
        <Heropage />
      </div>
      <div className="w-full">
        <Videoback />
      </div>
      <div className="w-full">
        <Upcominganim />
      </div>
      <div className="w-full">
        <Horizonembed />
      </div>
      <div className="w-full">
        <Aboutus />
      </div>
      <div className="w-full">
        <Domainsec />
      </div>
      <div className="w-full">
        <Projectsembed />
      </div>
      <div className="w-full">
        <Eventshero />
      </div>
      <div className="w-full">
        <Webinarmain />
      </div>
      <div className="w-full">
        <Partners />
      </div>
    </main>
  );
}
