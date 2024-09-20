"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [response, setResponse] = useState({});
  const [role, setRole] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [adminName, setAdminName] = useState("");
  const [val1, setVal1] = useState(false);
  const [val2, setVal2] = useState(false);
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
        setResponse(response1.data);
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

  return (
    <div className="mt-20 md:mt-24">
      <div className="flex justify-between">
        <div>{response.name}</div>
        <div>{response.email}</div>
        <div>{adminName}</div>
        <div>
          <Image
            className="rounded-full"
            src={response.photoURL}
            width={25}
            height={25}
            alt="image"
          />
        </div>
      </div>
      <div>
        {val1 && val2 && <button>View Admins</button>}
        {val1 && <button>Delete Core</button>}
        {val1 && <button>Delete Board</button>}
        {val1 && <button>Delete Advisory</button>}
        <button
          onClick={() => {
            window.location.href = "/admin/1007/addcore";
          }}
        >
          Add Core
        </button>
        <button>Update Core</button>
        {/* purple */}
        <button>Add Board</button>
        <button>Update Board</button>
        {/* Blue */}
        <button>Add Advisory</button>
        <button>Update Advisory</button>
        {/* Red */}
        <button>Add Photos</button>
        <button>Delete Photos</button>
      </div>
    </div>
  );
};

export default Dashboard;
