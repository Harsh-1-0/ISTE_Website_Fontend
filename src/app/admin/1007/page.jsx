"use client";
import React from "react";
import axios from "axios";
import { auth, provider, signInWithPopup } from "../../../components/firebase";

const SignIn = () => {
  const handleSignIn = async () => {
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
      console.log(response);
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <button className="mt-48" onClick={handleSignIn}>
        Signup with Google
      </button>
    </div>
  );
};

export default SignIn;
