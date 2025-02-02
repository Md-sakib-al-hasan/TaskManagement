"use client"
import { useState, ChangeEvent } from "react";
import InputImageFiled from "../utils/InputImageFiled";
import InputFilel from "../utils/InputFilel";
import CustomMultiSelector from "../utils/CustoemmulitSeletor";
import InputTextarea from "../utils/InputTextarea";
import { useRouter } from "next/navigation";


const personNamesList = ["Alice", "Bob", "Charlie", "David", "Emma"];

const SubmitTaskCompletedData = () => {
  const route = useRouter()
  const [formData, setFormData] = useState({
    file: null as File | null,
    description: "",
    link: "",
    peoplelist: [] as string[],
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="p-4 mt-10 rounded-md relative bg-[#28284E] shadow-[5px_5px_20px_rgba(0,0,0,0.3),-2px_-2px_2px_rgba(255,255,255,0.2)] text-white">
      <h2 className="text-xl font-semibold mb-4">Submit Your Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Input */}
        <InputImageFiled label="Upload File" handleFileChange={handleFileChange} />

        {/* Social Media & Meeting Link Input */}
        <InputFilel
          value={formData.link}
          handleChange={handleChange}
          label="Social Media and Meeting Link"
          type="text"
          name="link"
          placeholder="Enter your social media and meeting Link"
        />

        {/* Custom Multi-Select Dropdown */}
        <CustomMultiSelector 
          optionsList={personNamesList} 
          selectedOptions={formData.peoplelist} 
          setFormData={setFormData}
          placeholder="Select People"
        />

        {/* Textarea for Description */}
        <div>
          <label className="block mb-1 text-gray-300">Write About This Task</label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your task here..."
            className="w-full p-2 bg-gray-700 rounded-md border border-gray-500 focus:border-blue-200 outline-none text-gray-300"
          />
        </div>
        <InputTextarea placeholder="Describe your task here..." label="Write About This Task" name="description" value={formData.description} handleChange={handleChange}/>

        {/* Submit Button */}
        <button
          onClick={() => route.push('/dashboard') }
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] hover:bg-blue-600 text-white p-2 rounded-md font-semibold transition"
        >
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default SubmitTaskCompletedData;
