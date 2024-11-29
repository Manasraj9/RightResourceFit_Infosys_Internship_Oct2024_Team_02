import React, { useState, useEffect } from 'react';
import { Range } from 'react-range';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBell, faBriefcase, faInfoCircle, faBold, faItalic, faListUl, faLink, faGift, faPlus, faStethoscope, faTimes } from '@fortawesome/free-solid-svg-icons';
import './PostJob3.css';
import './PostJob2.css';
import { toast } from 'react-toastify'; // Import Toastify

const MIN = 2000;
const MAX = 100000;

const PostJob = ({ jobData = {}, updateJobData, nextStep }) => {
  const [values, setValues] = useState(jobData.salaryRange || [20000, 80000]);
  const [skills, setSkills] = useState(jobData.skills || ['Java', 'Graphic Design']);
  const [newSkill, setNewSkill] = useState('');
  const [jobLocations, setJobLocations] = useState(jobData.locations || ['']);
  const [employmentTypes, setEmploymentTypes] = useState(jobData.employmentType || []);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const maxChars = 500;
  const [perks, setPerks] = useState([{ title: '', description: '' }]);

  const handleEmploymentTypeChange = (type) => {
    const newEmploymentTypes = employmentTypes.includes(type)
      ? employmentTypes.filter((t) => t !== type)
      : [...employmentTypes, type];
    setEmploymentTypes(newEmploymentTypes);
  };

  const handleSalaryChange = (values) => {
    setValues(values);
  };

  const handleLocationChange = (index, value) => {
    const newLocations = [...jobLocations];
    newLocations[index] = value;
    setJobLocations(newLocations);
  };

  const addLocation = () => {
    const newLocations = [...jobLocations, ''];
    setJobLocations(newLocations);
  };

  const removeLocation = (index) => {
    const newLocations = jobLocations.filter((_, i) => i !== index);
    setJobLocations(newLocations);
  };

  const handleAddSkill = (e) => {
    e.preventDefault(); // Prevent form submission
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleChange = (index, event) => {
    const newPerks = perks.map((perk, perkIndex) => {
      if (index === perkIndex) {
        return { ...perk, [event.target.name]: event.target.value };
      }
      return perk;
    });
    setPerks(newPerks);
  };
  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const addBenefit = () => {
    setPerks([...perks, { title: '', description: '' }]);
  };

  const removeBenefit = (index) => {
    const newPerks = perks.filter((_, perkIndex) => perkIndex !== index);
    setPerks(newPerks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      companyId: "673c1fbeaacceddd71eb61a6",
      title: jobDetails.title,
      joblocations: jobLocations.filter((location) => location.trim() !== ''),
      employmentType: employmentTypes.join(','),  // if your backend expects a single string
      salaryRange: { min: values[0], max: values[1] },
      skills,
      description: jobDetails.description,
      responsibilities: jobDetails.responsibilities,
      qualifications: jobDetails.qualifications,
      niceToHaves: jobDetails.niceToHaves,
      perks: perks.map(perk => ({
        title: perk.title,
        description: perk.description
      }))
    };


    try {
      // Send data to backend
      const response = await fetch('http://localhost:1000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Job posted successfully:', result);
        window.location.reload();
        toast.success('Job Posted Successfully!');
      } else {
        console.error('Failed to post job:', response.status);
        toast.error(`Failed to post job ${error.message}`);
      }
    } catch (error) {
      console.error('Error posting job:', error);
      // Handle error (e.g., show a notification)
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= maxChars) {
      setJobDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }
  };

  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    responsibilities: '',
    qualifications: '',
    niceToHaves: ''
  });
  return (
    <div className='bg-[#dbe2ef]'>
      <Navbar />
      <div className="bg-[#dbe2ef] min-h-screen mx-16">
        <div className="bg-white shadow-md mt-4 max-w-4xl mx-auto">
          <div className="flex items-center px-6 py-4">
            <a href="#" className="text-lg font-semibold text-gray-800 flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2 " />
              <h1 className='text-3xl text-underline'>Post a Job</h1>
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mx-10">
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="mb-6 border-b pb-4 flex items-start">
                <label className="block text-gray-700 font-medium w-1/4">Job Title :</label>
                <div className="w-3/4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter job title"
                    value={jobDetails.title}
                    onChange={handleInputChange} // Ensure this updates jobDetails.title
                    required
                    className="border border-gray-300 rounded p-2 w-[40vh]"
                  />
                  <p className="text-xs text-gray-500 pt-0.5">At least 80 characters</p>
                </div>
              </div>

              <div className="mb-6 border-b pb-4 flex">
                <label className="block text-gray-700 font-medium mb-2">Job Locations :</label>
                <div className='pl-[29vh] flex flex-wrap'>
                  {jobLocations.map((location, index) => (
                    <div key={index} className="mb-0.5 items-center relative">
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => handleLocationChange(index, e.target.value)}
                        placeholder="e.g. Mumbai, India"
                        className="border border-gray-300 rounded items-center p-2 mr-2 w-[25vh]"
                      />
                      <button type="button" onClick={() => removeLocation(index)} className="m-1 text-gray-500 hover:text-red-500 absolute right-3 top-1 bottom-1">
                        ×
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={addLocation} className="text-blue-500 mt-2">
                    Add Another Location
                  </button>
                </div>
              </div>

              <div className="mb-6 border-b pb-4 flex items-start">
                <label className="block text-gray-700 font-medium w-1/4">Type of Employment :</label>
                <div className="w-3/4 space-y-1">
                  {['Full-Time', 'Part-Time', 'Remote', 'Internship', 'Contract'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={employmentTypes.includes(type)}
                        onChange={() => handleEmploymentTypeChange(type)}
                        className="form-checkbox mr-2"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className=" mb-6 border-b pb-4">
                <h3 className="text-lg font-medium mb-2">Salary Range :</h3>
                <p className="text-sm text-gray-500 mb-10">Use the slider to select the minimum and maximum salary range.</p>
                <div className='max-w-[700px]'>
                  <Range className="flex items-center "
                    step={1000}
                    min={MIN}
                    max={MAX}
                    values={values}
                    onChange={handleSalaryChange}
                    renderTrack={({ props, children }) => (
                      <div {...props} style={{ height: '6px', background: '#ccc', borderRadius: '4px', width: '100%', margin: '0 auto' }}>
                        {children}
                      </div>
                    )}
                    renderThumb={({ props, index }) => (
                      <div
                        {...props}
                        className='h-[3vh] bg-blue-600 rounded-full w-[3vh] outline-none cursor-pointer'
                      >

                        <div style={{ position: 'absolute', top: '-28px', fontWeight: 'bold', textAlign: 'center', width: '40px', left: '-12px' }}>
                          ₹{values[index]}
                        </div>
                      </div>
                    )}
                  />
                  <div className="flex justify-between mt-4">
                    <span>₹{MIN}</span>
                    <span>₹{MAX}</span>
                  </div>
                </div>
              </div>


              {/* Required Skills */}
              <div className="mb-2 border-b pb-4">
                <h3 className="text-lg font-medium mb-2">Required Skills :</h3>
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
                        className="ml-2 text-gray-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Step -2 Description form  */}
              <div className='pt-2'>
                <div className="container2">
                  <div className="details">
                    <h2>Details</h2>
                    <p>Add the description of the job, responsibilities, who you are, and nice-to-haves.</p>
                  </div>
                  <hr /><br />

                  {['description', 'responsibilities', 'qualifications', 'niceToHaves'].map((field) => (
                    <div className="job-description" key={field}>
                      <div className="description-text">
                        <h3>{field.charAt(0).toUpperCase() + field.slice(1)}</h3>
                        <p>Describe {field} for the position.</p>
                      </div>
                      <div className="description-input">
                        <textarea
                          name={field}
                          value={jobDetails[field]}  // Use the corresponding value from the state
                          onChange={handleInputChange}  // Update state on change
                          placeholder={`Enter ${field}`}
                          className="border rounded w-full p-2 gap-2"
                        ></textarea>
                        <hr />
                        <div className="toolbar">
                          <div className="icons">
                            <button aria-label="Information"><FontAwesomeIcon icon={faInfoCircle} /></button>
                            <button aria-label="Bold"><FontAwesomeIcon icon={faBold} /></button>
                            <button aria-label="Italic"><FontAwesomeIcon icon={faItalic} /></button>
                            <button aria-label="List"><FontAwesomeIcon icon={faListUl} /></button>
                            <button aria-label="Link"><FontAwesomeIcon icon={faLink} /></button>
                          </div>
                          <div className="char-limit">Maximum {maxChars} characters</div>
                        </div>
                        <div className={`char-count ${jobDetails[field].length > maxChars ? 'text-red-500' : ''}`}>
                          {jobDetails[field].length} / {maxChars}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

{/* Step -3 Perks and Benefits form  */}
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
                          <div className='flex'>
                            <div>
                              <input
                                type="text"
                                name="title"
                                placeholder="Benefit Title"
                                value={perk.title}
                                onChange={(e) => handleChange(index, e)}
                                className="p-2 h-2vh border-2 border-gray-200 gap-2 w-full"
                              />
                              <input
                                name="description"
                                type="text"
                                placeholder="Benefit Description"
                                value={perk.description}
                                onChange={(e) => handleChange(index, e)}
                                className="mt-1 border-2 p-2 border-gray-200 w-full min-h-[5vh] resize-none"
                              />
                            </div>
                            <div>
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="text-red-500 text-[4vh] ml-[2vh] cursor-pointer "
                                onClick={() => removeBenefit(index)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-5">
                <button type="submit" className={`bg-blue-500 text-white rounded px-6 py-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
                  {loading ? 'Posting...' : 'Post Job'}
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
        <Footer />
      
    </div>
  );
};

export default PostJob;
