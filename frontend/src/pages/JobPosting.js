// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PostJob1 from './PostJob1';
// import PostJob2 from './PostJob2';
// import PostJob3 from './PostJob3';

// const JobPosting = () => {
//   const [jobData, setJobData] = useState({
//     title: '',
//     locations: [],
//     employmentType: [],
//     salaryRange: { min: 0, max: 0 },
//     skills: [],
//     companyName: '',
//   });

//   const [currentStep, setCurrentStep] = useState(1);
//   const navigate = useNavigate();

//   const handleNext = (data) => {
//     setJobData((prev) => ({ ...prev, ...data }));
//     setCurrentStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('http://localhost:1000/jobs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jobData)
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       // Reset job data after submission
//       setJobData({
//         title: '',
//         locations: [],
//         employmentType: [],
//         salaryRange: { min: 0, max: 0 },
//         skills: [],
//         companyName: '',
//       });
      
//       navigate('/JobListing'); // Navigate to job listing after successful submission
//     } catch (error) {
//       console.error('Error submitting job:', error);
//       // Handle error (e.g., show a toast notification)
//     }
//   };

//   return (
//     <div>
//       {currentStep === 1 && (
//         <PostJob1 onNext={handleNext} />
//       )}
//       {currentStep === 2 && (
//         <PostJob2 onBack={handleBack} onNext={handleNext} />
//       )}
//       {currentStep === 3 && (
//         <PostJob3 onBack={handleBack} onSubmit={handleSubmit} jobData={jobData} />
//       )}
//     </div>
//   );
// };

// export default JobPosting;
