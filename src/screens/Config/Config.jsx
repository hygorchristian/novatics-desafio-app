import React from 'react';

import { Container } from './styles';
import Button from "~/components/Button";
import { AuthActions } from "~/store/ducks/auth";
import { useDispatch } from "react-redux";
import { useNavigation } from "react-navigation-hooks";

function Config() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const onLogout = () =>  {
    dispatch(AuthActions.logout())
    navigation.navigate('Splash')
  }

  return (
    <Container>
      <Button onPress={onLogout}>Logout</Button>
    </Container>
  )
}

export default Config;
