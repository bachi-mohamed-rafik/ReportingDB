import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import MainPage from './MainPage/MainPage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.128:3002/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      // Redirect or update UI after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Flex>
      {isAuthenticated ? <MainPage /> : (
        <Flex direction="column" justifyContent="center" alignItems="center" h="100vh" w="full">
          <Box w="40%" m="auto" boxShadow="0 0 15px #dedede" px="2rem" py="3rem" borderRadius="15px">
            <Text fontSize="2rem" fontWeight="semibold" mb="2rem">Connectez-vous</Text>
            <form onSubmit={handleLogin}>
              <Box>
                <Input
                m="1rem"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Identifiant"
                  required
                />
              </Box>
              <Box>
                <Input
                  m="1rem"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </Box>
              <Button mt="2rem" colorScheme="blue" type="submit">Connexion</Button>
            </form>
          </Box>
        </Flex>        
      )}

      {error && !isAuthenticated && <p>{error}</p>}
    </Flex>

  );
};

export default Login;