const Aboutus = () => {
  return ( 
    <div className="flex flex-col justify-center items-center pb-4 lg:pb-14">
      <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 border-b-black border-b-4">ABOUT US</div>
      <div className="flex flex-col text-wrap text-xl md:text-2xl lg:text-3xl font-hamlin font-bold items-center  justify-center w-[80%]">
        <p className="py-6 md:py-10 text-center">Indian Society for Technical Education (ISTE) is a national, 
          non-profit making society registered under the Societies 
          Registration Act of 1860.
        </p>
        <p className="py-6 md:py-10 text-center">     Our aim is to equip engineers of today with the technical and 
          management skills to solve the challenges of tomorrow by learning and being a part of 
          departments such as technical , electrical, management and design.
        </p>
        <p className="py-6 md:py-10 text-center">We also organize a plethora of events and hands on workshops
           aimed at making better professionals, 
           bringing about holistic development of our community.
        </p>
      </div>
    </div>
   );
}
 
export default Aboutus;