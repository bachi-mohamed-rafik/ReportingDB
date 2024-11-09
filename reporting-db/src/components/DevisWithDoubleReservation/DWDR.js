import { useState } from 'react';
import FetchGet from '../FetchGet/FetchGet';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DWDRFetchGet from '../FetchGet/DWDRFetchGet';
function DWDR({so}) {

  const [urlToFetch, setUrlToFetch] = useState(`http://192.168.1.128:3002/DWDR/${so} `);
  const [DWDRAppearing, setDWDRAppearing] = useState(false);
  const DWDRsqlQuery =`select r.name from crm_reservation r
JOIN sale_order s on s.id = r.order_id
where s.name =${so} `;
// 'SO3149'
  return (
    <div className="DWDR">
      <table>
        <tr>
      <h2>Devi avec des plusieurs reservations</h2>
      </tr>
      <tr>
      <p>Un devi ne doit pas contenir plusieurs reservations </p>
      </tr>
      <tr>
      <p>donc vous trouvez un tableau qui collecte toutes les cas ou un devis contient plusieurs reservations </p>
      </tr>
      <tr>
          La requette ustilisé pour cette opération: 
        {DWDRsqlQuery} 
      </tr>
      <tr>
      {urlToFetch}
      </tr>
      <tr>
      http://localhost:3002/DWDR/${so} 
      </tr>
      <tr>
      <DWDRFetchGet urlToFetch={`http://localhost:3002/DWDR/${so} `}/>
      </tr>

      </table>
    </div>
  );
}
export default DWDR;
