import React from 'react';

import { Container, Deck, Stars } from './styles';

function Logo({ size, ...props }) {
  return (
    <Container {...props}>
      <Stars size={size}>Stars</Stars>
      <Deck size={size}>Deck</Deck>
    </Container>
  )
}

export default Logo;
