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
  Text,
  Spinner,

} from '@chakra-ui/react';
import Source from '../Source/Source';
import FetchGetReservation from '../FetchGet/FetchGetReservation';
function ReservationValidProductLibre() {

  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/ReservationValidProductLibre/');
  const ReservationValidProductLibresqlQuery = `La requette ustilisé pour cette opération:
  select * from crm_reservation where order_id IS NULL`;
  const ExplicationReservationValidProductLibre = `Reservation validée avec un produit libre peut causé un probleme dans le stock`;
  const SourceReservationValidProductLibre = ``

  return (
    <div className="ReservationValidProductLibre">
      <Table>
        <tr>
      <h2>Produit Libre avec une Reservation Validé </h2>
      </tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
            <Documentation />
            </td>
          <td>
          <Explication  Explication= {ExplicationReservationValidProductLibre} />
          </td>
          <td>
          <Source  source= {urlToFetch} />
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
export default ReservationValidProductLibre;
