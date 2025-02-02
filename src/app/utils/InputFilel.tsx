import React from 'react'

type InputFieldPropes = {
    label:string;
    type:string;
    name:string;
    value:string;
    handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder:string; 
}

const InputFilel = ({ label,type,name,value,handleChange,placeholder}:InputFieldPropes) => {
  return (
    <div>
    <label className="block text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full p-2 bg-gray-700 rounded-md outline-none border border-gray-500 focus:border-blue-100"
    />
  </div>

  )
}

export default InputFilel
