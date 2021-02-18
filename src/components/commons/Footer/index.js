import React from 'react';
import { FooterWrapper } from './style/Footer';
import SocialIcons from '../SocialIcons';
import Logotipo from '../Logotipo';

export default function Footer(props) {
  return (

    <FooterWrapper {...props}>
      <p>
        desenvolved by 
      </p>
      <Logotipo />
      <SocialIcons />
    </FooterWrapper>
  );
}