import React, { useState, useEffect } from 'react';
import { useProblemContext } from './ProblemContext';

import { Button, ButtonGroup } from '@chakra-ui/react' // necessary import to work with chakra ui v2 button

// this component is the child of Problem Component ,contain the ceses of every PRoblem 
// for example Problem named DevisWithDoubleReservation here in Problem overiview you will find all cases related this PRoblem .
const ProblemOverview = ({ nameToShow, sqlQuery, sendDataToParent } ) => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const { setProblemData } = useProblemContext();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.128:3002/api/fetch-data?sqlQuery=${encodeURIComponent(sqlQuery)}`
      );
      const result = await response.json();
      setData(result);
      console.log(data);
      setProblemData(data);
      console.log("data nts ",nameToShow );
      sendDataToParent(nameToShow);
      } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h3>{nameToShow}</h3>
      <button onClick={fetchData}
      style={{
        "background-color": "grey" , /* Green */
        "border": "none",
        "color": "white",
        "padding": "10px 15px",
        "text-align": "center",
        "text-decoration": "none",
        "display": "inline-block",
        "font-size": "16px"
      }}
      >
        <h5>
          =>
        </h5>
      </button>
    </div>
  )
}

export default ProblemOverview