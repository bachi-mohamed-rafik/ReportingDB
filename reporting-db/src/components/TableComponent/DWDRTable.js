import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import DWDR from '../DevisWithDoubleReservation/DWDR';
import DWDRFetchGet from '../FetchGet/DWDRFetchGet';
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
import DevisWithDoubleReservation from '../DevisWithDoubleReservation/DevisWithDoubleReservation';

function DWDRTable({ data }) {
  const [so, setSo] = useState({data});



  return (      
  <div className="container">
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
          <Tr>
          {data}
          <DWDRFetchGet data={data}/>
          </Tr>
      </Table>

    </TableContainer>
    </div>
  );
}

export default DWDRTable;
