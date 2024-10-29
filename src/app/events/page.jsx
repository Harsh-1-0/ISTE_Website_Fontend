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
        <div className="relative  w-full h-full my-2">
          <video
            src="/Pictures/eventsvid/upcomingbg.mp4"
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
          <h1 className="text-center font-anton font-bold text-8xl max-md:text-4xl underline z-30 mt-10">
            Our Events
          </h1>
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
          <h1 className="text-center font-anton font-bold text-8xl max-md:text-4xl underline z-30 mt-10">
            Gravitas
          </h1>
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
          <h1 className="text-center font-anton font-bold text-8xl max-md:text-4xl underline z-30 mt-10">
            Rivera
          </h1>
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
          <h1 className="text-center font-anton font-bold text-8xl max-md:text-4xl underline z-30 mt-10">
            Horizon
          </h1>
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
