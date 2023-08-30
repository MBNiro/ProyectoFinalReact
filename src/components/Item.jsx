import React from 'react'
import { Card,CardHeader,CardBody, CardFooter, Heading , Text, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Item = ({nombre,detalle,id, category}) => {
    
  return (
    <> 
    <Card>
    <CardHeader>
      <Heading size='md'> {nombre}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{detalle}</Text>
      <Text>{category}</Text>
    </CardBody>
    <CardFooter> 
      <Button>
      <Link to= {`/Item/${id}`}>VER</Link>
      </Button>
    </CardFooter>
  </Card>
  </>
  )
}
 
export default Item