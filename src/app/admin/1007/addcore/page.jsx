"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Upload } from "lucide-react";
import Image from "next/image";

const AddCore = () => {
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
    domain: "",
    linkedin: "",
    connectlink: "",
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
    formData.append("coreimage", image);

    try {
      const response = await axios.post(
        "https://iste-website-api.vercel.app/core",
        formData,
        {
          headers: {
            Authorization: `Bearer ${tokenISTE}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setNotificationMessage("Core Member Added Successfully");
        setShowNotification(true);
        setColor("green");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      const errorMessages = {
        409: "Core Member already exists",
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
    <div className="min-h-screen mt-8    bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Add Core Member
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter registration number"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Domain
            </label>
            <select
              name="domain"
              required
              value={Data.domain}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="" disabled>
                Select a domain
              </option>
              {[
                "App Development",
                "Competitive Coding",
                "Design",
                "Electrical",
                "Internet of Things",
                "Machine Learning",
                "Management",
                "Motion Graphics",
                "Web Development",
              ].map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                LinkedIn
              </label>
              <input
                required
                type="url"
                name="linkedin"
                value={Data.linkedin}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter LinkedIn URL"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Connect Link
              </label>
              <input
                autoComplete="off"
                required
                type="url"
                name="connectlink"
                value={Data.connectlink}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter connect link"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <div
              onClick={triggerFileInput}
              className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-indigo-500 transition-colors cursor-pointer"
            >
              <div className="space-y-1 text-center">
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    height={128}
                    width={128}
                    alt="Preview"
                    className="mx-auto h-32 w-32 object-cover rounded-full"
                  />
                ) : (
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                )}
                <div className="flex text-sm text-gray-600 justify-center">
                  <span className="relative font-medium text-indigo-600 hover:text-indigo-500">
                    Click to upload a profile picture
                  </span>
                  <input
                    autoComplete="off"
                    ref={fileInputRef}
                    required
                    type="file"
                    name="coreimage"
                    onChange={handleFile}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Add Core Member
          </button>
        </form>
      </div>

      {showNotification && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white ${
            color === "green" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <p>{notificationMessage}</p>
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-2 right-2 text-white"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCore;
