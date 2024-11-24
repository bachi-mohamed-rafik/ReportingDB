import React, { createContext, useContext } from 'react';
import { useFetchProblemTypes } from '../api/problemTypesApi';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data: problemTypes, loading, error } = useFetchProblemTypes();

  return (
    <DataContext.Provider value={{ problemTypes, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for accessing data context
export const useData = () => useContext(DataContext);
