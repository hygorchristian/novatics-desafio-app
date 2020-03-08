import React, { useEffect, useState } from 'react';

import Api from '~/services/Api';

import { Container, Text, UserContainer } from './styles';

function Leaderboards() {
  const [data, setData] = useState([])

  const fetchLeaderboards = async () => {
    const response = await Api.getLeaderboards()
    if(response){
      setData(response.data)
    }
  }

  useEffect(() =>  {
    fetchLeaderboards()
  }, [])

  return (
    <Container>
      {data.map((user, index) => (
        <UserContainer>
          <Text>#{index + 1}</Text>
          <Text>{user.name}</Text>
        </UserContainer>
      ))}
    </Container>
  )
}

export default Leaderboards;
