import styled from 'styled-components/native';
import Montserrat from '~/components/Montserrat';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Stars = styled(Montserrat).attrs({
  weight: 'light',
})`
  font-size: ${({ size }) => size};
  text-transform: uppercase;
  letter-spacing: 1.11px;
`;

export const Deck = styled(Montserrat).attrs({
  weight: 'bold',
})`
  font-size: ${({ size }) => size};
  text-transform: uppercase;
  letter-spacing: 1.11px;
`;
