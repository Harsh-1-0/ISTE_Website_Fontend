"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth, provider, signInWithPopup } from "../../../components/firebase";
import Notification from "@/components/notification";

const SignIn = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    localStorage.clear();
  }, []);
  const handleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken1 = await result.user.getIdToken();
      console.log(idToken1);
      const response = await axios.post(
        "https://iste-website-api.vercel.app/admin/signup",
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken1}`,
          },
        }
      );
      if (response.status === 200) {
        setNotificationMessage("Signup successful");
        setShowNotification(true);
      }
    } catch (error) {
      if (error.status === 403) {
        setNotificationMessage("User already exists");
        setShowNotification(true);
        setColor("red");
      } else {
        setNotificationMessage("Error: " + error.data.message);
        setShowNotification(true);
        setColor("red");
      }
    }
  };

  const handleLogIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken1 = await result.user.getIdToken();

      const response = await axios.post(
        "https://iste-website-api.vercel.app/admin/login",
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken1}`,
          },
        }
      );
      if (response.status === 200) {
        localStorage.setItem("tokenISTE", response.data);
        setNotificationMessage("Login successful");
        setColor("green");
        setShowNotification(true);
        window.location.href = "/admin/1007/dashboard";
      }
    } catch (err) {
      if (err.status === 404) {
        setNotificationMessage("User Not Found");
        setShowNotification(true);
        setColor("red");
      } else {
        setNotificationMessage("Error: ");
        setShowNotification(true);
        setColor("red");
      }
      setNotificationMessage("Error during login");
      setShowNotification(true);
    }
  };

  return (
    <div>
      <div className="flex flex-col font-hamlin font-extrabold md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Box Container */}
        <div className="bg-white border-gray-800 border shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row md:max-w-4xl w-full">
          {/* Image Section */}
          <div className="md:w-1/2 w-full h-64  md:h-auto">
            <Image
              src="/Pictures/IMAGE.jpg"
              alt="Illustration"
              width={500} // Adjust the width as per your design
              height={300} // Adjust the height as per your design
              className="object-cover w-full h-full"
            />
          </div>

          {/* Button Section */}
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8 bg-gray-800  shadow-lg space-y-8">
            {/* Section Title */}
            <h2 className="text-2xl font-bold text-white mb-6">
              Welcome to the Dark Side!😉
            </h2>
            {/* <div className="w-full mt-12 md:mt-0 flex justify-center">
              <Image
                src="/Pictures/istelogo.svg" // Replace with an actual image path
                alt="Welcome illustration"
                width={100}
                height={100}
                className="object-cover rounded-full shadow-md"
              />
            </div> */}
            {/* Login Button */}
            <button
              className="flex items-center justify-center w-full border-[#D91656] border-2 text-[#D91656] hover:text-white py-3 rounded-lg shadow hover:bg-[#D91656] transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={handleLogIn}
            >
              <Image
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-lg font-medium">Log In with Google</span>
            </button>

            {/* Signup Button */}
            <button
              className="flex items-center justify-center w-full hover:bg-[#FF8C9E] text-[#FF8C9E] hover:text-white py-3 rounded-lg shadow border-[#FF8C9E] border-2 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={handleSignUp}
            >
              <Image
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-lg font-medium">Sign Up with Google</span>
            </button>
            {/* Decorative Section */}
          </div>
        </div>
      </div>
      {/* Notification Component */}
      <Notification
        message={notificationMessage}
        show={showNotification}
        color={color}
        className="mt-32"
        closeNotification={() => setShowNotification(false)}
      />
    </div>
  );
};

export default SignIn;
