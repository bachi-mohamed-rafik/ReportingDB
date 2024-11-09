import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import ReservationMultipleProducts from '../ReservationMultipleProducts/ReservationMultipleProducts';
import ReservationNoDevis from '../ReservationNoDevis/ReservationNoDevis';
import ReservationValidProductLibre from '../ReservationValidProductLibre/ReservationValidProductLibre';
import CrmReservationProductCrmReservation from '../CrmReservationProductCrmReservation/CrmReservationProductCrmReservation';

import './styles.css'; // Import the CSS file
import { background } from '@chakra-ui/react';
import { color } from 'framer-motion';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
function ReservationHome() {

  // Appearing
  const [a, setAppearing] = useState(null);


  // Appearings
  // ReservationMultipleProducts
  const [ReservationMultipleProductsAppearing, setReservationMultipleProductsAppearing] = useState(false);
  // ReservationNoDevis
  const [ReservationNoDevisAppearing, setReservationNoDevisAppearing] = useState(false);
  //ReservationValidProductLibre
  const [ReservationValidProductLibreAppearing, setReservationValidProductLibreAppearing] = useState(false);
  //CrmReservationProductCrmReservation
  const [CrmReservationProductCrmReservationAppearing, setCrmReservationProductCrmReservationAppearing] = useState(false);


  //ReservationMultipleProducts
  const ShowReservationMultipleProducts = () => {
    setReservationMultipleProductsAppearing(true);
    setAppearing('ReservationMultipleProducts')
  }

  // ReservationNoDevis
  const ShowReservationNoDevis = () => {
    setReservationNoDevisAppearing(true);
    setAppearing('ReservationNoDevis');
  }

  //ReservationValidProductLibre
  const ShowReservationValidProductLibre = () => {
    setReservationValidProductLibreAppearing(true);
    setAppearing('ReservationValidProductLibre');
  }

  //CrmReservationProductCrmReservation
  const ShowCrmReservationProductCrmReservation = () => {
    setCrmReservationProductCrmReservationAppearing(true);
    setAppearing('CrmReservationProductCrmReservation');
  }


  return (
      <div className="container">
        <Accordion>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                Reservation avec plusieurs produits
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowReservationMultipleProducts}>
                            Afficher les réservations avec plusieurs produits
                          </button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                Reservation sans devis
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowReservationNoDevis}>
                            Afficher les Reservation sans devis
                          </button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Reservation Valid Product Libre
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowReservationValidProductLibre}>
                            Afficher les Reservation Valid ProductLibre
                          </button>
            </AccordionPanel>
          </AccordionItem>

          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                CrmReservationProductCrmReservation
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowCrmReservationProductCrmReservation}>
              CrmReservationProductCrmReservation
                          </button>
            </AccordionPanel>
          </AccordionItem>
          

        </Accordion>

        <Table className='table'>
          <tr>
            {ReservationMultipleProductsAppearing === true && a === 'ReservationMultipleProducts'
              ? (
                  <ReservationMultipleProducts />
              )
              : null
            }
          </tr>
          <tr>
            {ReservationNoDevisAppearing === true && a === 'ReservationNoDevis'
              ? (
                  <ReservationNoDevis />
              )
              : null
            }
          </tr>
          <tr>
            {ReservationValidProductLibreAppearing === true && a === 'ReservationValidProductLibre'
              ? (
                  <ReservationValidProductLibre />
              )
              : null
            }
          </tr>

          
          <tr>
            {CrmReservationProductCrmReservationAppearing === true && a === 'CrmReservationProductCrmReservation'
              ? (
                  <CrmReservationProductCrmReservation />
              )
              : null
            }
          </tr>
          
        </Table>
      </div>
  );

}

export default ReservationHome;
