"use client";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import CardSkeleton from "@/components/cardskeleton";
import axios from "axios";
import Nav from "@/components/Nav";

const Core = () => {
  const [response, setResponse] = useState([]);
  const [filteredResponse, setFilteredResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://iste-website-api.vercel.app/core"
        );
        console.log(result);

        const sortedData = result.data.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );

        setResponse(sortedData);
        setFilteredResponse(sortedData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

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
      {!loading && <Nav handleSearch={handleSearch} />}
      <div className="flex flex-wrap gap-5  items-center max-lg:justify-center justify-between p-5">
        {loading ? (
          <CardSkeleton cards={40} />
        ) : (
          filteredResponse &&
          filteredResponse.map((item) => (
            <Card
              key={item._id}
              name={item.name.toUpperCase()}
              surname={item.surname.toUpperCase()}
              domain={item.domain}
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
