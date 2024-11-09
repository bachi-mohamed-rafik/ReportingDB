import { useState } from 'react';
import FetchGetReservation from '../FetchGet/FetchGetReservation';
import Documentation from '../Documentation/Documentation';
import Explication from '../Explication/Explication';import Source from '../Source/Source';
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

function ReservationMultipleProducts() {


  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/ReservationMultipleProducts/');
  const type= "reservation";
  const ReservationMultipleProductssqlQuery = `
  SELECT
    crp.reservation_id,
    COUNT(crp.reservation_id) AS count
  FROM
    crm_reservation_product crp
  LEFT JOIN
    crm_reservation cr ON crp.reservation_id = cr.id
  GROUP BY
    crp.reservation_id
  HAVING
    COUNT(crp.reservation_id) > 1;
  `;

  const ExplicationReservationMultipleProducts= `
  Cette table collecte les reservations avec des produits multiples 
  Une reservation doit avoir un et un seule produit
  `;

  return (
    <div className="ReservationMultipleProducts">
        <Table variant="striped" colorScheme="teal">
        <tr>
      <h2>Reservation avec des produits multiples </h2>
      </tr>
      <tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
            <Documentation />
            </td>
          <td>
          <Explication  Explication= {ExplicationReservationMultipleProducts} />
          </td>
          <td>
          <Source  source=       {urlToFetch} />
          </td>

          </tr>
          </Table>
      </tr>


      </tr>
      <tr>
      <FetchGetReservation urlToFetch={urlToFetch} />
      </tr>
      </Table>
    </div>
  );
}
export default ReservationMultipleProducts;
