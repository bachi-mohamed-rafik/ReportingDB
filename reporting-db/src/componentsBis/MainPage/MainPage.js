import React, { useState, useEffect } from 'react';
import { Component } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { px } from "framer-motion";
import Problem from '../Problem';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

const MainPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://192.168.1.128:3002/api/problem-types")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
    <div>
    <Tabs isFitted variant='enclosed' width ={"100%"} size='md' colorScheme='green'>
      <TabList>
        {
        data.map((item) => 
        <Tab key={item.id}>
          {item.name}
        </Tab>
        )}
      </TabList>
      <TabPanels>
        {
        data.map((item) => 
        <TabPanel key={item.id}>
          <Problem problem_type = {item.problem_ids} />        
        </TabPanel>
      )}
      </TabPanels>
    </Tabs>
    </div>
    </div>  
    );
  };

export default MainPage;

