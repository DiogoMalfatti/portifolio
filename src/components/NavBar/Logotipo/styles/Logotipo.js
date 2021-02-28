import styled, { css } from 'styled-components';

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

Logo.Avatar = styled.div`
  img {
    margin-right: 10px;
  }
`;

Logo.Nome = styled.p`
  font-size: 15px;
  text-transform: uppercase;
`;