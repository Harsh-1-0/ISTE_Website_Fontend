"use client";
import Pasteventscard from "@/components/eventstabcomp/Pasteventscard";
import Upcomingeventscard from "@/components/eventstabcomp/Upcomingeventscard";
import Eventsheader from "@/components/eventstabcomp/eventsheader/Eventsheader";
import axios from "axios";
import UpcomingSkele from "@/components/eventstabcomp/UpcomingEventSkele";
import PastEventsSkele from "@/components/eventstabcomp/PastSkele";
import { useEffect, useState } from "react";

const Events = () => {
  const [upcoming, setUpcoming] = useState(false);
  const [events, setEvents] = useState(false);
  useEffect(() => {
    //get the data of upcoming into a card for upcoming
    const getUpcoming = async () => {
      try {
        const response = await axios.get(
          "https://iste-website-api.vercel.app/upcoming"
        );
        setUpcoming(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUpcoming();
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
  return (
    <div className="mt-20 md:mt-24 flex flex-col">
      <Eventsheader />

      <h1 className="text-center font-anton font-bold text-8xl max-md:text-4xl underline">
        Upcoming Event
      </h1>

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
        <UpcomingSkele cards={1} />
      )}

      <h1 className="text-center font-anton font-bold text-8xl max-md:text-4xl underline">
        Our Event
      </h1>

      {events ? (
        <div className="flex flex-wrap p-8  justify-between">
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
        <PastEventsSkele cards={12} />
      )}
    </div>
  );
};

export default Events;
