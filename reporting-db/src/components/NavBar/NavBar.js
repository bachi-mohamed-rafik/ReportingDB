//navigation.js code should look like
import React, { Component } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Home  from "../Home/Home";
import ReservationHome from '../Home/ReservationHome'
import { px } from "framer-motion";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tabs variant='enclosed' width ={"100%"} size='md' colorScheme='green'>
          <TabList >
            <Tab> Crm Vente (Devis)</Tab>
            <Tab> Crm Vente (Reservations)</Tab>
            <Tab>Crm Echeancier</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Home />
            </TabPanel>
            <TabPanel>
              <ReservationHome />
            </TabPanel>
            <TabPanel>
              <p>En cours!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

      </div>
    );
  }
}
export default NavBar;
