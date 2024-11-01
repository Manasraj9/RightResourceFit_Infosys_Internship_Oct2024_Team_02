import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
    const [jobData, setJobData] = useState({});

    const updateJobData = (data) => {
        setJobData((prevData) => ({ ...prevData, ...data }));
    };

    return (
        <JobContext.Provider value={{ jobData, updateJobData }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobContext = () => {
    return useContext(JobContext);
};
