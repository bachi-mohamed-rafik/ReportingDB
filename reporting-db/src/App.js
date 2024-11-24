import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import MainPage from './componentsBis/MainPage/MainPage';
import Login from './componentsBis/Login';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check token on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // Assume user is authenticated if a token exists
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div>
      <ChakraProvider>
      <div>
      {isAuthenticated ? (
        <MainPage onLogout={handleLogout} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
      </ChakraProvider>
    </div>
);
}

export default App;


