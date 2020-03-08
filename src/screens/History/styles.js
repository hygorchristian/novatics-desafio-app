import styled from 'styled-components/native';
import colors from '~/assets/colors';
import Montserrat from '~/components/Montserrat';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Point = styled(Montserrat)``;
