"use client";

import { useState } from "react";
import axios from "axios";
import InputFilel from "../utils/InputFilel";
import InputImageFiled from "../utils/InputImageFiled";
import { handleImageUpload } from "../utils/handleImageUpload";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role:"",
    profilePic: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const result = await handleImageUpload(file);
      setFormData({ ...formData, profilePic: String(result.data.url) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        ...formData,
      });

      if (response.status === 201) {
        alert("User created successfully!");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <div className="w-full mx-auto relative bg-[#28284E] text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Create User</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <InputFilel
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            handleChange={handleChange}
            placeholder="Enter your first name"
          />
          <InputFilel
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            handleChange={handleChange}
            placeholder="Enter your last name"
          />
          <InputFilel
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
            placeholder="Enter your email"
          />
          <InputFilel
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            handleChange={handleChange}
            placeholder="Enter your password"
          />
          <InputFilel
            label="Role"
            type="text"
            name="role"
            value={formData.role}
            handleChange={handleChange}
            placeholder="Enter your role"
          />
          <InputFilel
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            handleChange={handleChange}
            placeholder="Enter your phone number"
          />
            <InputImageFiled label="Profile Picture" handleFileChange={handleFileChange} />
       

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="md:w-1/4 w-full mt-5 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] hover:bg-blue-600 text-white p-2 rounded-md font-semibold transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
