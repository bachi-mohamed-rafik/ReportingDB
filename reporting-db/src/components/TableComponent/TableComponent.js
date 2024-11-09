import React from 'react';
import { Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ReturnFocus from '../test'
import { Text } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
} from '@chakra-ui/react';

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

import DevisWithDoubleReservation from '../DevisWithDoubleReservation/DevisWithDoubleReservation';

function TableComponent({ data }) {
  const [so, setSo] = useState(null);
  const [count, setCount] = useState(0);
  const [id, setID] = useState(345);
  const [itemsPerPage, setItemsPerPage] = useState(10);

 

  const [currentPage, setCurrentPage] = useState(0);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  const handleNextClick = () => {
    if (currentPage < maxPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };



  // ID variable
//  var id = 12352;

  // Base URL
  var baseURL = 'https://erp.bessapromotion.com/web?debug=1';

  // Construct the dynamic URL with the ID variable
  var dynamicURL = baseURL + '#id=' + id + '&cids=1&menu_id=281&model=sale.order&view_type=form';


//  var id = 12352;  // Replace 12352 with your variable
  var baseURL = 'https://erp.bessapromotion.com/web?debug=1';
  var dynamicURL = baseURL + '#id=' + id + '&cids=1&menu_id=281&model=sale.order&view_type=form';

  const DevisWithDoubleReservationDetails =() =>
    {
      console.log("hjhhj");

     }
  // Get the keys from the first nested object to use as table headers
  const headers = data && Object.keys(data).length > 0
    ? Object.keys(data[Object.keys(data)[0]])
    : [];

      // Assuming your table has an array of items
  const items = Object.keys(data); // Replace with your array of items

  const dataToDisplay = Object.keys(data)
  const rowsToDisplay = dataToDisplay.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Update the count when the component renders
  useEffect(() => {
    setCount(items.length);
  }, [items]);

  return (      
  <div className="container">
    <TableContainer>
    <Stat>
      <StatLabel>Nombre de cas:</StatLabel>
      <StatNumber>{ count }</StatNumber>
    </Stat>
    <Stat>
    <StatLabel>Page numero:</StatLabel>
      <StatNumber>     {currentPage+1} /  {  Math.floor(count / 10)+1 }   </StatNumber>
    </Stat>
    <SimpleGrid columns={2} spacing={10} mt={5}>
        <Button onClick={handlePrevClick} isDisabled={currentPage === 0}>Precedent</Button>
        <Button onClick={handleNextClick} isDisabled={currentPage >= Math.ceil(data.length / itemsPerPage) - 1}>Suivant</Button>
      </SimpleGrid>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            {headers.map(header => (
              <Th key={header}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
        
          {rowsToDisplay.map((key) => (
            <Tr key={key} >
              {headers.map(header => (
                <Td key={header} >
                  {data[key][header]}

                  {data[key] && data[key][header] && typeof data[key][header] === 'string' && data[key][header].startsWith("SO") && header ==='nom_du_bon_de_commande'   && 
                  <div>
                    {console.log("hhh",{header})}
                    <ReturnFocus so={data[key][header]} />
                  </div>
                  }

                </Td>

              ))}
              <Td>
              <Button onClick={()=>setID(data[key]['id'])}>
              <a href={dynamicURL} target="_blank" rel="noopener noreferrer">Visiter le cas: {data[key]['id']}
                </a>
                </Button>
                </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>

    </div>
  );
}

export default TableComponent; 
