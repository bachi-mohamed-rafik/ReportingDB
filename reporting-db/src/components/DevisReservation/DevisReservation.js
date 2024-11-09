import { useState } from 'react';
import FetchGet from '../FetchGet/FetchGet';

function DevisReservation() {

  const [urlToFetch, setUrlToFetch] = useState('http://192.168.1.128:3002/');
  return (
    <div className="DevisReservation">
      <h2>Reservations Products</h2>
      <p>this part show the reservations and their produtcs</p>
      {urlToFetch}
      <FetchGet urlToFetch={urlToFetch}/>
    </div>
  );
}
export default DevisReservation;





