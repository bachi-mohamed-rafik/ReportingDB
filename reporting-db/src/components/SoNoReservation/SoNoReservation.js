import { useState } from 'react';
import FetchGet from '../FetchGet/FetchGet';
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

function SoNoReservation() {


  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/SoNoReservation/');
  const type= "reservation";
  const SoNoReservationsqlQuery = `
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

  const ExplicationSoNoReservation= `
  Cette table collecte les reservations avec des produits multiples 
  Une reservation doit avoir un et un seule produit
  `;

  return (
    <div className="ReservationSoNoReservation">
      <Table>
        <tr>
      <h2>SoNoReservation </h2>
      </tr>
      <tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
            <Documentation />
            </td>
          <td>
          <Explication  Explication= {ExplicationSoNoReservation} />
          </td>
          <td>
          <Source  source=       {urlToFetch} />
          </td>

          </tr>
          </Table>
      </tr>


      </tr>
      <tr>
      <FetchGet urlToFetch={urlToFetch} />
      </tr>
      </Table>
    </div>
  );
}
export default SoNoReservation;
