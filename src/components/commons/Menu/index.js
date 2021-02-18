import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import Text from '../../foundation/Text';
import Logotipo from '../Logotipo';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Portifólio',
    url: '/portifolio',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
]

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logotipo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide> 
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text variant="smallestException" tag="a" href={link.url} alt="">
                {link.texto}
              </Text>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide> 
        <Button ghost variant="secondary.main">
          X
        </Button>
        <Button variant="primary.main">
          &#8801;
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
};
