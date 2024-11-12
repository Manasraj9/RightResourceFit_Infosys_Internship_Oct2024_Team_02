import React, { useState } from 'react';

const Dropdown = ({ options, label, onChange }) => {
  const [isOpen, setIsOpen] = useState(false); // Toggle dropdown visibility
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const handleDropdownToggle = () => setIsOpen((prevState) => !prevState);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onChange(option); // Pass the selected option to parent component
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative w-64">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div
        className="mt-1 cursor-pointer border border-gray-300 rounded-lg px-4 py-2 bg-white"
        onClick={handleDropdownToggle}
      >
        <span>{selectedOption || 'Select an option'}</span>
        <svg
          className="w-5 h-5 absolute right-3 top-2/4 transform -translate-y-2/4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className={`absolute w-full mt-1 border border-gray-300 bg-white rounded-lg shadow-lg max-h-60 overflow-auto z-10 
          transition-all duration-500 ease-in-out transform 
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-5'}`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer transition duration-200 transform hover:scale-105"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

