"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading";

const Dashboard = () => {
  const [response, setResponse] = useState({});
  const [role, setRole] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [adminName, setAdminName] = useState("");
  const [val1, setVal1] = useState(false);
  const [val2, setVal2] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    const token = localStorage.getItem("tokenISTE");
    if (!token) {
      window.location.href = "/admin/1007";
    }
    const getData = async () => {
      try {
        const response1 = await axios.get(
          "https://iste-website-api.vercel.app/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRole(response1.data.role);
        localStorage.setItem("role", response1.data.role);
        setResponse(response1.data);
        setIsLoading(false); // Stop loading after data is fetched
      } catch (err) {
        if (err.status === 401) {
          setNotificationMessage("Not Whitelisted");
          setShowNotification(true);
          setColor("red");
          setTimeout(() => {
            window.location.href = "/admin/1007";
          }, 2000);
        }
        console.log(err);
      }
    };
    getData();

    const getRole = () => {
      if (role == 1) {
        setVal1(true);
        setVal2(true);
        setAdminName("Super Admin");
      } else if (role == 2) {
        setVal1(true);
        setVal2(false);
        setAdminName("Admin");
      } else if (role == 3) {
        setAdminName("Core Admin");
      }
    };
    getRole();
  }, [role]);

  if (isLoading) {
    // Display loading spinner while data is loading
    return <Loading />;
  }

  return (
    <div className="mt-20 md:mt-24 px-6">
      {/* Admin Info Section */}
      <div className="flex justify-between items-center space-x-4 mb-8 p-4 border-b-2 border-gray-200">
        <div className="text-xl font-bold">{response.name}</div>
        <div className="text-xl">{response.email}</div>
        <div className="text-xl font-semibold">{adminName}</div>
        <div>
          <Image
            className="rounded-full"
            src={response.photoURL}
            width={40}
            height={40}
            alt="profile picture"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          {val1 && val2 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Admin Section</h2>
              <button
                className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-colors mb-2"
                onClick={() =>
                  (window.location.href = "/admin/1007/superadmin")
                }
              >
                View Admins
              </button>
            </div>
          )}
        </div>

        {/* Core Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Core Section</h2>
          <button
            className="w-full border border-[#E4B1F0] text-[#E4B1F0] py-2 px-4 rounded-lg hover:bg-[#E4B1F0] hover:text-white transition-colors mb-2"
            onClick={() => (window.location.href = "/admin/1007/addcore")}
          >
            Add Core
          </button>
          <button
            className="w-full border border-[#E4B1F0] text-[#E4B1F0] py-2 px-4 rounded-lg hover:bg-[#E4B1F0] hover:text-white transition-colors"
            onClick={() => (window.location.href = "/admin/1007/core")}
          >
            Update Core
          </button>
        </div>

        {/* Board Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Board Section</h2>
          <button
            className="w-full border border-[#7E60BF] text-[#7E60BF] py-2 px-4 rounded-lg hover:bg-[#7E60BF] hover:text-white transition-colors mb-2"
            onClick={() => (window.location.href = "/admin/1007/addboard")}
          >
            Add Board
          </button>
          <button
            className="w-full border border-[#7E60BF] text-[#7E60BF] py-2 px-4 rounded-lg hover:bg-[#7E60BF] hover:text-white transition-colors"
            onClick={() => (window.location.href = "/admin/1007/board")}
          >
            Update Board
          </button>
        </div>

        {/* Advisory Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Advisory Section</h2>
          <button
            className="w-full border border-[#433878] text-[#433878] py-2 px-4 rounded-lg hover:bg-[#433878] hover:text-white transition-colors mb-2"
            onClick={() => (window.location.href = "/admin/1007/addadvisory")}
          >
            Add Advisory
          </button>
          <button
            className="w-full border border-[#433878] text-[#433878] py-2 px-4 rounded-lg hover:bg-[#433878] hover:text-white transition-colors"
            onClick={() => (window.location.href = "/admin/1007/advisory")}
          >
            Update Advisory
          </button>
        </div>

        {/* Gallery Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Gallery Section</h2>
          <button
            className="w-full border border-[#8967B3] text-[#8967B3] py-2 px-4 rounded-lg hover:bg-[#8967B3] hover:text-white transition-colors mb-2"
            onClick={() => (window.location.href = "/admin/1007/addphotos")}
          >
            Add Photos
          </button>
          <button className="w-full border border-[#8967B3] text-[#8967B3] py-2 px-4 rounded-lg hover:bg-[#8967B3] hover:text-white transition-colors">
            Delete Photos
          </button>
        </div>
        <div className="bg-gray-100 p-6  rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Events Section</h2>
          <button
            className="w-full border border-[#3B1E54] text-[#3B1E54] py-2 px-4 rounded-lg hover:bg-[#3B1E54] hover:text-white transition-colors mb-2"
            onClick={() =>
              (window.location.href = "/admin/1007/events/upcoming")
            }
          >
            Update Upcoming Event{" "}
          </button>
          <button
            onClick={() =>
              (window.location.href = "/admin/1007/events/addevents")
            }
            className="w-full border border-[#3B1E54] text-[#3B1E54] py-2 px-4 rounded-lg hover:bg-[#3B1E54] hover:text-white transition-colors mb-2"
          >
            Add Events{" "}
          </button>
          <button className="w-full border border-[#3B1E54] text-[#3B1E54] py-2 px-4 rounded-lg hover:bg-[#3B1E54] hover:text-white transition-colors">
            Update Events{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
