"use client";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import CardSkeleton from "@/components/cardskeleton";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";

const Core = () => {
  const [response, setResponse] = useState([]); // Initialize as empty array
  const [filteredResponse, setFilteredResponse] = useState([]); // For filtered data
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://iste-website-api.vercel.app/advisory"
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
      // If search input is empty, show all data
      setFilteredResponse(response);
    } else {
      // Filter response by name
      const filteredData = response.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
      setFilteredResponse(filteredData);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-3 gap-5  text-3xl max-md:text-xl max-lg:text-lg px-3">
        <div className="flex gap-5 max-md:gap-3 text-center">
          <div>
            <a href="/team/faculty">Coordinator</a>
          </div>
          <div>
            <a href="/team/advisory">Advisory</a>
          </div>
          <div>
            <a href="/team/board">Board</a>
          </div>
          <div>
            <a href="/team/core">Core</a>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            onChange={handleSearch} // Attach the handleSearch function
            placeholder="Search By Name"
            className=" placeholder:text-black text-[#27A5EF] focus:border-[#27A5EF]  border-black bg-white focus:outline-none pl-8"
          />
          <IoIosSearch className="absolute left-0 top-0 text-black text-2xl" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5  items-center max-lg:justify-center justify-between p-5">
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
              companyplaced={item.companyplaced}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Core;
