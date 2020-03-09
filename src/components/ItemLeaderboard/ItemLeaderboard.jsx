import React from 'react';

import { Container, StarContainer, Icon, Info, Points, Value, Text, Number, Name, Avatar } from './styles';

function ItemLeaderboard({ item, index, ...props }) {

  console.log({item})

  return (
    <Container {...props}>
      <StarContainer>
        <Icon index={index} />
      </StarContainer>
      <Number>{index}</Number>
      <Avatar source={{ uri: item.avatar_url }} />
      <Info>
        <Name>{item.name}</Name>
      </Info>
      <Points>
        <Value>{item.total_points}</Value>
      </Points>
    </Container>
  )
}

export default ItemLeaderboard
