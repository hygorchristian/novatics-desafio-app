import React from 'react';
import { formatDistance } from 'date-fns';
import parse from 'postgres-date'

import { Container, Text, StarContainer, Icon, DateText, Info, Points, Value } from './styles';

function ItemHistory({ item, ...props }) {

  const parsed = parse(item.pivot.created_at)
  const date = formatDistance(parsed, new Date())


  return (
    <Container {...props}>
      <StarContainer>
        <Icon />
      </StarContainer>
      <Info>
        <Text>{item.title}</Text>
        <DateText>{date}</DateText>
      </Info>
      <Points>
        <Value>+10 pts</Value>
      </Points>
    </Container>
  )
}

export default ItemHistory
