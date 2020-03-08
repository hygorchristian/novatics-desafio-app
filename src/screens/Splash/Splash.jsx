import React, {useEffect} from 'react';
import { useNavigation } from "react-navigation-hooks";

import { Container } from './styles';
import { useSelector } from "react-redux";

function Splash() {
  const navigation = useNavigation()
  const user = useSelector(state => state.auth.user)

  const handleNavigation = () => {
    if(user){
      navigation.navigate('HomeBottom')
    }else{
      navigation.navigate('Login')
    }
  }

  useEffect(() => {
    setTimeout(() =>{
      handleNavigation()
    }, 1000)

  }, [])

  return <Container />
}

export default Splash;
