import React from 'react';
import { Nav } from './styles/NavBar';
import Logotipo from './Logotipo';
import { Button } from '../commons/Button';
import NavMenu from './Menu';
import { SymbolOpen, SymbolClose } from './NavButton';

export default function NavBar() {
  
  const [isNavMenu, setNavMenu] = React.useState(false);
  const [isBtnClose, setBtnClose] = React.useState(false);
  const [isBtnOpen, setBtnOpen] = React.useState(true);

  return (
    <Nav>
      <Nav.LeftSide>
        <Logotipo />
      </Nav.LeftSide>
      <Nav.CentralSide>
        {isNavMenu && <NavMenu />}
      </Nav.CentralSide>
      <Nav.RightSide>
        <Button
          onClick={() => {
            setNavMenu(!isNavMenu);
            setBtnClose(!isBtnClose);
            setBtnOpen(!isBtnOpen);
          }}
        >
         {isBtnOpen && <SymbolOpen />}
         {isBtnClose && <SymbolClose />}
        </Button> 
      </Nav.RightSide>
    </Nav>
  )
}
