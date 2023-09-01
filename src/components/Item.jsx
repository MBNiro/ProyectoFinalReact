import { Link } from "react-router-dom"
import {Card,CardBody,Image,Stack,Heading,Text,Divider,Button,CardFooter} from "@chakra-ui/react"

const Item = ({ id, nombre, detalle, imagen }) => {
  return (
    <>
      <div key={id} className="itemPaquete">
        <Card maxW="sm">
          <CardBody>
            <Link to={`/item/${id}`}>
              <Image src={imagen} alt="" className="imgHover" />
            </Link>
            <Stack spacing="3" mt="4">
              <Heading size="md">{nombre}</Heading>
              <Text fontSize="lg">Incluye: {detalle}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link to={`/item/${id}`}>
              <Button variant="solid" colorScheme="green">
                VER
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Item