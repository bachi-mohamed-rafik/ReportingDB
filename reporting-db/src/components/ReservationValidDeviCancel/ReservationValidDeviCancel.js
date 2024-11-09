import { useState } from 'react';
import FetchGet from '../FetchGet/FetchGet';
import Documentation from '../Documentation/Documentation';
import Explication from '../Explication/Explication';
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
import Source from '../Source/Source';

function ReservationValidDeviCancel() {

  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/ReservationValidDeviCancel/');
  const [ReservationValidDeviCancelAppearing, setReservationValidDeviCancelAppearing] = useState(false);
  const ReservationValidDeviCancelsqlQuery = `select so.name,so.state , r.name, r.state
from crm_reservation r
Join (select  * from sale_order )so ON so.id = r.order_id 
where so.state = 'cancel' AND r.state = 'valid'`;
const ExplicationReservationValidDeviCancel=`cette table collecte les ReservationValidDeviCancel  `;

  return (
    <div className="ReservationValidDeviCancel">
      <Table>
        <tr>
      <h2>ReservationValidDeviCancel </h2>
      </tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
            <Documentation />
            </td>
            <td>
          <Explication  Explication= {ExplicationReservationValidDeviCancel} />
          </td>
          <td>
          <Source  source= {urlToFetch} />
          </td>
          </tr>
          </Table>
      </tr>      
      <tr>
      <FetchGet urlToFetch={urlToFetch}/>
      </tr>
      </Table>

    </div>
  );
}
export default ReservationValidDeviCancel;
