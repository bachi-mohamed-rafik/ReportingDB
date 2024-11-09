import { useState } from 'react';
import FetchGetReservation from '../FetchGet/FetchGetReservation';
import Documentation from '../Documentation/Documentation';
import Explication from '../Explication/Explication';
import Source from '../Source/Source';
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

function CrmReservationProductCrmReservation() {

  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/CrmReservationProductCrmReservation/');
  const [CrmReservationProductCrmReservationAppearing, setCrmReservationProductCrmReservationAppearing] = useState(false);
  const CrmReservationProductCrmReservationsqlQuery = `select * from crm_reservation where order_id IS NULL`;

  const ExplicationCrmReservationProductCrmReservation= `
  CrmReservationProductCrmReservation
  cette table collecte les reservations avec des produits multiples 
  `;

  return (
    <div className="CrmReservationProductCrmReservation">
        <Table variant="striped" colorScheme="teal">
          <Thead>
        <tr>
      <h2>CrmReservationProductCrmReservation</h2>
      </tr>
      </Thead>
      <Tbody>
      <tr>
            <td>
            <Documentation />
            </td>
          <td>
          <Explication  Explication= {ExplicationCrmReservationProductCrmReservation} />
          </td>
          <td>
          <Source  source=       {urlToFetch} />
          </td>
      </tr>      
      </Tbody>
      </Table>hyu
      <FetchGetReservation urlToFetch={urlToFetch}/>


    </div>
  );
}
export default CrmReservationProductCrmReservation;
