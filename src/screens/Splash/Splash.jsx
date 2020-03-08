import React, {useEffect} from 'react';
import { useNavigation } from "react-navigation-hooks";

import { Container } from './styles';

function Splash() {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() =>{
      navigation.navigate('Login')
    }, 1000)

  }, [])

  return <Container />
}

export default Splash;
