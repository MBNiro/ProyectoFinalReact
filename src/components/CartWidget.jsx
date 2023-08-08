import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import cart from '../assets/shopping-cart.png'

const CartWidget = () => {
  return (
    <Flex>
        <Box>
        <img src={cart} alt="imagen carrito" width='50px' height='50px'/>
        </Box>
        

    </Flex>
  )
}

export default CartWidget