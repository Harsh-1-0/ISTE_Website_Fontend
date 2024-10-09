"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/admincard";
import Notification from "@/components/notification";
import axios from "axios";
function Superadmin() {
  const [response, setResponse] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("tokenISTE");
    if (!token) {
      window.location.href = "/admin/1007";
    }

    const getData = async () => {
      try {
        const response1 = await axios.get(
          "https://iste-website-api.vercel.app/superAdmin",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setResponse(response1);
      } catch (err) {
        if (err.status === 401) {
          window.location.href = "/admin/1007";
        }
      }
    };
    getData();
  }, []);
  const updateAdmin = async (email, role) => {
    try {
      const token = localStorage.getItem("tokenISTE");
      const response = await axios.patch(
        `https://iste-website-api.vercel.app/superAdmin/${email}`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setShowNotification(true);
        setNotificationMessage("Role Updated Successfully");
        setColor("green");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setShowNotification(true);
        setNotificationMessage("Role Update Failed");
        setColor("red");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAdmin = async (email) => {
    try {
      const token = localStorage.getItem("tokenISTE");
      const response = await axios.delete(
        `https://iste-website-api.vercel.app/superAdmin/${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setShowNotification(true);
        setNotificationMessage("Admin Deleted Successfully");
        setColor("green");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setShowNotification(true);
        setNotificationMessage("Admin Deletion Failed");
        setColor("red");
      }
    } catch (Error) {
      console.log(Error);
    }
  };
  return (
    <div>
      <h1>Admins</h1>
      <Notification
        message={notificationMessage}
        show={showNotification}
        color={color}
        className="mt-32"
        closeNotification={() => setShowNotification(false)}
      />
      {Array.isArray(response.data) ? (
        response.data.map((data) => {
          return (
            <UserCard
              key={data._id}
              response={data}
              onUpdateRole={updateAdmin}
              onDeleteUser={deleteAdmin}
            />
          );
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Superadmin;
