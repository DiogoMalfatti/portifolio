import React from 'react';
import { FooterWrapper } from './style/Footer';
import styled from 'styled-components'
import Avatar from '../../Avatar';
import Nome from '../../Nome';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'
import { Github } from '@styled-icons/boxicons-logos/Github';

export default function Footer(props) {
  return (

    <FooterWrapper {...props}>
      <p>
        desenvolved by 
      </p>
      <Avatar />
      <Nome />
      <LinkedinSquare 
          height="25"
          width="25"
       />
        <Youtube 
          height="25"
          width="25"
       />
        <Github 
          height="25"
          width="25"
       />
    </FooterWrapper>
  );
}