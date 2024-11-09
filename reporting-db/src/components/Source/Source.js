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
function Source({source}) {
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
      <h1>Source</h1>
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Source</ModalHeader>
          <ModalCloseButton />
          <Text >
              <a href={source} target="_blank" rel="noopener noreferrer">
                Lien vers le backend: 
                {source}
                </a>
                </Text>

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

export default Source;
