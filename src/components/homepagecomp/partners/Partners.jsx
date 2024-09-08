import Partnerin from "./partnerin/Partnerin";
const Partners = () => {
  const partnersroll = [
    {
      title : "GitHub",
      imgpath: "/Pictures/partnersimg/githubsv.svg"
    },{
      title : "Adobe",
      imgpath: "/Pictures/partnersimg/adobesv.svg"
    },{
      title : "ValueCreed",
      imgpath: "/Pictures/partnersimg/valuecreedsv.svg"
    },{
      title : "ColorTokens",
      imgpath: "/Pictures/partnersimg/colortokenssv.svg"
    },{
      title : "Python",
      imgpath: "/Pictures/partnersimg/pythonsv.svg"
    },{
      title : "Wolfram",
      imgpath: "/Pictures/partnersimg/wolframsv.svg"
    },{
      title : "JetBrains",
      imgpath: "/Pictures/partnersimg/jetbrainssv.svg"
    },{
      title : "MahindraRise",
      imgpath: "/Pictures/partnersimg/mahindrarisesv.svg"
    },{
      title : "DigitalOcean",
      imgpath: "/Pictures/partnersimg/digitaloceansv.svg"
    },{
      title : "Echo3D",
      imgpath: "/Pictures/partnersimg/echothreedsv.svg"
    },{
      title : "PrepBytes",
      imgpath: "/Pictures/partnersimg/prepbytessv.svg"
    },{
      title : "Taskade",
      imgpath: "/Pictures/partnersimg/taskadesv.svg"
    },{
      title : "BIMTECH",
      imgpath: "/Pictures/partnersimg/bimtechsv.svg"
    },{
      title : "Appligent",
      imgpath: "/Pictures/partnersimg/appligentsv.svg"
    },{
      title : "Mindgate",
      imgpath: "/Pictures/partnersimg/mindgatesv.svg"
    },{
      title : "balsamiq",
      imgpath: "/Pictures/partnersimg/balsamiqsv.svg"
    },{
      title : "CNSI",
      imgpath: "/Pictures/partnersimg/cnsisv.svg"
    },{
      title : "DorkLab",
      imgpath: "/Pictures/partnersimg/dorklabsv.svg"
    },{
      title : "Unlearn",
      imgpath: "/Pictures/partnersimg/unlearnsv.svg"
    }
  ]
  return ( 
    <div className="flex flex-col justify-center items-center my-16">
      <div className="text-6xl md:text-8xl lg:text-9xl py-4 border-black border-b-4">PARTNERS</div>
      <div className="grid grid-cols-4 gap-4 my-8 ">
        {partnersroll.map((link)=>(
          <Partnerin srcval={link} key={link.title}/>
        ))}
      </div>
      <div className="font-hamlin text-xl">&#9679; you have reached the end &#9679;</div>
    </div>
   );
}
 
export default Partners;