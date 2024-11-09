import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function SideBar() {
  
  const { setDataContext } = useContext(DataContext);
  const { setData } = useContext(DataContext);

  const [data, setDataSB] = useState("");


  const handleClick = () => {
    const newData = { message: 'Hello from Sidebar' };
    setData(newData);
  };

  const handleClickContext = () => {
    const newData = { message: 'Hello from Sidebar' };
    setDataContext(newData);
  };

      // ReservationProduct
      const [ReservationProductAppearing, setReservationProductAppearing] = useState(false);
      // DevisWithDoubleReservation
      const [DevisWithDoubleReservationAppearing, setDevisWithDoubleReservationAppearing] = useState(false);
      // ReservationMultipleProducts
      const [ReservationMultipleProductsAppearing, setReservationMultipleProductsAppearing] = useState(false);
      // ReservationNoDevis
      const [ReservationNoDevisAppearing, setReservationNoDevisAppearing] = useState(false);
  
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
    <div>
    <div>
      <button onClick={handleClick}>Send Data to Main</button>
    </div>
    <div className="SideBar">
    <Sidebar>
      <Menu>
      <SubMenu label="Context">
          <MenuItem onClick={()=>console.log("ggg")}> 
          <div>
          Show context
          <tr/>
          <button onClick={ShowReservationProduct}>
          Show context
            </button>
            <button onClick={handleClickContext}>
              handleClickContext
              </button>

            </div>
          </MenuItem>
          <MenuItem> 
          <div>
          Hide context
          <tr/>
          <button onClick={hideReservationProduct}>
          Hide  context
            </button>
            </div>
          </MenuItem>
        </SubMenu>

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


        <MenuItem> Documentation </MenuItem>

        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  </div>
    </div>
  );
}
export default SideBar;
