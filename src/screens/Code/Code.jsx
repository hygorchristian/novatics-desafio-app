import React, { useState, useEffect } from 'react';

import { Container, Text, Input } from './styles';
import Button from "~/components/Button";
import { showErrorMessage, showSuccessMessage } from "~/utils/snackbar";
import { useDispatch, useSelector } from "react-redux";
import { CodeActions } from "~/store/ducks/code";

function Code() {
  const dispatch = useDispatch()

  const [code, setCode] = useState('PARTIC_EVENTO_BSB_2020_2')
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
      <Text>Code</Text>
      <Input
        placeholder="Type your code here"
        value={code}
        onChangeText={value => setCode(value)}
      />
      <Button onPress={validateCode}>Register</Button>
      {loading && <Text>Loading...</Text>}
    </Container>
  )
}

export default Code;
