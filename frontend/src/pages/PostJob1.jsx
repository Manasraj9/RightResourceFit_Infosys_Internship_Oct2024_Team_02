import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/NavbarCompany';
import Footer from '../Components/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBell, faBriefcase,faGift, faPlus, faStethoscope, faTimes } from '@fortawesome/free-solid-svg-icons';


const PostJob1 = () => {
  const navigate = useNavigate();
  const [salaryRange, setSalaryRange] = useState([2000, 90000]);
  const [skills, setSkills] = useState(['Java', 'Graphic Design', 'Communication', 'Illustrator']);
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
    <div className='bg-[#dbe2ef]'>
      <Navbar />
      <div className="bg-[#dbe2ef] min-h-screen mx-16">
        <div className="bg-white shadow-md">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/hGrYhMRiegWQb66QvnPsBBtR4k3o5PXxViune4a0LDAehdVnA.jpg"
                alt="Company Logo"
                className="h-10 w-10"
              />
              <div className="ml-3">
                <div className="text-sm text-gray-500">Company</div>
                <div className="text-lg font-semibold text-gray-800">Nomad</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md mt-4 max-w-4xl mx-auto">
          <div className="flex items-center px-6 py-4">
            <a href="#" className="text-lg font-semibold text-gray-800 flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Post a Job
            </a>
          </div>
          <div className="border-t border-gray-200 w-full">
            <div className="flex justify-center py-6 w-full">
              <div className="flex justify-around items-center w-full">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">Step 1/3</div>
                  <div className="mt-1 text-sm font-semibold text-gray-800">Job Information</div>
                </div>
                <div className="mx-8 border-r border-gray-200 h-10"></div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 text-gray-500 rounded-full h-10 w-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">Step 2/3</div>
                  <div className="mt-1 text-sm font-semibold text-gray-800">Job Description</div>
                </div>
                <div className="mx-8 border-r border-gray-200 h-10"></div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 text-gray-500 rounded-full h-10 w-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGift} />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">Step 3/3</div>
                  <div className="mt-1 text-sm font-semibold text-gray-800">Perks & Benefit</div>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-10 justify-center align-center'>
            {/* Basic Information Section */}
            <div className="mb-6 border-b pb-4">
              <h3 className="text-lg font-medium mb-1">Basic Information</h3>
              <p className="text-sm text-gray-500 mb-4">This information will be displayed publicly</p>
              <div className='flex gap-10'>
              <label className="block text-gray-700 font-medium mb-2">Job Title</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer"
                className="border border-gray-300 rounded p-2 mb-4 w-[550px]"
              />
              </div>
              <p className="text-xs text-gray-500">At least 80 characters</p>
              
            </div>

            {/* Type of Employment */}
            <div className="mb-6 border-b pb-4 flex gap-10">
              <div>
              <h3 className="text-lg font-medium mb-2">Type of Employment</h3>
              <p className="text-sm text-gray-500 mb-4">You can select multiple types of employment</p>
              </div>
              <div className="gap-y-0.5">
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
                  className="w-244 border border-gray-300 rounded p-2"
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
                  className="w-60"
                />
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={salaryRange[1]}
                  onChange={(e) => handleSalaryChange(e, 1)}
                  className="w-60"
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
            <Link to="/PostJob2">
            <div className="flex justify-end pb-4">
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded">Next Step</button>
            </div>
            </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      
      );
};

      export default PostJob1;
