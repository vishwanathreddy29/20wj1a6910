import React, { useState } from "react";
import axios from "axios";

const RegisterForm = async () => {
  const [formData, setFormData] = useState({
    // Initialize your form fields here
    name: "",
    email: "",
    // Add more fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://20.244.56.144/train/register", formData);
      console.log("Response:", response.data);
      // Handle success or display a message to the user
    } catch (error) {
      console.error("Error:", error);
      // Handle error or display an error message to the user
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };





  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {/* Add more form fields as needed */}
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
