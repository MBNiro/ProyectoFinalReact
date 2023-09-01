import { useContext, useState } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import { Button, Center, Box, Heading } from "@chakra-ui/react"
import OrderId from "./OrderId"

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  const [buyConfirm, setBuyConfirm] = useState(false)

  const refreshCart = () => {
    setCart([]);
  };
  const deleteItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  };

  const showForm = () => {
    if (cart.length >= 1) {
      setBuyConfirm(true)
    } else {
      console.log("error")
    }
  };

  return (
    <>
      <div className="CartClass">
        <div className="cartHeader">
          <div className="cartBlocks">
          <div className="cartBlock">nombre</div>
            <div className="cartBlock">quantity</div>
            <div className="cartBlock">precio</div>
            <div className="cartBlock">Total</div>
            <Button
              onClick={refreshCart}
              colorScheme="green"
              color="black"
              size="xs"
            >
              <span className="material-symbols-outlined">refrescar</span>
            </Button>
          </div>
          {cart.map((prod) => (
            <div key={prod.id} className="cartItems">
              <div className="cartBlock">{prod.nombre}</div>

              <div className="cartBlock">{prod.quantity}</div>

              <div className="cartBlock">${prod.precio}</div>

              <div className="cartBlock">${prod.precio * prod.quantity}</div>

              <Button
                onClick={() => deleteItem(prod.id)}
                colorScheme="black"
                color="black"
                size="xs"
              >
                <span className="material-symbols-outlined">Eliminar</span>
              </Button>
            </div>
          ))}
        </div>
        <Center>
          <Box className="cartFooter" m={5}>
            <Heading size="md">
              Total: $ {cart.reduce((a, b) => a + b.precio * b.quantity, 0)}
            </Heading>
            <Box m={5}>
              <Button onClick={showForm} colorScheme="orange" color="black">
                Comprar
              </Button>
            </Box>
          </Box>
        </Center>
        {buyConfirm ? (
          <div className="formContainer">
            <OrderId cart={cart} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;