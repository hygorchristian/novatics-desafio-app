import React from 'react';

import { Container, Text, Icon, StarContainer, Date, Info, Points, Value } from './styles';

function ItemPoint() {
  return (
    <Container>
      <StarContainer>
        <Icon />
      </StarContainer>
      <Info>
        <Text>You got 10 points</Text>
        <Date>Yesterday at 14:46</Date>
      </Info>
      <Points>
        <Value>+10 pts</Value>
      </Points>
    </Container>
  )
}

export default ItemPoint;
