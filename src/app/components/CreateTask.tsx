"use client";

import { ChangeEvent, useState } from "react";
import InputFilel from "../utils/InputFilel";
import InputImageFiled from "../utils/InputImageFiled";
import CustomMultiSelector from "../utils/CustoemmulitSeletor";
import InputTextarea from "../utils/InputTextarea";
import { handleImageUpload } from "../utils/handleImageUpload";



const personNamesList = ["Alice", "Bob", "Charlie", "David", "Emma"];

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    priority: "",
    profilePic: "",
    description:"",
    peoplelist: [] as string[]
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const result = await handleImageUpload(file);
      setFormData({...formData,profilePic:String(result.data.url)})

    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log()
    console.log("Updated Profile Data:", formData);
  };

  return (
    <div className="w-full mx-auto relative bg-[#28284E] text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Create Task</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputFilel label="Title" type="text" name="title" value={formData.title} handleChange={handleChange} placeholder="Enter Task Title" />
        <InputFilel label="StartDate" type="date" name="startDate" value={formData.startDate} handleChange={handleChange} placeholder="Ente Task Start Date" />
        <InputFilel label="EndDate" type="date" name="endDate" value={formData.endDate} handleChange={handleChange} placeholder="Enter Task End Date" />
        <InputFilel label="Priority" type="text" name="priority" value={formData.priority} handleChange={handleChange} placeholder="Enter Task priority" />
        <span><InputImageFiled label="Profile Picture" handleFileChange={handleFileChange} /></span>
        <CustomMultiSelector optionsList={personNamesList} selectedOptions={formData.peoplelist}  setFormData={setFormData} placeholder="Select People"/>
        <div className="col-span-1 md:col-span-2">
        <InputTextarea placeholder="Describe your task here..."label="Write About This Task"name="description"value={formData.description} handleChange={handleChange}/>
        </div>
        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="md:w-1/4 w-full mt-5 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] hover:bg-blue-600 text-white p-2 rounded-md font-semibold transition"
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;