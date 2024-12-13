"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Upload } from "lucide-react";
import Notification from "@/components/notification";
import dotenv from "dotenv";
dotenv.config();

const MAX_FILE_SIZE = 20 * 1024 * 1024;
const ALLOWED_FILE_TYPES = ["image/webp"];
const EVENT_TYPES = ["Horizon", "Event", "Gravitas", "Rivera"];

function AddEvent() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [tokenISTE, setTokenISTE] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [bannerImage, setBannerImage] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const bannerInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    speaker: "",
    description: "",
    venue: "",
    type: "", // Added type field
    date: "", // Added date field
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBannerUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const file = files[0];

    // File validation
    if (file.size > MAX_FILE_SIZE) {
      setNotificationMessage("Banner file size must be less than 5MB");
      setNotificationColor("red");
      // Optionally show notification
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setNotificationMessage("Only WEBP images are allowed for banner");
      setNotificationColor("red");
      // Optionally show notification
      return;
    }

    // Cleanup previous preview
    if (bannerPreview) {
      URL.revokeObjectURL(bannerPreview);
    }

    // Set banner image and preview
    setBannerImage(file);
    setBannerPreview(URL.createObjectURL(file));

    // Clear banner image error if it existed
    if (formErrors.bannerImage) {
      setFormErrors((prev) => ({ ...prev, bannerImage: "" }));
    }
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files || []);

    // Validate gallery images
    const validFiles = files.filter((file) => {
      // Size check
      if (file.size > MAX_FILE_SIZE) {
        setNotificationMessage("Gallery image size must be less than 5MB");
        setNotificationColor("red");
        return false;
      }

      // File type check
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setNotificationMessage("Only WEBP images are allowed for gallery");
        setNotificationColor("red");
        return false;
      }

      return true;
    });

    // Add valid files to gallery
    setGalleryImages((prev) => [...prev, ...validFiles]);

    // Clear gallery images error if it existed
    if (formErrors.galleryImages) {
      setFormErrors((prev) => ({ ...prev, galleryImages: "" }));
    }
  };

  const removeBannerImage = () => {
    if (bannerPreview) {
      URL.revokeObjectURL(bannerPreview);
    }
    setBannerImage(null);
    setBannerPreview(null);
  };

  const removeGalleryImage = (indexToRemove) => {
    setGalleryImages((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting");
    console.log("submit");

    setIsSubmitting(true);
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("eventimage", bannerImage);
    galleryImages.forEach((file) => {
      formDataToSend.append("eventGallery", file);
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/event`,
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
      const errorMessage =
        error.response?.data?.message || "Failed to Add Event";
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

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Event Type *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                formErrors.type ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Event Type</option>
              {EVENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {formErrors.type && (
              <p className="text-red-500 text-xs mt-1">{formErrors.type}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Event Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                formErrors.date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.date && (
              <p className="text-red-500 text-xs mt-1">{formErrors.date}</p>
            )}
          </div>
        </div>

        <div
          onClick={() => !isSubmitting && bannerInputRef.current?.click()}
          className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors cursor-pointer ${
            formErrors.bannerImage
              ? "border-red-500"
              : "border-gray-300 hover:border-indigo-500"
          } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <div className="space-y-1 text-center">
            {bannerPreview ? (
              <div className="relative">
                <Image
                  src={bannerPreview}
                  height={128}
                  width={128}
                  alt="Banner Preview"
                  className="mx-auto h-32 w-32 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeBannerImage();
                  }}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  X
                </button>
              </div>
            ) : (
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
            )}
            <div className="flex text-sm text-gray-600 justify-center">
              <span className="relative font-medium text-indigo-600 hover:text-indigo-500">
                Click to upload banner image
              </span>
              <input
                ref={bannerInputRef}
                type="file"
                name="bannerImage"
                onChange={handleBannerUpload}
                className="hidden"
                accept="image/webp"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => !isSubmitting && galleryInputRef.current?.click()}
          className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors cursor-pointer ${
            formErrors.galleryImages
              ? "border-red-500"
              : "border-gray-300 hover:border-indigo-500"
          } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <div className="space-y-1 text-center">
            {galleryImages.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-2">
                {galleryImages.map((file, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={URL.createObjectURL(file)}
                      height={64}
                      width={64}
                      alt={`Gallery Preview ${index + 1}`}
                      className="h-16 w-16 object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeGalleryImage(index);
                      }}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
            )}
            <div className="flex text-sm text-gray-600 justify-center">
              <span className="relative font-medium text-indigo-600 hover:text-indigo-500">
                Click to upload gallery images
              </span>
              <input
                ref={galleryInputRef}
                type="file"
                name="galleryImages"
                onChange={handleGalleryUpload}
                className="hidden"
                accept="image/webp"
                multiple
                disabled={isSubmitting}
              />
            </div>
          </div>
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
