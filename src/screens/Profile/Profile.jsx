import React from 'react';

import { Container, Name, Username } from './styles';
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector(state => state.auth.user)

  if(!user) return null

  return (
    <Container>
      <Name>{user.name}</Name>
      <Username>{user.username}</Username>
    </Container>
  )
}

export default Profile;
