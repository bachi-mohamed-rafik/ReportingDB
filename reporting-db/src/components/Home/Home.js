import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DevisReservation from '../DevisReservation/DevisReservation';
import DevisWithDoubleReservation from '../DevisWithDoubleReservation/DevisWithDoubleReservation';
import ReservationMultipleProducts from '../ReservationMultipleProducts/ReservationMultipleProducts';
import ReservationNoDevis from '../ReservationNoDevis/ReservationNoDevis';
import ReservationValidProductLibre from '../ReservationValidProductLibre/ReservationValidProductLibre';
import ReservationValidDeviCancel from '../ReservationValidDeviCancel/ReservationValidDeviCancel';
import DevisWithNoReservation from '../DevisWithNoReservation/DevisWithNoReservation';
import DevisValidReservationNotValid from '../DevisValidReservationNotValid/DevisValidReservationNotValid';
import SoSolNotEqual from '../SoSolNotEqual/SoSolNotEqual';
import SoNotInSol from '../SoNotInSol/SoNotInSol';
import SoNoReservation from '../SoNoReservation/SoNoReservation';

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
function Home() {

  // Appearing
  const [a, setAppearing] = useState(null);


  // Appearings
  // ReservationProduct
  const [ReservationProductAppearing, setReservationProductAppearing] = useState(false);
  // DevisWithDoubleReservation
  const [DevisWithDoubleReservationAppearing, setDevisWithDoubleReservationAppearing] = useState(false);
  // ReservationMultipleProducts
  const [ReservationMultipleProductsAppearing, setReservationMultipleProductsAppearing] = useState(false);
  // ReservationNoDevis
  const [ReservationNoDevisAppearing, setReservationNoDevisAppearing] = useState(false);
  //ReservationValidProductLibre
  const [ReservationValidProductLibreAppearing, setReservationValidProductLibreAppearing] = useState(false);
  //ReservationValidDeviCancel
  const [ReservationValidDeviCancelAppearing, setReservationValidDeviCancelAppearing] = useState(false);
  //DevisWithNoReservation
  const [DevisWithNoReservationAppearing, setDevisWithNoReservationAppearing] = useState(false);
  // DevisValidReservationNotValid
  const [DevisValidReservationNotValidAppearing, setDevisValidReservationNotValidAppearing] = useState(false);
  // SoSolNotEqual
  const [SoSolNotEqualAppearing, setSoSolNotEqualAppearing] = useState(false);
  // SoNotInSol
  const [SoNotInSolAppearing, setSoNotInSolAppearing] = useState(false);
  // SoNoReservation
  const [SoNoReservationAppearing, setSoNoReservationAppearing] = useState(false);


  // DevisWithDoubleReservation
  const ShowDevisWithDoubleReservation = () => {
    setDevisWithDoubleReservationAppearing(true);
    setAppearing('DevisWithDoubleReservation')

  }

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

  //ReservationValidDeviCancel
  const ShowReservationValidDeviCancel = () => {
    setReservationValidDeviCancelAppearing(true);
    setAppearing('ReservationValidDeviCancel');
  }

  //DevisWithNoReservation
  const ShowDevisWithNoReservation = () => {
    setDevisWithNoReservationAppearing(true);
    setAppearing('DevisWithNoReservation');
  }

  // DevisValidReservationNotValid
  const ShowDevisValidReservationNotValid = () => {
    setDevisValidReservationNotValidAppearing(true);
    setAppearing('DevisValidReservationNotValid');
  }

  //SoSolNotEqual
  const ShowSoSolNotEqual = () => {
    setSoSolNotEqualAppearing(true);
    setAppearing('SoSolNotEqual');
  }

  // SoNotInSol
  const ShowSoNotInSol = () => {
    setSoNotInSolAppearing(true);
    setAppearing('SoNotInSol');
  }

  // SoNoReservation
  const ShowSoNoReservation = () => {
    setSoNoReservationAppearing(true);
    setAppearing('SoNoReservation');
  }

  return (
      <div className="container">
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Devis avec double réservation
                  </Box>
                  <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <button onClick={ShowDevisWithDoubleReservation} >
                Afficher Devis avec double réservation
              </button>
              </AccordionPanel>
          </AccordionItem>



          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                Afficher les Reservation Valid un Devi annulée
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowReservationValidDeviCancel}>
            Afficher les Reservation Valid un Devi annulée
                          </button>
            </AccordionPanel>
          </AccordionItem>

          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                Afficher les  Devi sans reservation
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowDevisWithNoReservation}>
            Afficher les Devis sans reservation
                          </button>
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                DevisValidReservationNotValid
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowDevisValidReservationNotValid}>
            Devis Valid Reservation Not Valid
                          </button>
            </AccordionPanel>
          </AccordionItem>
          

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                SoSolNotEqual
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowSoSolNotEqual}>
            SoSolNotEqual
                          </button>
            </AccordionPanel>
          </AccordionItem>

          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                SoNotInSol
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowSoNotInSol}>
            SoNotInSol
                          </button>
            </AccordionPanel>
          </AccordionItem>

          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                SoNoReservation
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <button onClick={ShowSoNoReservation}>
            SoNoReservation
                          </button>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>

        <Table className='table'>
          <tr>
            {ReservationProductAppearing === true
              ? (
              <DevisReservation />
              )
              : null
            }
          </tr>
          <tr>
            {DevisWithDoubleReservationAppearing === true && a === 'DevisWithDoubleReservation'
              ? (
                <DevisWithDoubleReservation />
              )
              : null
            }
          </tr>
          <tr>
            {ReservationValidDeviCancelAppearing === true && a === 'ReservationValidDeviCancel'
              ? (
                  <ReservationValidDeviCancel />
              )
              : null
            }
          </tr>
          
          <tr>
            {DevisWithNoReservationAppearing === true && a === 'DevisWithNoReservation'
              ? (
                  <DevisWithNoReservation />
              )
              : null
            }
          </tr>
          
          <tr>
            {DevisValidReservationNotValidAppearing === true && a === 'DevisValidReservationNotValid'
              ? (
                  <DevisValidReservationNotValid />
              )
              : null
            }
          </tr>

          <tr>
            {SoSolNotEqualAppearing === true && a === 'SoSolNotEqual'
              ? (
                  <SoSolNotEqual />
              )
              : null
            }
          </tr>

          
          <tr>
            {SoNotInSolAppearing === true && a === 'SoNotInSol'
              ? (
                  <SoNotInSol />
              )
              : null
            }
          </tr>

          
          <tr>
            {SoNoReservationAppearing === true && a === 'SoNoReservation'
              ? (
                  <SoNoReservation />
              )
              : null
            }
          </tr>


        </Table>
      </div>
  );

}

export default Home;
