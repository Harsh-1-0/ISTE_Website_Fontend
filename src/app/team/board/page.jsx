"use client";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import CardSkeleton from "@/components/cardskeleton";
import axios from "axios";
import Nav from "@/components/Nav";
import dotenv from "dotenv";
dotenv.config();
const Core = () => {
  const [response, setResponse] = useState([]); // Initialize as empty array
  const [filteredResponse, setFilteredResponse] = useState([]); // For filtered data
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/board`
        );
        console.log(result);
        setResponse(result.data); // Set only the data part of the response
        setFilteredResponse(result.data); // Initialize filtered data with the full response
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Ensure loading is set to false after data is fetched
      }
    };

    getData();
  }, []);

  // Handle filtering by name
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    if (searchQuery === "") {
      setFilteredResponse(response);
    } else {
      const filteredData = response.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
      setFilteredResponse(filteredData);
    }
  };

  return (
    <div>
      {!loading && <Nav handleSearch={handleSearch} active={"board"} />}
      <div className="flex flex-wrap gap-5  items-center max-lg:justify-center justify-evenly p-5">
        {loading ? (
          <CardSkeleton cards={15} />
        ) : (
          filteredResponse &&
          filteredResponse.map((item) => (
            <Card
              key={item._id}
              name={item.name.toUpperCase()}
              surname={item.surname.toUpperCase()}
              domain={item.position}
              connectlink={item.connectlink}
              linkedin={item.linkedin}
              image={item.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Core;
