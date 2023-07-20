import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (
    <Flex>
      <Box p='4' bg='red.400'className='box'>
      TURISMO ARGENTINO
      </Box>
  <Spacer />
  <Menu>
   <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className='paquetes'>
    Paquetes
   </MenuButton>
   <MenuList>
    <MenuItem>Patagonia</MenuItem>
    <MenuItem>Costa Argentina</MenuItem>
    <MenuItem>Norte Argentino</MenuItem>
    <MenuItem>Buenos Aires</MenuItem>
   </MenuList>
</Menu>
<Spacer />
<Box p='4' bg='green.400'className='box'>
<CartWidget/>
</Box>
    </Flex>
  )
}

export default Navbar