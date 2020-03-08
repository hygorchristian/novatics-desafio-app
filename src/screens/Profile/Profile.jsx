import React from 'react';
import { useSelector } from "react-redux";

import Header from "~/components/Header";
import { Container,UserContainer, Avatar, Name, Username, Label, Number, InfoContainer, ItemInfo, Scroll, UserContainerBG } from './styles';
import ItemPoint from "~/components/ItemPoint";

function Profile() {
  const user = useSelector(state => state.auth.user)

  if(!user) return null

  return (
    <Container>
      <Header label="Profile" />
      <UserContainerBG>
        <UserContainer>
          <Avatar source={{uri: user.avatar_url}} />
          <Name>{user.name}</Name>
          <Username>{user.username}</Username>
        </UserContainer>
      </UserContainerBG>

      <InfoContainer>
        <ItemInfo>
          <Number>{user.events_count}</Number>
          <Label>Events</Label>
        </ItemInfo>
        <ItemInfo>
          <Number>{(user.events_count || 1) * 8}</Number>
          <Label>Hours</Label>
        </ItemInfo>
        <ItemInfo>
          <Number>{user.points_count}</Number>
          <Label>Points</Label>
        </ItemInfo>
      </InfoContainer>
      <Scroll>
        <ItemPoint />
        <ItemPoint />
        <ItemPoint />
      </Scroll>
    </Container>
  )
}

export default Profile;
