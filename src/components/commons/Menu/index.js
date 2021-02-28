import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import Logotipo from './Logotipo';
import { Button } from '../Button';
import Nav from './NavMenu';

export default function Menu() {
  const [isNavMenuOpen, setNavMenuState] = React.useState(false);

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logotipo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        <Nav 
          isOpen={isNavMenuOpen}
          onClose={() => {
            setNavMenuState(false);
          }}
        />
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button 
          ghost variant='secondary.main'
        >
          &#10799;
        </Button>
        <Button 
          variant='primary.main'
          onClick={() => {
            setNavMenuState(!isNavMenuOpen);
          }}
        >
          &#8801;
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}