import styled from 'styled-components';
import NavBar from '../src/components/NavBar';

const Body = styled.body`
  background-color: #000;
`

export default function Home() {
  return (
    <Body>

      <NavBar />

    </Body>
  )
}
