import React, { useState } from 'react';
import Navbar from '../Components/NavbarCompany';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import './PostJob3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBriefcase, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const PostJob3 = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [perks, setPerks] = useState([{ title: '', description: '' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  const removeBenefit = (index) => {
    const newPerks = perks.filter((_, perkIndex) => perkIndex !== index);
    setPerks(newPerks);
  };

  const handleSubmit = async () => {
    // Validate perks
    const isValid = perks.every(perk => perk.title && perk.description);
    if (!isValid) {
      setError('Please fill in all perk titles and descriptions.');
      return;
    }
  
    setLoading(true);
    const jobData = {
      companyName: 'Nomad',
      perks,
    };
  
    try {
      const response = await fetch('http://localhost:1000/Jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Job posted:', result);
      } else {
        const errorText = await response.text(); // Capture the response body
        setError('Failed to post job: ' + errorText); // Show the error message
      }
    } catch (error) {
      setError('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='bg-[#dbe2ef]'>
      <Navbar />
      <div className="bg-[#dbe2ef] min-h-screen mx-16">
        <div className="bg-white shadow-md mt-4 max-w-4xl mx-auto">
          {/* Step Navigation Code */}
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
                    <div className="flex justify-between items-start">
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="icon close cursor-pointer"
                        onClick={() => removeBenefit(index)}
                      />
                    </div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Benefit Title"
                      value={perk.title}
                      onChange={(e) => handleChange(index, e)}
                      className="perk-input mt-10 border-2 border-gray-200 gap-2"
                    />
                    <textarea
                      name="description"
                      placeholder="Benefit Description"
                      value={perk.description}
                      onChange={(e) => handleChange(index, e)}
                      className="perk-textarea mt-1 border-2 border-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <br /><hr /><br />
          <div className='flex justify-between'>
            <Link to="/PostJob2">
              <button className="bg-[#3f72af] text-white py-2 px-5 rounded-lg">
                Previous
              </button>
            </Link>
            <button 
              className='bg-[#3f72af] text-white py-2 px-5 rounded-lg' 
              onClick={handleSubmit}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJob3;
