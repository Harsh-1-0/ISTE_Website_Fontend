"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Notification from "@/components/notification";
import dotenv from "dotenv";
dotenv.config();
export default function AddImages() {
  const [image, setImage] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [tokenISTE, setTokenISTE] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("tokenISTE");
    if (!token) {
      window.location.href = "/admin/1007";
      return;
    }
    setTokenISTE(token);

    // Cleanup function for image preview
  }, []);
  const handleFile = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    const remainingFiles = files;
    setImage(remainingFiles);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    image.forEach((file) => {
      formData.append("galleryimage", file);
    });
    console.log("hello");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/gallery`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${tokenISTE}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        setNotificationMessage("Photos Added Successfully");
        setColor("green");
        setShowNotification(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || "Failed to add Photos check Console";
      setNotificationMessage(errorMessage);
      setColor("red");
      setShowNotification(true);
    }
  };
  return (
    <div className="mt-20 md:mt-24 mb-12">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="text-5xl">
          Select 5 WebP images at a time for gallery{" "}
        </div>
        <input type="file" multiple onChange={handleFile} />
        <button
          className="text-3xl border-4 border-black"
          onClick={handleSubmit}
        >
          Add Photos
        </button>
      </div>
      <Notification
        message={notificationMessage}
        show={showNotification}
        setShow={setShowNotification}
        color={color}
      />
    </div>
  );
}
