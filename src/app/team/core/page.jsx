"use client";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import Skeleton from "@mui/material/Skeleton";
import CardSkeleton from "@/components/cardskeleton";
import axios from "axios";

const Core = () => {
  const [response, setResponse] = useState(null); // Initialize to null
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://iste-website-api.vercel.app/core"
        );
        console.log(result);
        setResponse(result.data); // Set only the data part of the response
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Ensure loading is set to false after data is fetched
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-5 items-center justify-between ">
        {loading ? (
          // Show skeleton while loading
          <CardSkeleton cards={40} />
        ) : (
          // Map through response data if available
          response &&
          response.map((item) => (
            <Card
              key={item._id}
              name={item.name.toUpperCase()}
              surname={item.surname.toUpperCase()}
              domain={item.domain}
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
