import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type CustomMultiSelectorProps<T> = {
  optionsList: string[];
  selectedOptions: string[];
  setFormData: React.Dispatch<
    React.SetStateAction<T>
  >;
  placeholder: string;
};

const CustomMultiSelector =<T extends { peoplelist: string[] }> ({
  optionsList,
  selectedOptions,
  setFormData,
  placeholder,
}:CustomMultiSelectorProps<T>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle selection
  const handleCategoryChange = (people: string) => {
    setFormData((prev) => {
      const updatedPeopleList = prev.peoplelist.includes(people)
        ? prev.peoplelist.filter((c) => c !== people) 
        : [...prev.peoplelist, people]; 
      return { ...prev, peoplelist: updatedPeopleList }; 
    });
  };

  return (
    <div className="relative">
      <label className="block mb-1 text-gray-300">Select People</label>
      <div className="relative w-full flex items-center border border-gray-500 bg-gray-700 rounded-md p-2">
        {/* Toggle Button */}
        <button
          type="button"
          onClick={toggleDropdown}
          className="mr-2 text-gray-300 focus:outline-none"
        >
          {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        {/* Selected Options Display */}
        <div className="flex-1 text-gray-300">
          {selectedOptions.length > 0 ? selectedOptions.join(", ") : placeholder}
        </div>
      </div>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <div className="absolute left-0 w-full mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-10">
          {optionsList.map((item) => (
            <div
              key={item}
              className="p-2 hover:bg-gray-700 flex items-center cursor-pointer"
              onClick={() => handleCategoryChange(item)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(item)}
                className="mr-2"
                readOnly
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomMultiSelector;
