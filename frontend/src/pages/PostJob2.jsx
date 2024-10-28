import React, { useState } from 'react';
import Navbar from '../Components/NavbarHome';
import Footer from '../Components/Footer';
import './PostJob2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBell, faBriefcase, faPlus, faStethoscope, faTimes } from '@fortawesome/free-solid-svg-icons';

const PostJob2 = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [perks, setPerks] = useState([{ title: '', description: '' }]);

  const handleChange = (index, event) => {
    const newPerks = perks.map((perk, perkIndex) => {
      if (index === perkIndex) {
        return { ...perk, [event.target.name]: event.target.value };
      }
      return perk;
    });
    setPerks(newPerks);
  };

  const addBenefit = () => {
    setPerks([...perks, { title: '', description: '' }]);
  };

  const handleSubmit = async () => {
    const jobData = {
      companyName: 'Nomad',
      jobTitle,
      perks,
    };

    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Job posted:', result);
        // Optionally, reset the form or show success message
      } else {
        console.error('Failed to post job');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
            <div>
              <FontAwesomeIcon icon={faBell} className="text-gray-500" />
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
                  <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">Step 2/3</div>
                  <div className="mt-1 text-sm font-semibold text-gray-800">Job Description</div>
                </div>
                <div className="mx-8 border-r border-gray-200 h-10"></div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">Step 3/3</div>
                  <div className="mt-1 text-sm font-semibold text-gray-800">Perks & Benefit</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container2">
          <div className="details">
            <h2>Basic Information</h2>
            <p>List out your top perks and benefits.</p>
          </div>
          <hr /><br />
          <div className="flex">
            <div className="sidebar">
              <div className="details">
                <h3>Perks and Benefits</h3>
                <p>Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees</p>
              </div>
            </div>
            <div className="content">
              <button className="add-benefit-btn" onClick={addBenefit}>
                <FontAwesomeIcon icon={faPlus} className="icon" /> Add Benefit
              </button>
              <div className="benefits-grid">
                {perks.map((perk, index) => (
                  <div key={index} className="benefit-card">
                    <div className="card-header">
                      <FontAwesomeIcon icon={faStethoscope} className="icon stethoscope" />
                      <FontAwesomeIcon icon={faTimes} className="icon close" />
                    </div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Benefit Title"
                      value={perk.title}
                      onChange={(e) => handleChange(index, e)}
                      className="perk-input"
                    />
                    <textarea
                      name="description"
                      placeholder="Benefit Description"
                      value={perk.description}
                      onChange={(e) => handleChange(index, e)}
                      className="perk-textarea"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br /><hr /><br />
          <div className='next'>
            <button className='next-step' onClick={handleSubmit}>Save</button>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJob2;
