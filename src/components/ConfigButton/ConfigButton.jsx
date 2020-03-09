import React from 'react';

import { Container, Icon, Label, IconContainer, Switch } from './styles';

function ConfigButton({ children, icon, withSwitch,  ...props }) {
  return (
    <Container {...props}>
      <IconContainer>
        <Icon name={icon} />
      </IconContainer>
      <Label>{children}</Label>
      {withSwitch && <Switch value />}
    </Container>
  )
}

export default ConfigButton;
