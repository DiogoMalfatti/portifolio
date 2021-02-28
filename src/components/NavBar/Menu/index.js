import React from 'react';

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
    texto: 'Contato',
    url: '/contato',
  },
]

export default function NavMenu () {
  return (
    <span>
      {links.map((link) => { 
        return (
          <li key={link.url}>
            <a href={link.url}>
              {link.texto}
            </a>
          </li>
        )
      })}
    </span>
  )
}