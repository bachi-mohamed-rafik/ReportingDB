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

function DevisWithNoReservation() {

  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/DevisWithNoReservation/');
  const [DevisWithNoReservationAppearing, setDevisWithNoReservationAppearing] = useState(false);

  const DevisWithNoReservationsqlQuery =` SELECT 
    so.*
FROM 
    sale_order so
LEFT JOIN 
    crm_reservation cr ON so.id = cr.order_id
WHERE 
 cr.order_id IS NULL;
 `;

const ExplicationDevisWithNoReservation = `
                                            Un devi ne doit pas contenir plusieurs reservations 
                                            donc vous trouvez un tableau qui collecte toutes les cas ou un devis sans reservations 
                                      `

return (
    <div className="DevisWithNoReservation">
        <Table variant="striped" colorScheme="teal">
        <tr>
        <td>
        <h2>Devis sans reservations</h2>
        </td>
      </tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
          <Documentation />
          </td>
          <td>
          <Explication  Explication= {ExplicationDevisWithNoReservation} />
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
      </Table>
    </div>
  );
}
export default DevisWithNoReservation;
