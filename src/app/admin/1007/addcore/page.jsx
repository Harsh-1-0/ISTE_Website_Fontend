"use client";
import axios from "axios";
import { useEffect, useState } from "react";
function Addcore() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [color, setColor] = useState("");
  const [tokenISTE, setTokenISTE] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("tokenISTE");
    if (!token) {
      window.location.href = "/admin/1007";
    }
    setTokenISTE(localStorage.getItem("tokenISTE"));
  }, [tokenISTE]);
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
  const handleFile = (e) => {
    setFormData({ ...Data, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", FormData.name);
    formData.append("surname", FormData.surname);
    formData.append("regno", FormData.regno);
    formData.append("domain", FormData.domain);
    formData.append("linkedin", FormData.linkedin);
    formData.append("connectlink", FormData.connectlink);
    formData.append("image", FormData.image);
    console.log(formData);
    try {
      const response = await axios.post(
        "https://iste-website-api.vercel.app/admin/core",
        formData,
        {
          headers: {
            Authorization: `Bearer ${tokenISTE}`,
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
      if (err.status === 409) {
        setNotificationMessage("Core Member already exists");
        setShowNotification(true);
        setColor("red");
      }
      if (err.status === 403) {
        setNotificationMessage("All Fields are required in the form");
        setShowNotification(true);
        setColor("red");
      }
      if (err.status === 500) {
        setNotificationMessage(err.message);
        setShowNotification(true);
        setColor("red");
      }
      console.log(err);
    }
  };
  return (
    <div className="mt-20 md:mt-24">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={Data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            value={Data.surname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Registration Number</label>
          <input
            type="text"
            name="regno"
            value={Data.regno}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Domain</label>
          <select
            name="domain"
            onChange={handleChange}
            defaultValue="" // This ensures no option is selected by default
          >
            <option value="" disabled>
              Select a domain
            </option>
            <option value="App Development">App Development</option>
            <option value="Competative Coading">Competative Coading</option>
            <option value="Design">Design</option>
            <option value="Electrical">Electrical</option>
            <option value="Internet of Things">Internet of Things</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Motion Graphics">Motion Graphics</option>
            <option value="Web Development">Web Development</option>
          </select>
        </div>
        <div>
          <label>Linkedin</label>
          <input
            type="text"
            name="linkedin"
            value={Data.linkedin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Connect Link</label>
          <input
            type="text"
            name="connectlink"
            value={Data.connectlink}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image</label>
          <input type="file" name="coreimage" onChange={handleFile} />
        </div>
        <button type="submit">Add Core</button>
      </form>
    </div>
  );
}

export default Addcore;
