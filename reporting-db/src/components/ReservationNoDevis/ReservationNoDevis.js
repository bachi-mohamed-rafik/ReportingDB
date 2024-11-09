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

function ReservationNoDevis() {

  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/ReservationNoDevis/');
  const [DevisWithDoubleReservationAppearing, setDevisWithDoubleReservationAppearing] = useState(false);
  const ReservationNoDevisqlQuery = `select * from crm_reservation where order_id IS NULL`;

  const ExplicationReservationNoDevis= `
  cette table collecte les reservations avec des produits multiples 
  `;

  return (
    <div className="ReservationNoDevis">
      <Table>
        <tr>
      <h2>Reservations sans devi </h2>
      </tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
            <Documentation />
            </td>
          <td>
          <Explication  Explication= {ExplicationReservationNoDevis} />
          </td>
          <td>
          <Source  source=       {urlToFetch} />
          </td>
          </tr>
          </Table>
      </tr>      
      <tr>
      <FetchGetReservation urlToFetch={urlToFetch}/>
      </tr>
      </Table>

    </div>
  );
}
export default ReservationNoDevis;
