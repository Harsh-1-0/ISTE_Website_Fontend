"use client";
import Pasteventscard from "@/components/eventstabcomp/Pasteventscard";
import Upcomingeventscard from "@/components/eventstabcomp/Upcomingeventscard";
import Eventsheader from "@/components/eventstabcomp/eventsheader/Eventsheader";
import axios from "axios";
import { useEffect, useState } from "react";

const Events = () => {
  // const [upcoming, setUpcoming] = useState([]);
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   //get the data of upcoming into a card for upcoming
  //   const getUpcoming = async () => {
  //     try {
  //       const response = axios.get(
  //         "https://iste-website-api.vercel.app/upcoming"
  //       );
  //       setUpcoming(response.data);
  //       console.log(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUpcoming();
  //   //map the data of events into a card for events
  //   const getEvents = async () => {
  //     try {
  //       const response = axios.get(
  //         "https://iste-website-api.vercel.app/events"
  //       );
  //       setEvents(response.data);
  //       console.log(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getEvents();
  // }, []);
  return <div className="mt-20 md:mt-24 flex flex-col">
    <Eventsheader/>
    <Upcomingeventscard/>
    <Pasteventscard/>
  </div>;
};

export default Events;
