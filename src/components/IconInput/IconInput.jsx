import React from 'react';

import { Container, Input, Icon } from './styles';

function IconInput({ style, icon, ...props}) {
  return (
    <Container style={style} >
      <Icon name={icon} />
      <Input {...props} />
    </Container>
  )
}

export default IconInput;
