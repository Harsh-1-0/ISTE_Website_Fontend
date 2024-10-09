"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Card from "@/components/card";
import CardSkeleton from "@/components/cardskeleton";
import Notification from "@/components/notification";
import { Upload } from "lucide-react";
import Image from "next/image";

export default function Page({ params }) {
  const { regno } = params;
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [tokenISTE, setToken] = useState("");
  const [update, setUpdate] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setToken(localStorage.getItem("tokenISTE"));
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://iste-website-api.vercel.app/advisory/${regno}`
        );
        console.log(result.data);
        setResponse(result.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
    function checkRole() {
      const roles = localStorage.getItem("role");
      if (roles == 1 || roles == 2) {
        setRole(true);
      }
    }
    checkRole();
  }, [regno]);

  const [Data, setFormData] = useState({
    name: "",
    surname: "",
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

  function handleUpdate() {
    setUpdate(true);
    // Pre-fill form with existing data
    setFormData({
      name: response.name || "",
      surname: response.surname || "",
      position: response.position || "",
      linkedin: response.linkedin || "",
      connectlink: response.connectlink || "",
      companyplaced: response.companyplaced || "",
    });
    setImagePreview(response.image);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (Data.name) formData.append("name", Data.name);
    if (Data.surname) formData.append("surname", Data.surname);
    if (Data.position) formData.append("position", Data.position);
    if (Data.linkedin) formData.append("linkedin", Data.linkedin);
    if (Data.connectlink) formData.append("connectlink", Data.connectlink);
    if (Data.companyplaced)
      formData.append("companyplaced", Data.companyplaced);
    if (image) formData.append("boardimage", image);

    try {
      const response = await axios.patch(
        `https://iste-website-api.vercel.app/advisory/${regno}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${tokenISTE}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setNotificationMessage("Board Member Updated Successfully");
        setShowNotification(true);
        setColor("green");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      console.log(err.response);
      const errorMessages = {
        409: "Board Member already exists",
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

  async function handleDelete() {
    if (
      window.confirm("Are you sure you want to delete this advisory member?")
    ) {
      try {
        const response = await axios.delete(
          `https://iste-website-api.vercel.app/advisory/${regno}`,
          {
            headers: {
              Authorization: `Bearer ${tokenISTE}`,
            },
          }
        );
        if (response.status == 204 || response.status == 200) {
          window.location.href = "./";
        }
      } catch (error) {
        console.log(error);
        setNotificationMessage("Error deleting advisory member");
        setShowNotification(true);
        setColor("red");
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-20 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-8">
          {loading ? (
            <CardSkeleton cards={1} />
          ) : (
            <Card
              regno={response.regno}
              name={response.name.toUpperCase()}
              surname={response.surname.toUpperCase()}
              domain={response.position}
              companyplaced={response.companyplaced}
              connectlink={response.connectlink}
              linkedin={response.linkedin}
              image={response.image}
            />
          )}
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleUpdate}
            className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Update Advisory Member
          </button>
          {role && (
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Delete Advisory Member
            </button>
          )}
        </div>

        {update && (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Update Advisory Member
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
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
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  value={Data.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter position"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Company Placed
                </label>
                <input
                  type="text"
                  name="companyplaced"
                  value={Data.companyplaced}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    LinkedIn
                  </label>
                  <input
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
                        ref={fileInputRef}
                        type="file"
                        name="boardimage"
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
                Update Advisory Member
              </button>
            </form>
          </div>
        )}

        <Notification
          message={notificationMessage}
          show={showNotification}
          setShow={setShowNotification}
          color={color}
        />
      </div>
    </div>
  );
}
