import React, {useEffect} from 'react';
import { StatusBar } from "react-native";
import { useNavigation } from "react-navigation-hooks";

import { Container , Text, LoadingContainer, LogoContainer, Image, Loading} from './styles';
import { useSelector } from "react-redux";

import splash from '~/assets/img/splash.png'
import Logo from "~/components/Logo";

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
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#000000');
    // setTimeout(() =>{
    //   handleNavigation()
    // }, 3000)
  }, [])

  return (
    <Container>
      <LogoContainer>
        <Image source={splash} />
        <Logo size={32} />
      </LogoContainer>
      <Text>Loading leaderboards...</Text>
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    </Container>
  )
}

export default Splash;




