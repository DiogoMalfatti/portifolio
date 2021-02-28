import React from 'react';
import { Logo } from './styles/Logotipo';

export default function Logotipo() {
  return (
    <Logo>
      <Logo.Avatar>
        <img src="./images/avatar50.png" alt=""/>
      </Logo.Avatar>

      <Logo.Nome>
        Diogo Malfatti
      </Logo.Nome>
    </Logo>
  )
}