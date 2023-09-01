import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import { Flex, Box } from "@chakra-ui/react"
import carrito from "../assets/shopping-cart.png"

const CartWidget = () => {
  const { cart } = useContext(CartContext)

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0))
  })

  return (
    <>
    <Flex className="carrito">
        <Box>
        <img src={carrito} alt="" className="carrito" />
        </Box>
    </Flex>
    </>
  )
}

export default CartWidget