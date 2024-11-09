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

function DevisValidReservationNotValid() {

  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/DevisValidReservationNotValid/');
  const [DevisValidReservationNotValidAppearing, setDevisValidReservationNotValidAppearing] = useState(false);

  const DevisValidReservationNotValidsqlQuery =` select so.*, cr.* from sale_order so
JOIN (select * from crm_reservation ) cr ON so.id = cr.order_id
where cr.state NOT IN('valid') AND so.state='sale'
 `;

const ExplicationDevisValidReservationNotValid = `
                                            Un devis validé doit avoire une reservation validé
                                            `

return (
    <div className="DevisValidReservationNotValid">
      <table>
        <tr>
        <td>
        <h2>Devi validé avec reservation non validé</h2>
        </td>
      </tr>
      <tr>
        <Table variant="striped" colorScheme="teal">
          <tr>
            <td>
          <Documentation />
          </td>
          <td>
          <Explication  Explication= {ExplicationDevisValidReservationNotValid} />
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
export default DevisValidReservationNotValid;
