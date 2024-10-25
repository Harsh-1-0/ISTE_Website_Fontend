"use client";
import Pasteventscard from "@/components/eventstabcomp/Pasteventscard";
import Upcomingeventscard from "@/components/eventstabcomp/Upcomingeventscard";
import Eventsheader from "@/components/eventstabcomp/eventsheader/Eventsheader";
import axios from "axios";
import PasteventscardSkeleton from "@/components/eventstabcomp/UpcomingEventSkele";
import { useEffect, useState } from "react";

const Events = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    //get the data of upcoming into a card for upcoming

    //map the data of events into a card for events
    const getEvents = async () => {
      try {
        const response = await axios.get(
          "https://iste-website-api.vercel.app/event"
        );
        setEvents(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getEvents();
  }, []);
  function handleClick(title) {
    window.location.href = `./event/${title}`;
  }
  return (
    <div className="mt-20 md:mt-24 flex flex-col">
      <h1 className="text-center font-anton font-bold text-8xl max-md:text-4xl underline">
        Our Event
      </h1>
      <div className="flex flex-wrap p-8  justify-between">
        {events.map((event, index) => (
          <Pasteventscard
            onClick={() => {
              handleClick(event.title);
            }}
            key={index}
            title={event.title}
            image={event.image}
            speaker={event.speaker}
            venue={event.venue}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
