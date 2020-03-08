import styled from 'styled-components/native';
import colors from '~/assets/colors';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  height: 48px;
  background-color: rgba(255, 255, 255, 0.2);
  color: ${colors.textPrimary};
  padding-horizontal: 16px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-top: 4px;
  margin-left: 10px;
  color: ${colors.textPrimary};
`;

export const Icon = styled(MDIcon).attrs({
  size: 24,
  color: colors.inactive,
})``;
