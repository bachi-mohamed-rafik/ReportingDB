import React, { createContext, useState, useContext } from 'react';

// Create a Context
const ProblemContext = createContext();

// Create a Provider component
export const ProblemProvider = ({ children }) => {
  const [problemData, setProblemData] = useState(null);

  return (
    <ProblemContext.Provider value={{ problemData, setProblemData }}>
      {children}
    </ProblemContext.Provider>
  );
};

// Custom hook to use the context
export const useProblemContext = () => {
  return useContext(ProblemContext);
};
