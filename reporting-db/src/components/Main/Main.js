import { useState } from "react";
import DevisReservation from '../DevisReservation/DevisReservation';
import DevisWithDoubleReservation from '../DevisWithDoubleReservation/DevisWithDoubleReservation';
import ReservationMultipleProducts from '../ReservationMultipleProducts/ReservationMultipleProducts';
import { color } from 'framer-motion';
import ReservationNoDevis from '../ReservationNoDevis/ReservationNoDevis';
import DevisWithNoReservation from "../DevisWithNoReservation/DevisWithNoReservation";

function Main() {
      // ReservationProduct
      const [ReservationProductAppearing, setReservationProductAppearing] = useState(false);
      // DevisWithDoubleReservation
      const [DevisWithDoubleReservationAppearing, setDevisWithDoubleReservationAppearing] = useState(false);
      // ReservationMultipleProducts
      const [ReservationMultipleProductsAppearing, setReservationMultipleProductsAppearing] = useState(false);
      // ReservationNoDevis
      const [ReservationNoDevisAppearing, setReservationNoDevisAppearing] = useState(false);
      // DevisWithNoReservation
      const [DevisWithNoReservationAppearing, setDevisWithNoReservationAppearing] = useState(false);
    
    
      // ReservationProduct
      const ShowReservationProduct =()=> {
        setReservationProductAppearing(true);
        console.log('ReservationProductAppearing:', ReservationProductAppearing) ;
      }
      const hideReservationProduct =()=> {
        setReservationProductAppearing(false);
        console.log('ReservationProductAppearing:', ReservationProductAppearing) ;
      }
    
      // DevisWithDoubleReservation
      const ShowDevisWithDoubleReservation =()=> {
        setDevisWithDoubleReservationAppearing(true);
        console.log('DevisWithDoubleReservationAppearing:', DevisWithDoubleReservationAppearing) ;
      }
      const hideDevisWithDoubleReservation =()=> {
        setDevisWithDoubleReservationAppearing(false);
        console.log('DevisWithDoubleReservationAppearing:', DevisWithDoubleReservationAppearing) ;
      }
    
      //ReservationMultipleProducts
      const ShowReservationMultipleProducts =()=> {
        setReservationMultipleProductsAppearing(true);
        console.log('ReservationMultipleProductsAppearing:', ReservationMultipleProductsAppearing) ;
      }
      const hideReservationMultipleProducts =()=> {
        setReservationMultipleProductsAppearing(false);
        console.log('ReservationMultipleProductsAppearing:', ReservationMultipleProductsAppearing) ;
      }
    
      // ReservationNoDevis
      const ShowReservationNoDevis =()=> {
        setReservationNoDevisAppearing(true);
        console.log('ReservationNoDevisAppearing:', ReservationNoDevisAppearing) ;
      }
      const hideReservationNoDevis =()=> {
        setReservationNoDevisAppearing(false);
        console.log('ReservationNoDevisAppearing:', ReservationNoDevisAppearing) ;
      }

      //DevisWithNoReservation
      const DevisWithNoReservation =()=> {
        setDevisWithNoReservationAppearing(true);
        console.log('DevisWithNoReservationAppearing:', DevisWithNoReservationAppearing) ;
      }
      const hideDevisWithNoReservation =()=> {
        setDevisWithNoReservationAppearing(false);
        console.log('DevisWithNoReservationAppearing:', DevisWithNoReservationAppearing) ;
      }

  

  return (
    <div className="Main">
      <h2>Main</h2>
      {ReservationProductAppearing === true
           ? (
            <div>
              <button onClick={hideReservationProduct}>
                click to hide Reservation Product 
              </button>
            <DevisReservation/>
            </div>
           )
           : null
          }

      {DevisWithDoubleReservationAppearing === true
           ? (
            <div>
              <button onClick={hideDevisWithDoubleReservation}>
                click to hide DoubleReservation 
              </button>
            <DevisWithDoubleReservation/>
            </div>
           )
           : null
          }



{ReservationMultipleProductsAppearing === true
           ? (
            <div>
              <button onClick={hideReservationMultipleProducts}>
                click to hide ReservationMultipleProducts 
              </button>
            <ReservationMultipleProducts/>
            </div>
           )
           : null
          }

{ReservationNoDevisAppearing === true
           ? (
            <div>
              <button onClick={hideReservationNoDevis}>
                click to hide ReservationNoDevis 
              </button>
            <ReservationNoDevis/>
            </div>
           )
           : null
          }
    </div>
  );
}

{DevisWithNoReservationAppearing === true
  ? (
   <div>
     <button onClick={hideDevisWithNoReservation}>
       click to hide DevisWithNoReservation
     </button>
   <DevisWithNoReservation/>
   </div>
  )
  : null
 }
export default Main;
