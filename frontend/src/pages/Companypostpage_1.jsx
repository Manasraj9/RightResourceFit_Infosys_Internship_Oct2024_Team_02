import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Bars/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import SecondaryNavbar from '../Components/Bars/SecondaryNavbar.jsx';
import { FaArrowLeft } from 'react-icons/fa';

const Companypostpage_1 = () => {
  const navigate = useNavigate();
  const [salaryRange, setSalaryRange] = useState([2000, 90000]);
  const [skills, setSkills] = useState(['Java','Graphic Design', 'Communication', 'Illustrator']);
  const [newSkill, setNewSkill] = useState('');

  const handleSalaryChange = (event, index) => {
    const newSalaryRange = [...salaryRange];
    newSalaryRange[index] = event.target.value;
    setSalaryRange(newSalaryRange);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          {/* Back Arrow and Header */}
          <div className="flex items-center mb-6">
            <FaArrowLeft 
              className="mr-2 text-blue-600 cursor-pointer" 
              onClick={() => navigate('/companypage')}
            />
            <h2 className="text-2xl font-semibold">Post a Job</h2>
          </div>

          {/* Steps */}
          <div className="flex justify-between mb-4">
            <span className="font-medium text-blue-600">Step 1/3</span>
            <span className="text-sm">Job Information</span>
            <span className="text-sm">Job Description</span>
            <span className="text-sm">Perks & Benefits</span>
          </div>

          {/* Basic Information Section */}
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-medium mb-1">Basic Information</h3>
            <p className="text-sm text-gray-500 mb-4">This information will be displayed publicly</p>
            <label className="block text-gray-700 font-medium mb-2">Job Title</label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              className="w-full border border-gray-300 rounded p-2 mb-4"
            />
            <p className="text-xs text-gray-500">At least 80 characters</p>
          </div>

          {/* Type of Employment */}
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-medium mb-2">Type of Employment</h3>
            <p className="text-sm text-gray-500 mb-4">You can select multiple types of employment</p>
            <div className="grid grid-cols-2 gap-y-2">
              {['Full-Time', 'Part-Time', 'Remote', 'Internship', 'Contract'].map((type, index) => (
                <label key={index} className="flex items-center">
                  <input type="checkbox" className="form-checkbox mr-2" />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Salary */}
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-medium mb-2">Salary</h3>
            <p className="text-sm text-gray-500 mb-4">Please specify the estimated salary range for the role. You can leave this blank</p>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={salaryRange[0]}
                onChange={(e) => handleSalaryChange(e, 0)}
                className="w-24 border border-gray-300 rounded p-2"
              />
              <span>to</span>
              <input
                type="number"
                value={salaryRange[1]}
                onChange={(e) => handleSalaryChange(e, 1)}
                className="w-24 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mt-2">
              <input
                type="range"
                min="0"
                max="50000"
                value={salaryRange[0]}
                onChange={(e) => handleSalaryChange(e, 0)}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="50000"
                value={salaryRange[1]}
                onChange={(e) => handleSalaryChange(e, 1)}
                className="w-full"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-medium mb-2">Categories</h3>
            <p className="text-sm text-gray-500 mb-4">You can select multiple job categories</p>
            <input
              type="text"
              placeholder="This is a placeholder"
              className="w-full border border-gray-300 rounded p-2 mb-4"
            />
          </div>

          {/* Required Skills */}
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-medium mb-2">Required Skills</h3>
            <p className="text-sm text-gray-500 mb-4">Add required skills for the job</p>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Enter a skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="border border-gray-300 rounded p-2 mr-2"
              />
              <button onClick={handleAddSkill} className="px-3 py-2 bg-blue-600 text-white rounded">
                + Add Skills
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(index)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Next Step Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded">Next Step</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Companypostpage_1;
