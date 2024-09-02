"use client";
import { useEffect, useState } from "react";
import axios from "axios";
const Advisory = () => {
  const [response, setresponse] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://iste-website-api.vercel.app/advisory"
        );
        setresponse(result);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  console.log(response.data);
  return (
    <div>
      <h1>Hello</h1>
      {/* Render the API response */}
    </div>
  );
};

export default Advisory;
