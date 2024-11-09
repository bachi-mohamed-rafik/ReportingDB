import React, { useState, useEffect } from 'react';
import TableComponent from '../TableComponent/TableComponent';
function DWDRFetchGet({ data }) {
  const [loading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.1.128:3002/DWDR/${data}`);
        if (response.ok) {
          const jsonData = await response.json();
          setFetchedData(jsonData);
        } else {
          throw new Error('Failed to fetch data');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [data]); // Trigger the effect whenever 'data' prop changes

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <TableComponent data={fetchedData} />
        </div>
      )}
    </div>
  );
}

export default DWDRFetchGet;
