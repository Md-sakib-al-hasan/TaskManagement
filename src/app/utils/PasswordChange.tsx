"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordChange = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
  });

  const togglePasswordVisibility = (field: "old" | "new") => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password Updated:", formData);
  };

  return (
    <div className="w-full  mx-auto p-6  text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Change Password</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Old Password */}
        <div className="relative">
          <label className="block text-gray-300 mb-1">Old Password</label>
          <input
            type={showPassword.old ? "text" : "password"}
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            placeholder="Enter old password"
            className="w-full p-2 bg-gray-700 rounded-md outline-none border border-gray-500 focus:border-blue-100 pr-10"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-400 hover:text-white"
            onClick={() => togglePasswordVisibility("old")}
          >
            {showPassword.old ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* New Password */}
        <div className="relative">
          <label className="block text-gray-300 mb-1">New Password</label>
          <input
            type={showPassword.new ? "text" : "password"}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full p-2 bg-gray-700 rounded-md outline-none border border-gray-500 focus:border-blue-100 pr-10"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-400 hover:text-white"
            onClick={() => togglePasswordVisibility("new")}
          >
            {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Submit Button (Full Width) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="md:w-1/4 w-full mt-5 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] hover:bg-blue-600 text-white p-2 rounded-md font-semibold transition"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordChange;
