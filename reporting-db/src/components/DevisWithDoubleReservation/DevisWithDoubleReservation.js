import { useState } from 'react';
import FetchGet from '../FetchGet/FetchGet';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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

function DevisWithDoubleReservation() {

  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/DevisWithDoubleReservation/');
  const [DevisWithDoubleReservationAppearing, setDevisWithDoubleReservationAppearing] = useState(false);

  const DevisWithDoubleReservationsqlQuery =`WITH RankedResults AS (
                                                SELECT so.name AS Nom_du_bon_de_commande, r.name AS Nom_de_la_reservation, r.order_id, c.order_id_count AS nombre_de_reservations_pour_ce_devis,
                                                      ROW_NUMBER() OVER(PARTITION BY so.name ORDER BY c.order_id_count DESC) AS rn
                                                FROM crm_reservation r
                                                JOIN (
                                                  SELECT order_id, COUNT(order_id) AS order_id_count
                                                  FROM crm_reservation
                                                  WHERE state = 'valid'
                                                  GROUP BY order_id
                                                ) c ON r.order_id = c.order_id
                                                JOIN sale_order so ON r.order_id = so.id
                                                WHERE r.state = 'valid' AND order_id_count > 1
                                              )
                                              SELECT Nom_du_bon_de_commande, Nom_de_la_reservation, order_id, nombre_de_reservations_pour_ce_devis
                                              FROM RankedResults
                                              WHERE rn = 1
                                              ORDER BY nombre_de_reservations_pour_ce_devis DESC`;

const ExplicationDevisWithDoubleReservation = `
                                            Un devi ne doit pas contenir plusieurs reservations 
                                            donc vous trouvez un tableau qui collecte toutes les cas ou un devis contient plusieurs reservations 
                                      `

return (
    <div className="DevisWithDoubleReservation">
      <table>
        <tr>
        <td>
        <h2>Devi avec des plusieurs reservations</h2>
        </td>
      </tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
          <Documentation />
          </td>
          <td>
          <Explication  Explication= {ExplicationDevisWithDoubleReservation} />
          </td>

          <td>
          <Source  source=       {urlToFetch} />
          </td>
          
          </tr>
          </Table>
      </tr>
      <tr>
      </tr>
      <tr>
      <FetchGet urlToFetch={urlToFetch}/>
      </tr>
      </table>
    </div>
  );
}
export default DevisWithDoubleReservation;
