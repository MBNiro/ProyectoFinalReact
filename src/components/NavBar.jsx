import CartWidget from "./CartWidget"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import picture from "../assets/viaje-y-turismo.png"

const NavBar = () => {
  return (
    <div className="navBarClass">
      <div className="pic">
        <Link to={"./"}>
          <img src={picture} alt="" className="picture" />
        </Link>
      </div>

      <div className="cat">
        <Menu>
          <MenuButton as={Button}>
          Paquetes
          </MenuButton>
          <MenuList border="2px" borderColor="green">
            <Link to="/catalogue">
              <MenuItem>Todos los paquetes</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
      <div className="buttonCart">
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default NavBar