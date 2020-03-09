import React from 'react';

import { Container, ConfigLabel, Divider } from './styles';
import { AuthActions } from "~/store/ducks/auth";
import { useDispatch } from "react-redux";
import { useNavigation } from "react-navigation-hooks";
import Header from "~/components/Header";
import ConfigButton from "~/components/ConfigButton";

function Config() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const onLogout = () =>  {
    dispatch(AuthActions.logout())
    navigation.navigate('Splash')
  }

  return (
    <>
      <Header label="Configurations" />
      <Container>
        <ConfigLabel>Screen config</ConfigLabel>
        <ConfigButton
          withSwitch
          icon="palette-outline"
          onPress={() => {}}
        >
          Dark theme
        </ConfigButton>
        <Divider />
        <ConfigLabel>Account</ConfigLabel>
        <ConfigButton icon="power" onPress={onLogout}>Logout</ConfigButton>
        <Divider />
      </Container>
    </>
  )
}

export default Config;
