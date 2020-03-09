import styled from 'styled-components/native';
import { SCREEN_WIDTH } from '~/utils/dimensions';
import colors from '~/assets/colors';
import Montserrat from '~/components/Montserrat';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 56px;
  width: ${SCREEN_WIDTH};
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Montserrat).attrs({
  weight: 'semibold',
})`
  font-size: 14px;
  text-transform: uppercase;
`;

export const ExtraSpace = styled.View`
  height: ${getStatusBarHeight()};
  width: ${SCREEN_WIDTH};
  background-color: ${colors.primary};
`;
