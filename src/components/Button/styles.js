import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import colors from '~/assets/colors';

export const Container = styled(Ripple).attrs({
  rippleColor: colors.textPrimary,
})`
  height: 42px;
  padding-horizontal: 24px;
  border-radius: 4px;
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${colors.textPrimary};
`;
