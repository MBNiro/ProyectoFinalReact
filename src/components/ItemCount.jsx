import { useState, useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import { Button, Box } from "@chakra-ui/react"


const ItemCount = ({ id, nombre, precio}) => {
  const { setCart } = useContext(CartContext)
  let [count, setCount] = useState(1)

  const sumar = () => {
      setCount(count + 1)
  };
  const restar = () => {
      setCount(count - 1)
  };
  const reset = () => {
    setCount((count = 1))
  };

  const addToCart = () => {
    setCart((items) => {
      const isInCart = items.some((item) => item.id === id)
      if (isInCart) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count }
          } else {
            return item
          }
        });
      } else {
        return [...items, { id, precio, nombre, quantity: count }]
      }
    })
  }
  return (
    <>
      <Button onClick={restar} color="black">
        -
      </Button>
      <Box className="countClass">{count.toString()}</Box>
      <Button onClick={sumar} color="black">
        +
      </Button>
      <Button onClick={reset} colorScheme="green">
        Reset
      </Button>
      <Button onClick={() => addToCart()} colorScheme="green">
        Agregar
      </Button>
    </>
  )
}

export default ItemCount