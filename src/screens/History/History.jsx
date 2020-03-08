import React, { useState, useEffect } from 'react';
import lodash from 'lodash';

import Api from '~/services/Api';
import { Container, Point, Content, Title } from './styles';
import { useSelector } from "react-redux";
import { NavigationEvents } from "react-navigation";
import Header from "~/components/Header";
import ItemHistory from "~/components/ItemHistory";

function History() {
  const [points, setPoints] = useState([]);
  const user = useSelector(state => state.auth.user)

  const fetchPoints = async () => {
    const response = await Api.getPoints(user.id).catch(err => console.log(err))
    if(response){
      const _points = response.data.points;
      const ordered = lodash.orderBy(_points, ['pivot.created_at'], ['desc'])
      setPoints(ordered)
    }
  }

  useEffect(() => {
    fetchPoints()
  }, [])


  return (
    <>
      <NavigationEvents
        onWillFocus={fetchPoints}
      />

      <Container>
        <Header label="History" />
        <Title>All Notifications</Title>
        <Content
          data={points}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemHistory item={item} />}
        />
      </Container>
    </>
  )
}

export default History;
