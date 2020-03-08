import styled from 'styled-components/native';
import colors from '~/assets/colors';
import Montserrat from '~/components/Montserrat';
import { SCREEN_WIDTH } from '~/utils/dimensions';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.FlatList`
  flex: 1;
  width: ${SCREEN_WIDTH};
`;

export const Title = styled(Montserrat)`
  margin: 30px;
  font-size: 24px;
`;

export const Point = styled(Montserrat)``;
