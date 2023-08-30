import React from 'react'
import { useParams } from 'react-router-dom'
import { Card,CardHeader,CardBody, CardFooter, Heading , Text} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({paquetes}) => {
    const {id} = useParams();
    const filteredPaquetes = paquetes.filter ((paquete) => paquete.id == id)
  return (
    <div>
    {filteredPaquetes.map ((p) => {
  return (
<div key={p.id}>
<Card>
    <CardHeader>
      <Heading size='md'> {p.nombre}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{p.detalle}</Text>
      <Text>{p.category}</Text>
    </CardBody>
    <CardFooter> 
      <ItemCount />
    </CardFooter>
  </Card>
  </div>
)})}
</div>
)}


export default ItemDetail