import React, { useState, useEffect } from 'react';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import TableComponent from '../TableComponent/TableComponent';

function FetchGet({ urlToFetch } ,{type}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = urlToFetch;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log('Fetched data:', result); // Log fetched data for debugging
        setData(result); // Update data state
        setLoading(false); // Update loading state
      } catch (error) {
        console.error('Error fetching data:', { ...error });
        setLoading(false); // Ensure loading state is updated on error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <Spinner />;
  }

  if (!data || Object.keys(data).length === 0) {
    return <p>No data available</p>;
  }

  return (
    <>
      <TableComponent data={data} type={type}/>
    </>
  );
}

export default FetchGet;

//      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
