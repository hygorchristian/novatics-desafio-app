import styled from 'styled-components/native';
import Montserrat from '~/components/Montserrat';
import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.View`
  flex-direction: row;
`;

export const Text = styled(Montserrat)`
  margin-right: 20px;
`;
