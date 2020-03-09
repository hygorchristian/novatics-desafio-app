import React, { useEffect, useState } from 'react';

import Api from '~/services/Api';

import { Container, Text, UserContainer, Ornament, Title, List } from './styles';
import Header from "~/components/Header";
import ItemLeaderboard from "~/components/ItemLeaderboard";
import { NavigationEvents } from "react-navigation";

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
    <>
      <NavigationEvents
        onWillFocus={fetchLeaderboards}
      />
      <Container>
        <Header label="Leaderboards" />
        <Ornament />
        <Title>All users score</Title>
        <List
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <ItemLeaderboard index={index + 1} item={item} />}
        />
      </Container>
    </>
  )
}

export default Leaderboards;
