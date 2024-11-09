import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Center
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { px } from 'framer-motion'
import React from 'react'
import DWDRTable from './TableComponent/DWDRTable'
import logo from '../static/logo.png'; // Tell webpack this JS file uses this image
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

function ReturnFocus({so}) {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>
      <img src={logo} alt="Logo" onClick={onOpen} />
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white" maxW="xl" maxH="100vh" >
          <ModalCloseButton />

          <ModalBody  className="modal" >
            <Center>
              <Table>
                <Tr>
                <DWDRTable data={so}/>
                </Tr>
              </Table>
            </Center>
            </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>
  )
}

export default ReturnFocus