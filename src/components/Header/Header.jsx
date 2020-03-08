import React from 'react';

import { Container, Label } from './styles';

function Header({ label, ...props }) {
  return (
    <Container {...props}>
      <Label>{label}</Label>
    </Container>
  )
}

export default Header;
