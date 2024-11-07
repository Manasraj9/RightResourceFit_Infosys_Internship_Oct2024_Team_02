// import React, { useState } from 'react';
// import PostJob1 from './PostJob1';
// import PostJob2 from './PostJob2';
// import PostJob3 from './PostJob3';

// const PostJobFlow = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [jobData, setJobData] = useState({ /* your initial job data state */ });

//   const updateJobData = (data) => {
//     setJobData((prevData) => ({ ...prevData, ...data }));
//   };

//   const nextStep = () => setCurrentStep((prev) => prev + 1);
//   const prevStep = () => setCurrentStep((prev) => prev - 1);

//   return (
//     <div>
//       {currentStep === 1 && (
//         <PostJob1 jobData={jobData} updateJobData={updateJobData} nextStep={nextStep} />
//       )}
//       {currentStep === 2 && (
//         <PostJob2 jobData={jobData} updateJobData={updateJobData} nextStep={nextStep} prevStep={prevStep} />
//       )}
//       {currentStep === 3 && (
//         <PostJob3 jobData={jobData} updateJobData={updateJobData} prevStep={prevStep} />
//       )}
//     </div>
//   );
// };

// export default PostJobFlow;
