import React, { useState, useEffect } from 'react';

import { Container, Text, Input } from './styles';
import Button from "~/components/Button";
import { AuthActions } from "~/store/ducks/auth";
import { useDispatch, useSelector } from "react-redux";
import { showErrorMessage } from "~/utils/snackbar";
import { useNavigation } from "react-navigation-hooks";

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
      <Text>Login</Text>
      <Input placeholder="username" value={username} onChangeText={value => setUsername(value)} />
      <Button onPress={handleLogin}>Login</Button>
    </Container>
  )
}

export default Login;
