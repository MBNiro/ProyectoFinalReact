import { useState, useContext } from "react"
import { Button } from "@chakra-ui/react"
import {FormControl,FormLabel,Box} from "@chakra-ui/react"
import { collection, getFirestore, addDoc } from "firebase/firestore"
import { CartContext } from "../context/ShoppingCartContext"


const OrderId = () => {
  const { cart, setCart } = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")

  const db = getFirestore()

  const ordersCollection = collection(db, "order")

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    setCart([])
  }

  const order = {nombre,apellido,correo,telefono, cart}

  return (
    <>
      <div className="formClass">
        <form
          onSubmit={handleSubmit}
          className="animate__animated animate__fadeIn"
        >
          <FormControl isRequired width="100%">
            <FormLabel>Nombre</FormLabel>
            <FormLabel>Apellido</FormLabel>
            <FormLabel>correo</FormLabel>
            <FormLabel>telefono</FormLabel>
            
            <Box my={3} textAlign="center">
              <Button type="submit" colorScheme="black">
                Enviar
              </Button>
            </Box>
          </FormControl>
        </form>
      </div>
    </>
  )
}

export default OrderId