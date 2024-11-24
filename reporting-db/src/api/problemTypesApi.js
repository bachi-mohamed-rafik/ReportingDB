import useFetch from '../hooks/useFetch';

const BASE_URL = "http://192.168.1.128:3002/api"; 
// Define in .env, e.g., http://localhost:3002/api

export const useFetchProblemTypes = () => useFetch(`${BASE_URL}/problem-types`);
