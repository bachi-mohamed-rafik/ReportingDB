import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';
function SideBar({ sendDataToParent } ) {

  const [data, setData] = useState("");

  function handleClick() {
    console.log(data)
    //sendDataToParent(data);
  }


    // ReservationProduct
    const [ReservationProductAppearing, setReservationProductAppearing] = useState(false);
    // DevisWithDoubleReservation
    const [DevisWithDoubleReservationAppearing, setDevisWithDoubleReservationAppearing] = useState(false);
    // ReservationMultipleProducts
    const [ReservationMultipleProductsAppearing, setReservationMultipleProductsAppearing] = useState(false);
    // ReservationNoDevis
    const [ReservationNoDevisAppearing, setReservationNoDevisAppearing] = useState(false);
    //DevisWithNoReservation
    const [DevisWithNoReservationAppearing, setDevisWithNoReservationAppearing] = useState(false);
    // DevisValidReservationNotValid
    const [DevisValidReservationNotValidAppearing, setDevisValidReservationNotValidAppearing] = useState(false);


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
    const ShowDevisWithNoReservation =()=> {
      setDevisWithNoReservationAppearing(true);
      console.log('DevisWithNoReservationAppearing:', DevisWithNoReservationAppearing) ;
    }
    const hideDevisWithNoReservation =()=> {
      setDevisWithNoReservationAppearing(false);
      console.log('DevisWithNoReservationAppearing:', DevisWithNoReservationAppearing) ;
    }

    //DevisValidReservationNotValid
    const ShowDevisValidReservationNotValid =()=> {
      setDevisValidReservationNotValidAppearing(true);
      console.log('DevisValidReservationNotValidAppearing:', DevisValidReservationNotValidAppearing) ;
    }
    const hideDevisValidReservationNotValid =()=> {
      setDevisValidReservationNotValidAppearing(false);
      console.log('DevisValidReservationNotValidAppearing:', DevisValidReservationNotValidAppearing) ;
    }



    return (
    <div >
    <Sidebar>
      <Menu>
      <SubMenu label="Reservation_Product">
          <MenuItem onClick={()=>console.log("ggg")}> 
          <div>
          Show reservations products
          <tr/>
          <button onClick={ShowReservationProduct}>
          Show reservations products
            </button>
            </div>
          </MenuItem>
          <MenuItem> 
          <div>
          Hide reservations products
          <tr/>
          <button onClick={hideReservationProduct}>
          Hide reservations products
            </button>
            </div>
          </MenuItem>
        </SubMenu>

        <SubMenu label="DevisWithDoubleReservation">
          <MenuItem onClick={()=>console.log("ggg")}> 
          <div>
          Show DevisWithDoubleReservation
          <tr/>
          <button onClick={ShowDevisWithDoubleReservation}>
          Show DevisWithDoubleReservation
            </button>
            </div>
          </MenuItem>
          <MenuItem> 
          <div>
          Hide DevisWithDoubleReservation
          <tr/>
          <button onClick={hideDevisWithDoubleReservation}>
          Hide DevisWithDoubleReservation
            </button>
            </div>
          </MenuItem>
        </SubMenu>

        <SubMenu label="ReservationMultipleProducts">
          <MenuItem onClick={()=>console.log("ggg")}> 
          <div>
          Show ReservationMultipleProducts
          <tr/>
          <button onClick={ShowReservationMultipleProducts}>
          Show ReservationMultipleProducts
            </button>
            </div>
          </MenuItem>
          <MenuItem> 
          <div>
          Hide ReservationMultipleProducts
          <tr/>
          <button onClick={hideReservationMultipleProducts}>
          Hide ReservationMultipleProducts
            </button>
            </div>
          </MenuItem>
        </SubMenu>

        
        <SubMenu label="ReservationNoDevis">
          <MenuItem onClick={()=>console.log("ggg")}> 
          <div>
          Show ReservationNoDevis
          <tr/>
          <button onClick={ShowReservationNoDevis}>
          Show ReservationNoDevis
            </button>
            </div>
          </MenuItem>
          <MenuItem> 
          <div>
          Hide ReservationNoDevis
          <tr/>
          <button onClick={hideReservationNoDevis}>
          Hide ReservationNoDevis
            </button>
            </div>
          </MenuItem>
        </SubMenu>

        DevisValidReservationNotValid


        <MenuItem> Documentation </MenuItem>
        <MenuItem>
              <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
              <button onClick={handleClick}>Send Data to Parent</button>
        </MenuItem>

        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  </div>
  );
}
export default SideBar;


