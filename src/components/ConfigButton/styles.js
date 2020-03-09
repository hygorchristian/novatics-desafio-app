import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import { Switch as PaperSwitch } from 'react-native-paper';
import Montserrat from '~/components/Montserrat';
import colors from '~/assets/colors';

export const Container = styled(Ripple).attrs({
  rippleColor: colors.textPrimary,
})`
  height: 64px;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
`;

export const IconContainer = styled.View`
  height: 64px;
  width: 64px;
  justify-content: center;
`;

export const Icon = styled(MDIcon).attrs({
  size: 24,
  color: colors.textPrimary,
})``;

export const Label = styled(Montserrat).attrs({
  weight: 'semibold',
})`
  font-size: 16px;
  flex: 1;
`;

export const Switch = styled(PaperSwitch)`
  margin-right: 15px;
`;
