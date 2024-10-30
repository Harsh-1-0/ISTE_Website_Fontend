"use client";
import Pasteventscard from "@/components/eventstabcomp/Pasteventscard";
import PastEventsSkele from "@/components/eventstabcomp/PastSkele";
import UpcomingEventSkele from "@/components/eventstabcomp/UpcomingEventSkele";
import Upcomingeventscard from "@/components/eventstabcomp/Upcomingeventscard";
import Eventsheader from "@/components/eventstabcomp/eventsheader/Eventsheader";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
const Events = () => {
  const [upcoming, setUpcoming] = useState(false);
  const [events, setEvents] = useState(false);
  const [gravitas, setGravitas] = useState(false);
  const [rivera, setRivera] = useState(false);
  const [horizon, setHorizon] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [executed, setExecuted] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setExecuted(true);
      } else {
        setIsMobile(false);
        setExecuted(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  useEffect(() => {
    // Fetch upcoming events data
    const getUpcoming = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/upcoming`
        );
        setUpcoming(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Fetch past events data
    const getEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/event`
        );
        setEvents(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getGravitas = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/gravitas`
        );
        setGravitas(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getRivera = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/rivera`
        );
        setRivera(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getHorizon = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/horizon`
        );
        setHorizon(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUpcoming();
    getEvents();
    getGravitas();
    getRivera();
    getHorizon();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-20 md:mt-24 flex flex-col relative">
        <Eventsheader />
        <div className="relative  w-full h-full my-2 max-md:my-20">
          <video
            src={
              executed &&
              (isMobile
                ? "https://res.cloudinary.com/dleuqns7p/video/upload/v1730270618/uqyvjxkxycehuv6x24ib.mp4"
                : "/Pictures/eventsvid/upcomingbg.mp4")
            }
            autoPlay
            loop
            muted
            className="w-full h-full object-cover z-10"
          ></video>
          {upcoming.length > 0 && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              {upcoming ? (
                <Upcomingeventscard
                  title={upcoming[0].title}
                  image={upcoming[0].image}
                  date={upcoming[0].date}
                  time={upcoming[0].time}
                  speaker={upcoming[0].speaker}
                  venue={upcoming[0].venue}
                  description={upcoming[0].description}
                />
              ) : (
                <UpcomingEventSkele cards={1} />
              )}
            </div>
          )}
        </div>

        <div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 flex flex-col items-center group w-full hover:text-[#27A5EF]">
            OUR EVENTS
            <hr className="h-1 w-[70%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
          </div>
          {events ? (
            <div className="flex flex-wrap p-8 justify-between z-30">
              {events.map((event, index) => (
                <Pasteventscard
                  key={index}
                  title={event.title}
                  image={event.image}
                  speaker={event.speaker}
                  venue={event.venue}
                  description={event.description}
                  galleryImages={event.eventImages}
                />
              ))}
            </div>
          ) : (
            <PastEventsSkele cards={3} />
          )}
        </div>
        <div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 flex flex-col items-center group w-full hover:text-[#27A5EF]">
            GRAVITAS
            <hr className="h-1 w-[60%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
          </div>
          {gravitas ? (
            <div className="flex flex-wrap p-8 justify-between z-30">
              {gravitas.map((event, index) => (
                <Pasteventscard
                  key={index}
                  title={event.title}
                  image={event.image}
                  speaker={event.speaker}
                  venue={event.venue}
                  description={event.description}
                  galleryImages={event.eventImages}
                />
              ))}
            </div>
          ) : (
            <PastEventsSkele cards={3} />
          )}
        </div>
        <div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 flex flex-col items-center group w-full hover:text-[#27A5EF]">
            RIVIERA
            <hr className="h-1 w-[50%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
          </div>
          {rivera ? (
            <div className="flex flex-wrap p-8 justify-between z-30">
              {rivera.map((event, index) => (
                <Pasteventscard
                  key={index}
                  title={event.title}
                  image={event.image}
                  speaker={event.speaker}
                  venue={event.venue}
                  description={event.description}
                  galleryImages={event.eventImages}
                />
              ))}
            </div>
          ) : (
            <PastEventsSkele cards={3} />
          )}
        </div>
        <div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold py-4 flex flex-col items-center group w-full hover:text-[#27A5EF]">
            HORIZON
            <hr className="h-1 w-[60%] md:w-[30%] bg-black mt-2 md:mt-4 transition-all duration-500 group-hover:w-[90%]" />
          </div>
          {horizon ? (
            <div className="flex flex-wrap p-8 justify-between z-30">
              {horizon.map((event, index) => (
                <Pasteventscard
                  key={index}
                  title={event.title}
                  image={event.image}
                  speaker={event.speaker}
                  venue={event.venue}
                  description={event.description}
                  galleryImages={event.eventImages}
                />
              ))}
            </div>
          ) : (
            <PastEventsSkele cards={3} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
