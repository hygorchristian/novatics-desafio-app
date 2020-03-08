import styled from 'styled-components/native';
import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;

export const Text = styled.Text`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${colors.textPrimary};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.textSecondary,
})`
  width: 200px;
  height: 48px;
  background-color: ${colors.input};
  color: ${colors.textPrimary};
  margin-bottom: 20px;
  padding-horizontal: 16px;
`;
