"use client";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import CardSkeleton from "@/components/cardskeleton";
import axios from "axios";
import Nav from "@/components/Nav";
import InfiniteScroll from "react-infinite-scroll-component";
import dotenv from "dotenv";
import Image from "next/image";
dotenv.config();
const Core = () => {
  const [response, setResponse] = useState([]);
  const [filteredResponse, setFilteredResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // Number of cards to load per page

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://iste-website-api.vercel.app/core"
        );

        const sortedData = result.data.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );

        setResponse(sortedData);
        // Initially show only first page of items
        setFilteredResponse(sortedData.slice(0, itemsPerPage));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const fetchMoreData = () => {
    // Calculate next page of items
    const nextItems = response.slice(
      page * itemsPerPage,
      (page + 1) * itemsPerPage
    );

    if (nextItems.length === 0) {
      setHasMore(false);
      return;
    }

    // Add new items to existing filtered response
    setFilteredResponse((prev) => [...prev, ...nextItems]);
    setPage((prev) => prev + 1);
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setPage(1); // Reset pagination when searching

    if (searchQuery === "") {
      setFilteredResponse(response.slice(0, itemsPerPage));
      setHasMore(true);
    } else {
      const filteredData = response.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
      const filteredDataDomain = response.filter((item) =>
        item.domain.toLowerCase().includes(searchQuery)
      );
      const newDataSet = new Set([...filteredData, ...filteredDataDomain]);
      const newData = [...newDataSet];
      setFilteredResponse(newData);
      setHasMore(false); // Disable infinite scroll during search
    }
  };

  return (
    <div className="p-4">
      {!loading && <Nav handleSearch={handleSearch} active={"core"} />}
      {loading ? (
        <div className="flex flex-wrap gap-2 items-center max-lg:justify-center justify-evenly ">
          <CardSkeleton cards={12} />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={filteredResponse.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center p-4">
              <CardSkeleton cards={3} />
            </div>
          }
          endMessage={
            <p className="text-center flex justify-center items-center p-4 font-hamlin text-gray-500">
              {filteredResponse.length === 0
                ? "No results found"
                : "Thats Our Lovely Core  "}
              {filteredResponse && (
                <Image
                  src="https://i.ibb.co/XbytF3z/heartiste.png"
                  alt="ISTE Heart"
                  width={25}
                  height={25}
                />
              )}
            </p>
          }
        >
          <div className="flex flex-wrap gap-8  items-center max-lg:justify-center justify-evenly ">
            {filteredResponse.map((item) => (
              <Card
                key={item._id}
                name={item.name.toUpperCase()}
                surname={item.surname.toUpperCase()}
                domain={item.domain}
                connectlink={item.connectlink}
                linkedin={item.linkedin}
                image={item.image}
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Core;
