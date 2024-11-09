import React from 'react';
import { Alert, AlertDescription } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
function Documentation({SqlQuery}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const a ="a"


  return (
    <div>
      <Text   
      onClick={onOpen}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="4xl"
      fontWeight="extrabold">
      <h1>Documentation</h1>
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Documentation</ModalHeader>
          <ModalCloseButton />
          {SqlQuery}
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  );
}

export default Documentation;
