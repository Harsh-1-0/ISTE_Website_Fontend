"use client";
import { useEffect, useState } from "react";
import axios from "axios";
const Core = () => {
  const [response, setresponse] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://iste-website-api.vercel.app/core"
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
    </div>
  );
};

export default Core;
