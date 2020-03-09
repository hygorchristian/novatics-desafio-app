import styled from 'styled-components/native';
import colors from '~/assets/colors';
import Montserrat from '~/components/Montserrat';
import { color } from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding-top: 30px;
`;

export const ConfigLabel = styled(Montserrat).attrs({
  weight: 'semibold',
})`
  font-size: 14px;
  color: ${colors.primaryLight};
  margin-left: 30px;
  margin-vertical: 15px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.separator};
`;
