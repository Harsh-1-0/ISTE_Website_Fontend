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
    <main className="mt-20 md:mt-24">
      <Heropage/>
      <Videoback/>
      <Upcominganim/>
      <Horizonembed/>
      <Aboutus/>
      <Domainsec/>
      <Projectsembed/>
      <Eventshero/>
      <Webinarmain/>
      <Partners/>
    </main>
  );
}
