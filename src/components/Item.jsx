import React from 'react'
import { Card,CardHeader,CardBody, CardFooter, Heading , Text, Button} from '@chakra-ui/react'

const Item = (nombre,detalle,stock) => {
    
  return (
    <>
    <Card>
    <CardHeader>
      <Heading size='md'> PAQUETE</Heading>
    </CardHeader>
    <CardBody>
      <Text>Ver detalle</Text>
    </CardBody>
    <CardFooter>
      <Link to={'/item/${id}'}> 
      <Button>
        Comprar
        </Button>
        </Link>
    </CardFooter>
  </Card>
  </>
  )
}

export default Item