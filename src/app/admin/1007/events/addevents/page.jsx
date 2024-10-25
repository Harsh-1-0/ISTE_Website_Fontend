"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Upload } from "lucide-react";
import Notification from "@/components/notification";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
const ALLOWED_FILE_TYPES = ["image/webp"];

function AddEvent() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [tokenISTE, setTokenISTE] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventImages, setEventImage] = useState([]);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    speaker: "",
    description: "",
    venue: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [image, setImage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("tokenISTE");
    if (!token) {
      window.location.href = "/admin/1007";
      return;
    }
    setTokenISTE(token);

    // Cleanup function for image preview
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [tokenISTE, imagePreview]);

  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Event name is required";

    if (!formData.description.trim())
      errors.description = "Description is required";
    if (!image) errors.image = "Event banner is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFile = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Separate the first file as the priority file
    const primaryFile = files[0];
    const remainingFiles = files.slice(1); // All files except the first one

    // File validation for primary file
    if (primaryFile.size > MAX_FILE_SIZE) {
      setNotificationMessage("File size must be less than 5MB");
      setColor("red");
      setShowNotification(true);
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(primaryFile.type)) {
      setNotificationMessage("Only WEBP images are allowed");
      setColor("red");
      setShowNotification(true);
      return;
    }

    // Cleanup previous preview
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImage(primaryFile);
    setImagePreview(URL.createObjectURL(primaryFile));

    // Handle the remaining files
    setEventImage(remainingFiles);

    if (formErrors.image) {
      setFormErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("eventimage", image);
    console.log(eventImages);
    eventImages.forEach((file) => {
      formDataToSend.append("eventGallery", file);
    });

    console.log(formDataToSend);
    try {
      const response = await axios.post(
        "https://iste-website-api.vercel.app/event",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${tokenISTE}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setNotificationMessage("Event Added Successfully");
        setColor("green");
        setShowNotification(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data?.message || "Failed Add Event";
      setNotificationMessage(errorMessage);
      setColor("red");
      setShowNotification(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mt-20 md:mt-24 mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Add New Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Event Name *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              formErrors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter name"
          />
          {formErrors.title && (
            <p className="text-red-500 text-xs mt-1">{formErrors.title}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description *
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              formErrors.description ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter description"
          />
          {formErrors.description && (
            <p className="text-red-500 text-xs mt-1">
              {formErrors.description}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Speaker
          </label>
          <input
            type="text"
            name="speaker"
            value={formData.speaker}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
              formErrors.speaker ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter speaker name"
          />
          {formErrors.speaker && (
            <p className="text-red-500 text-xs mt-1">{formErrors.speaker}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Venue
            </label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                formErrors.venue ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter venue"
            />
            {formErrors.venue && (
              <p className="text-red-500 text-xs mt-1">{formErrors.venue}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Event Banner *
          </label>
          <div
            onClick={() => !isSubmitting && fileInputRef.current.click()}
            className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors cursor-pointer ${
              formErrors.image
                ? "border-red-500"
                : "border-gray-300 hover:border-indigo-500"
            } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <div className="space-y-1 text-center">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  height={128}
                  width={128}
                  alt="Preview"
                  className="mx-auto h-32 w-32 object-cover"
                />
              ) : (
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
              )}
              <div className="flex text-sm text-gray-600 justify-center">
                <span className="relative font-medium text-indigo-600 hover:text-indigo-500">
                  Click to upload the banner
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  name="eventimage"
                  onChange={handleFile}
                  className="hidden"
                  accept="image/webp"
                  disabled={isSubmitting}
                />
              </div>
              <p className="text-xs text-gray-500">WEBP up to 5MB</p>
              <p className="text-xs text-gray-500">
                You can Select 6 Images {"("}1 Banner + 5 Images {")"}
              </p>
              <p className="text-xs text-red-500">
                Note: First Select The Event Banner then the Event Images
              </p>
            </div>
          </div>
          {formErrors.image && (
            <p className="text-red-500 text-xs mt-1">{formErrors.image}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
        >
          {isSubmitting ? "Adding..." : "Adding Event"}
        </button>
      </form>

      <Notification
        message={notificationMessage}
        show={showNotification}
        setShow={setShowNotification}
        color={color}
      />
    </div>
  );
}

export default AddEvent;
