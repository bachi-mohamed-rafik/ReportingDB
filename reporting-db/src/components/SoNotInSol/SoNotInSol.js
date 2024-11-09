// SoNotInSol
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

function SoNotInSol() {


  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/SoNotInSol/');
  const type= "reservation";
  const SoNotInSolsqlQuery = `
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

  const ExplicationSoNotInSol= `
  Cette table collecte les reservations avec des produits multiples 
  Une reservation doit avoir un et un seule produit
  `;

  return (
    <div className="ReservationSoNotInSol">
      <Table>
        <tr>
      <h2>SoNotInSol </h2>
      </tr>
      <tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
            <Documentation />
            </td>
          <td>
          <Explication  Explication= {ExplicationSoNotInSol} />
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
export default SoNotInSol;
