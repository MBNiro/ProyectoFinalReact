import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import brand from '../assets/viaje-y-turismo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Flex>
      <Box p='4' bg='red.400'className='box'>
        <Link to={"/"}>
      <img src={brand} alt="" width='50px' height='50px'/>
      </Link>
      TURISMO ARGENTINO
      </Box>
  <Spacer />
  <Menu>
   <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Paquetes
   </MenuButton>
   <MenuList>
    <MenuItem>
    <Link to= {`/category/${'cat1'}`}>
    Patagonia
    </Link>
    </MenuItem>
    <MenuItem>
    <Link to= {`/category/${'cat2'}`}> 
    Costa Argentina
    </Link>
    </MenuItem>
    <MenuItem>
    <Link to= {`/category/${'cat3'}`}>
    Norte Argentino
    </Link>
    </MenuItem>
    <MenuItem>
    <Link to= {`/category/${'cat4'}`}>
    Buenos Aires
    </Link>
    </MenuItem>
   </MenuList>
</Menu>
<Spacer />
<Box p='4' bg='green.400'className='box'>
<Link to={"/Cart"}>
<CartWidget/>
    </Link>
</Box>
    </Flex>
  )
}

export default Navbar