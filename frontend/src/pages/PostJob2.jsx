// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../Components/NavbarCompany';
// import Footer from '../Components/Footer';
// import './PostJob2.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faInfoCircle, faBold, faItalic, faListUl, faLink } from '@fortawesome/free-solid-svg-icons';

// const PostJob2 = ({ jobData, updateJobData }) => {
//     const [localData, setLocalData] = useState({
//         description: jobData.description || '',
//         responsibilities: jobData.responsibilities || '',
//         qualifications: jobData.qualifications || '',
//         niceToHaves: jobData.niceToHaves || '',
//         company: jobData.company || 'Nomad',
//     });

//     const [errorMessage, setErrorMessage] = useState('');
//     const [loading, setLoading] = useState(false);
//     const maxChars = 500;
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (value.length <= maxChars) {
//             setLocalData((prevData) => ({ ...prevData, [name]: value }));
//         }
//     };

//     const handleNext = () => {
//         updateJobData(localData); // Save current data before navigating
//         setErrorMessage('');
//         navigate('/PostJob3'); // Move to next page
//     };

//     const handlePrevious = () => {
//         updateJobData(localData); // Save current data before navigating
//         navigate('/PostJob1'); // Move to previous page
//     };

//     return (
//         <div className="bg-[#dbe2ef]">
//             <Navbar />
//             <div className="bg-[#dbe2ef] min-h-screen mx-16">
//                 <div className="bg-white shadow-md">
//                     <div className="flex items-center justify-between px-6 py-4">
//                         <div className="flex items-center">
//                             <img
//                                 src="https://storage.googleapis.com/a1aa/image/hGrYhMRiegWQb66QvnPsBBtR4k3o5PXxViune4a0LDAehdVnA.jpg"
//                                 alt="Company Logo"
//                                 className="h-10 w-10"
//                             />
//                             <div className="ml-3">
//                                 <div className="text-sm text-gray-500">Company</div>
//                                 <div className="text-lg font-semibold text-gray-800">Nomad</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-white shadow-md mt-4 max-w-4xl mx-auto">
//                     <div className="flex items-center px-6 py-4">
//                         <button
//                             onClick={handlePrevious}
//                             className="text-lg font-semibold text-gray-800 flex items-center"
//                         >
//                             <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
//                             Post a Job
//                         </button>
//                     </div>
//                     <div className="border-t border-gray-200 w-full">
//                         <div className="flex justify-center py-6 w-full">
//                             <div className="flex justify-around items-center w-full">
//                                 {/* Steps indicators */}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container2">
//                         <div className="details">
//                             <h2>Details</h2>
//                             <p>Add the description of the job, responsibilities, who you are, and nice-to-haves.</p>
//                         </div>
//                         <hr /><br />

//                         {['description', 'responsibilities', 'qualifications', 'niceToHaves'].map((field) => (
//                             <div className="job-description" key={field}>
//                                 <div className="description-text">
//                                     <h3>{field.charAt(0).toUpperCase() + field.slice(1)}</h3>
//                                     <p>Describe {field} for the position.</p>
//                                 </div>
//                                 <div className="description-input">
//                                     <textarea
//                                         name={field}
//                                         value={localData[field]}
//                                         onChange={handleChange}
//                                         placeholder={`Enter ${field}`}
//                                         className="border rounded w-full p-2"
//                                     ></textarea>
//                                     <hr />
//                                     <div className="toolbar">
//                                         <div className="icons">
//                                             <button aria-label="Information"><FontAwesomeIcon icon={faInfoCircle} /></button>
//                                             <button aria-label="Bold"><FontAwesomeIcon icon={faBold} /></button>
//                                             <button aria-label="Italic"><FontAwesomeIcon icon={faItalic} /></button>
//                                             <button aria-label="List"><FontAwesomeIcon icon={faListUl} /></button>
//                                             <button aria-label="Link"><FontAwesomeIcon icon={faLink} /></button>
//                                         </div>
//                                         <div className="char-limit">Maximum {maxChars} characters</div>
//                                     </div>
//                                     <div className={`char-count ${localData[field].length > maxChars ? 'text-red-500' : ''}`}>
//                                         {localData[field].length} / {maxChars}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}

//                         <div className='flex justify-between mt-4'>
//                             <button
//                                 className="bg-[#3f72af] text-white py-2 px-5 rounded-lg"
//                                 onClick={handlePrevious}
//                             >
//                                 Previous
//                             </button>
//                             <button
//                                 className="bg-[#3f72af] text-white py-2 px-5 rounded-lg"
//                                 onClick={handleNext}
//                                 disabled={!localData.description || !localData.responsibilities || loading}
//                             >
//                                 {loading ? 'Submitting...' : 'Next'}
//                             </button>
//                         </div>

//                         {errorMessage && <div className="error-message text-red-600">{errorMessage}</div>}
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default PostJob2;
