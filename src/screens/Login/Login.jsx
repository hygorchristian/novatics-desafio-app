import React, { useState, useEffect } from 'react';

import { Container, Text, Input, Image, Content, Button, Welcome } from './styles';
import { AuthActions } from "~/store/ducks/auth";
import { useDispatch, useSelector } from "react-redux";
import { showErrorMessage } from "~/utils/snackbar";
import { useNavigation } from "react-navigation-hooks";

import bg from '~/assets/img/bg.png'

function Login() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [username, setUsername] = useState(null)
  const { isAuth, error } = useSelector(state => state.auth)

  const handleLogin = () => {
    if(!username || username.length === 0){
      showErrorMessage('You must provide a username')
    }else{
      dispatch(AuthActions.loadAuthRequest(username))
    }
  }

  useEffect(() => {
    if(error){
      showErrorMessage(error)
    }
  }, [error])

  if(isAuth){
    navigation.navigate('HomeBottom')
  }

  return (
    <Container>
      <Image source={bg} />
      <Content>
        <Welcome>Welcome,</Welcome>
        <Text>Login with your github username</Text>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={value => setUsername(value)}
          icon="github-face"
        />
        <Button onPress={handleLogin}>Login</Button>
      </Content>
    </Container>
  )
}

export default Login;
