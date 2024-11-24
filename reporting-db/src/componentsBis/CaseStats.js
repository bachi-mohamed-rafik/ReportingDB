import React from 'react'

import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  SimpleGrid,
  Heading,
  Text,
  Button
 } from '@chakra-ui/react'

const CaseStats = ({stat}) => {
  return (
    <div>
      {stat > 0 ? (
        <div>
<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card size='sm'>
    <CardHeader>
      <Heading size='md'> Nombre de cas: {stat}</Heading>
    </CardHeader>
    <CardBody>
      <Text></Text>
    </CardBody>
  </Card>
</SimpleGrid>
        </div>
      ): null      }

</div>
  )
}

export default CaseStats