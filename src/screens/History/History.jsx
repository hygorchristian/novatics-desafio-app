import React, { useState, useEffect } from 'react';

import Api from '~/services/Api';
import { Container, Point } from './styles';
import { useSelector } from "react-redux";
import { NavigationEvents } from "react-navigation";

function History() {
  const [points, setPoints] = useState([]);
  const user = useSelector(state => state.auth.user)

  const fetchPoints = async () => {
    const response = await Api.getPoints(user.id).catch(err => console.log(err))
    if(response){
      const _points = response.data.points;
      setPoints(_points)
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
        {points.map(point => {
          return (
            <Point>{point.title}</Point>
          )
        })}
      </Container>
    </>
  )
}

export default History;
