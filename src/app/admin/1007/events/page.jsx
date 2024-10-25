"use client";
import Pasteventscard from "@/components/eventstabcomp/Pasteventscard";
import Eventsheader from "@/components/eventstabcomp/eventsheader/Eventsheader";
import Notification from "@/components/notification";
import axios from "axios";
import PastEventsSkele from "@/components/eventstabcomp/PastSkele";
import { useEffect, useState } from "react";

const Events = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [tokenISTE, setToken] = useState("");
  const [events, setEvents] = useState(false);
  useEffect(() => {
    //get the data of upcoming into a card for upcoming
    const token = localStorage.getItem("tokenISTE");
    if (!token) {
      window.location.href = "/admin/1007";
    }
    setToken(token);
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
    console.log("Hello");
    window.location.href = `./events/${title}`;
  }

  const handleDelete = async (title) => {
    try {
      console.log(title);
      const response = await axios.delete(
        `https://iste-website-api.vercel.app/event/${title}`,
        {
          headers: {
            Authorization: `Bearer ${tokenISTE}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201 || response.status === 204) {
        setNotificationMessage("Event Deleted Successfully");
        setShowNotification(true);
        setColor("green");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      const errorMessages = {
        409: "Core Member already exists",
        403: "All Fields are required in the form",
        500: err.response?.data?.error?.message || "Server Error",
      };
      setNotificationMessage(
        errorMessages[err.response?.status] || "An error occurred"
      );
      setShowNotification(true);
      setColor("red");
    }
  };
  return (
    <div className="mt-20 md:mt-24 flex flex-col">
      <h1 className="text-center font-anton font-bold text-8xl max-md:text-4xl underline">
        Our Event
      </h1>

      {events ? (
        <div className="grid max-md:grid-cols-1 grid-cols-2 gap-8 p-8">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col items-center">
              <Pasteventscard
                title={event.title}
                image={event.image}
                speaker={event.speaker}
                venue={event.venue}
                description={event.description}
                galleryImages={event.eventImages}
              />

              <button
                onClick={() => handleDelete(event.title)}
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <PastEventsSkele cards={12} />
      )}
      <Notification
        message={notificationMessage}
        show={showNotification}
        setShow={setShowNotification}
        color={color}
      />
    </div>
  );
};

export default Events;
