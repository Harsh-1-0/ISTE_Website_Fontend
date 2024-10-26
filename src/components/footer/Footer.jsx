import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white px-2 pl-2 md:px-6 md:pl-6 font-hamlin w-full">
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col text-md md:text-xl lg:text-2xl py-10">
          <div className="flex flex-col text-[#949494]">
            <p className="text-nowrap">VIT University</p>
            <p className="text-nowrap">Vellore, Tamil Nadu</p>
            <p className="text-nowrap">India - 632014</p>
          </div>
          <div className="py-10">
            <Link href="https://istevit.in" className="underline">
              iste@vit.ac.in
            </Link>
            <p>+91 70114 22095</p>
          </div>
        </div>
        <div className="flex pb-20 ">
          <div className="px-2">
            <Link href="https://www.instagram.com/iste_vit_vellore/?hl=en">
              <RiInstagramFill
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </Link>
          </div>
          <div className="px-2">
            <Link href="https://x.com/iste_vitvellore">
              <FaXTwitter
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </Link>
          </div>
          <div className="px-2">
            <Link href="https://www.linkedin.com/company/indian-society-for-technical-education/posts/?feedView=all">
              <FaLinkedin
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </Link>
          </div>
          <div className="px-2">
            <Link href="https://github.com/ISTE-VIT">
              <FaGithub
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </Link>
          </div>
          <div className="px-2">
            <Link href="https://www.youtube.com/c/istevitvellore">
              <FaYoutube
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-b-white   border-b-2 text-sm items-end md:text-xl lg:text-2xl">
        <div className="flex flex-col md:flex-row py-2">
          <div className="py-2 md:py-0">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="px-1 py-2 md:py-0 md:px-2">
            <Link href="/events">Events</Link>
          </div>
          <div className="px-1 py-2 md:py-0 md:px-2">
            <Link href="/webinars">Webinars</Link>
          </div>
          <div className="px-1 py-2 md:py-0 md:px-2">
            <Link href="/team">Team</Link>
          </div>
          <div className="px-1 py-2 md:py-0 md:px-2">
            <Link href="/devs">Developers💜</Link>
          </div>
        </div>
        <div className="text-sm py-2 md:text-xl lg:text-2xl">
          Made with ❤️ by ISTE
        </div>
      </div>
      <div className="flex items-center justify-center pt-20">
        <Image
          src="/Pictures/footeriste.png"
          alt="footerlogo"
          width={2000}
          height={500}
        />
      </div>
    </div>
  );
};

export default Footer;
