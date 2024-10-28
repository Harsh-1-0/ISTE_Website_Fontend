"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Upload, Camera } from "lucide-react";
import Notification from "@/components/notification";
import Image from "next/image";
import dotenv from "dotenv";
dotenv.config();

const AddAdvisory = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [tokenISTE, setTokenISTE] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("tokenISTE");
    if (!token) {
      window.location.href = "/admin/1007";
    }
    setTokenISTE(token);
  }, []);

  const [Data, setFormData] = useState({
    name: "",
    surname: "",
    regno: "",
    position: "",
    linkedin: "",
    connectlink: "",
    companyplaced: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...Data, [e.target.name]: e.target.value });
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(Data).forEach((key) => {
      formData.append(key, Data[key]);
    });
    formData.append("advisoryimage", image);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/advisory`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${tokenISTE}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setNotificationMessage("Advisory Board Member Added Successfully");
        setShowNotification(true);
        setColor("green");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      const errorMessages = {
        409: "Advisory Board Member already exists",
        403: "All Fields are required in the form",
        500: err.response?.data?.error?.message || "Server Error",
      };
      setNotificationMessage(
        errorMessages[err.response?.status] || "An error occurred"
      );
      setShowNotification(true);
      setColor("red");
    }
  };

  return (
    <div className="min-h-screen mt-8    bg-gradient-to-br from-emerald-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Add Advisory Board Member
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                autoComplete="off"
                required
                type="text"
                name="name"
                value={Data.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Surname
              </label>
              <input
                autoComplete="off"
                type="text"
                name="surname"
                value={Data.surname}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter surname"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Registration Number
            </label>
            <input
              autoComplete="off"
              required
              type="text"
              name="regno"
              value={Data.regno}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter registration number"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Position
            </label>
            <input
              autoComplete="off"
              required
              type="text"
              name="position"
              value={Data.position}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter position"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Company Placed
            </label>
            <input
              autoComplete="off"
              required
              type="text"
              name="companyplaced"
              value={Data.companyplaced}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter company name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                LinkedIn
              </label>
              <input
                autoComplete="off"
                required
                type="text"
                name="linkedin"
                value={Data.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="LinkedIn profile URL"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Connect Link
              </label>
              <input
                autoComplete="off"
                required
                type="text"
                name="connectlink"
                value={Data.connectlink}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Additional connect link"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <div
              onClick={triggerFileInput}
              className="mt-1 relative group cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300 flex flex-col justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-teal-500"
            >
              <input
                ref={fileInputRef}
                autoComplete="off"
                type="file"
                name="advisoryimage"
                onChange={handleFile}
                className="hidden"
                accept="image/*"
                required
              />

              <div className="space-y-4 text-center">
                {imagePreview ? (
                  <div className="relative inline-block group">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      height={128}
                      width={128}
                      className="mx-auto h-32 w-32 object-cover  ring-2 ring-teal-500 ring-offset-2"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-teal-500 transition-colors" />
                    <div className="mt-4">
                      <div className="flex text-sm text-gray-600">
                        <span className="relative rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
                          Click to upload a profile picture
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {imagePreview && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-sm text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                    Click to change image
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
          >
            Add Advisory Board Member
          </button>
        </form>
      </div>

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

export default AddAdvisory;
