"use client";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import CardSkeleton from "@/components/cardskeleton";
import axios from "axios";

const Core = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://iste-website-api.vercel.app/core"
        );
        console.log(result.data);

        // Sort the data by name
        const sortedData = result.data.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );

        setResponse(sortedData); // Set the sorted data
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  function handleClick(regno) {
    console.log("clicked");
    window.location.href = `./core/${regno}`;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-5 mt-20 md:mt-24  items-center max-lg:justify-center justify-between p-5">
        {loading ? (
          <CardSkeleton cards={40} />
        ) : (
          response.map((item) => (
            <Card
              key={item._id}
              regno={item.regno}
              name={item.name.toUpperCase()}
              surname={item.surname.toUpperCase()}
              domain={item.domain}
              connectlink={item.connectlink}
              linkedin={item.linkedin}
              image={item.image}
              onClick={() => {
                handleClick(item.regno);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Core;