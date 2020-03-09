import React, { useState, useEffect } from 'react';

import { Container, Text, Input, Content, Image, Welcome, Button} from './styles';
import { showErrorMessage, showSuccessMessage } from "~/utils/snackbar";
import { useDispatch, useSelector } from "react-redux";
import { CodeActions } from "~/store/ducks/code";

import bg from '~/assets/img/qrcode.png'

function Code() {
  const dispatch = useDispatch()

  const [code, setCode] = useState(null)
  const { message, error, loading } = useSelector(state => state.code)

  const validateCode = () => {
    if(!code || code.length === 0){
      showErrorMessage('You must provide a code')
    }else{
      dispatch(CodeActions.codeLoadRequest(code))
    }
  }

  useEffect(() => {
    message && showSuccessMessage(message)
    dispatch(CodeActions.codeReset())
  }, [message])

  useEffect(() => {
    error && showErrorMessage(error)
    dispatch(CodeActions.codeReset())
  }, [error])

  return (
    <Container>
      <Image source={bg} />
      <Content>
        <Welcome>QR Verification</Welcome>
        <Text>Scan the code or insert the code in the input below.</Text>
        <Input
          placeholder="Your code..."
          value={code}
          onChangeText={value => setCode(value)}
          icon="qrcode"
          autoCapitalize="none"
        />
        <Button onPress={validateCode}>CHECK IN</Button>
      </Content>
    </Container>
  )


}

export default Code;
