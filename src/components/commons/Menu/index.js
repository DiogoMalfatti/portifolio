import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

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
        <Avatar>
          <img src="../../../../public/images/avatarbranco75.png" alt=""/>
        </Avatar>
        <div>
          diogo malfatti
        </div>
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
