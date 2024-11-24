import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { ProblemProvider } from './ProblemContext'; // import your context provider
import { NameToShowProvider } from './NameToShowContext'; // import your context provider
import  ProblemOverview  from "./ProblemOverview";
import  ProblemCaseExplorer  from "./ProblemCaseExplorer";
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  SimpleGrid,
  Heading,
  Text,
  Button
 } from '@chakra-ui/react'

const Problem = ({ problem_type }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };


  useEffect(() => {
    // Only fetch if problem_type is defined and not an empty string
    if (problem_type) {
      fetch(`http://192.168.1.128:3002/api/problem`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          console.log("data: ",data)
          console.log(problem_type)
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error.message);
        });
    }
  }, [problem_type]); // Add problem_type as a dependency

  return (
    <div>
      <ProblemProvider>
      <NameToShowProvider>
      <h1> {dataFromChild}</h1>

      {
        <Flex>
        <Box  w='20%' flex="1" padding={4}>
        {
          data.map((item, index) => (
          <div key={index}>
            {problem_type.includes(item._id) && (
              <div>
                <SimpleGrid spacing={4} padding={'10px'} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                  <Card>
                    <CardHeader>
                      <Heading size='md'>
                        <ProblemOverview  
                        nameToShow= {item.nameToShow}
                        sqlQuery= {item.sqlQuery}
                        sendDataToParent={handleDataFromChild}
                        />

                      </Heading>
                    </CardHeader>
                  </Card>
                </SimpleGrid>

              </div>
        )}
        </div>
        ))
        }
        </Box>
        <Box flex="2" padding={4}>
          <ProblemCaseExplorer/>
          {/* Right side content */}
        </Box>
        </Flex>
        }
        </NameToShowProvider>
        </ProblemProvider>

        </div>
        );
};

export default Problem;
