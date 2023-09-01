import { useParams} from "react-router-dom"
import {Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Center} from "@chakra-ui/react"
import ItemCount from "./ItemCount"

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const prodFilter = products.filter((prod) => prod.id == id)
  return (
    <>
      {prodFilter.map((prod) => (
        <div key={prod.id} className="itemContainer">
          <Card maxW="sm">
            <CardBody>
              <Image src={prod.imagen} alt="" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{prod.nombre}</Heading>
                <Text>{prod.detalle}</Text>
                <Text color="black" fontSize="2xl">
                  $ {prod.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2" className="countButtons">
                <ItemCount
                  id={prod.id}
                  name={prod.nombre}
                  price={prod.precio}
                />
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  )
}

export default ItemDetail