import {Switch, Router, Route, Link, Button, useState} from 'react'
import DevisReservation from './DevisReservation';
function DevisReservationLink() {
  const [DevisReservationAppearing, setDevisReservationAppearing] = useState(false);
  //  const [state, setState] = useState(initialState)
  const handleClick=()=> {
    setDevisReservationAppearing(true);
    console.log('DevisReservationAppearing:', DevisReservationAppearing) ;
  }

  const hideDevisReservation=()=> {
    setDevisReservationAppearing(false);
    console.log('DevisReservationAppearing:', DevisReservationAppearing) ;
  }

    return (
    <div className="DevisReservationLink">
      <h2>ReservationProduct Link</h2>
      <button onClick={handleClick}>
        click to watch Reservations Products
      </button>
      {DevisReservationAppearing}
      {DevisReservationAppearing === true
           ? (
            <div>
              <button onClick={hideDevisReservation}>
                click to hide Reservations  Products
              </button>

                            
            <DevisReservation/>
            </div>
           )
           : null
          }

    </div>
  );
}

export default DevisReservationLink;
