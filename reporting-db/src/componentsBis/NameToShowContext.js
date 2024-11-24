import React, { createContext, useState, useContext } from 'react';

// Create a Context
const NameToShowContext = createContext();

// Create a Provider component
export const NameToShowProvider = ({ children }) => {
  const [NameToShow, setNameToShow] = useState(null);

  return (
    <NameToShowContext.Provider value={{ NameToShow, setNameToShow }}>
      {children}
    </NameToShowContext.Provider>
  );
};

// Custom hook to use the context
export const useProblemContext = () => {
  return useContext(NameToShowContext);
};
