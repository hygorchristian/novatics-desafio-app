import styled from 'styled-components/native';
import colors from '~/assets/colors';
import { SCREEN_WIDTH } from '~/utils/dimensions';
import ButtonBase from '~/components/Button';
import Montserrat from '~/components/Montserrat';
import IconInput from '~/components/IconInput';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  flex: 1;
  background-color: ${colors.background};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${SCREEN_WIDTH - 50}px;
  height: ${SCREEN_WIDTH * 0.8}px;
  margin-top: 40px;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
  height: 420px;
  width: 100%;
  align-items: center;
`;

export const Welcome = styled(Montserrat).attrs({
  weight: 'bold',
})`
  width: ${SCREEN_WIDTH - 48};
  font-size: 24px;
  color: ${colors.textPrimary};
`;

export const Text = styled(Montserrat)`
  width: ${SCREEN_WIDTH - 48};
  font-size: 20px;
  color: ${colors.textSecondary};
  margin-top: 8px;
`;

export const Input = styled(IconInput).attrs({
  placeholderTextColor: colors.textSecondary,
})`
  width: ${SCREEN_WIDTH - 48};
  margin-bottom: 20px;
  margin-top: 24px;
`;

export const Button = styled(ButtonBase)`
  width: ${SCREEN_WIDTH - 48};
  height: 48px;
`;
