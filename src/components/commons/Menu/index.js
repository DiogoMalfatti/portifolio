import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import Avatar from '../../Avatar';
import Nome from '../../Nome';

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
        <Avatar />
        <Nome />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide> 
        {links.map((link) => {
          return (
            <li key={link.url}>
              <a href={link.url} alt="">
                {link.texto}
              </a>
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
