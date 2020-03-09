import React from 'react';
import { Platform } from 'react-native'

import { Container, Label, ExtraSpace } from './styles';

function Header({ label, ...props }) {
  return (
    <>
      {Platform.OS === 'ios' && <ExtraSpace />}
      <Container {...props}>
        <Label>{label}</Label>
      </Container>
    </>
  )
}

export default Header;
