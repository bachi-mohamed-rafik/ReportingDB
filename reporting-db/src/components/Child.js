import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';

function Child({ sendDataToParent, sendDataToParent2 , sendDataToParent3}) {
  const [data, setData] = useState("");


      // ReservationProduct
      const [ReservationProductAppearing, setReservationProductAppearing] = useState(false);
      // DevisWithDoubleReservation
      const [DevisWithDoubleReservationAppearing, setDevisWithDoubleReservationAppearing] = useState(false);
      // ReservationMultipleProducts
      const [ReservationMultipleProductsAppearing, setReservationMultipleProductsAppearing] = useState(false);
      // ReservationNoDevis
      const [ReservationNoDevisAppearing, setReservationNoDevisAppearing] = useState(false);

      function handleClick() {
        sendDataToParent(data);
      }

      function handleClick2() {
        sendDataToParent2(ReservationProductAppearing);
      }

      function handleClick3() {
        sendDataToParent3(ReservationProductAppearing);
      }

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
  

  return (
          <div className="SideBar">

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
          hideReservationNoDevis
            </button>
            </div>
          </MenuItem>
        </SubMenu>

        <SubMenu label="Reservation_Product">
        <MenuItem>
      <button onClick={handleClick2}>Show DevisReservation</button>
        </MenuItem>

        <MenuItem>
      <button onClick={handleClick3}>Hide DevisReservation</button>
        </MenuItem>

        <MenuItem>
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleClick}>Send Data to Parent</button>
        </MenuItem>
        </SubMenu>

        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
    </div>
  );
}

export default Child;