import styled from 'styled-components/native';
import Montserrat from '~/components/Montserrat';
import colors from '~/assets/colors';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  height: 40px;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const StarContainer = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${colors.primary};
  margin-left: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MDIcon).attrs({
  size: 24,
  name: 'star',
})`
  color: ${colors.textPrimary};
`;

export const Info = styled.View`
  height: 100%;
  flex-direction: column;
  flex: 1;
  margin-left: 15px;
  justify-content: center;
`;

export const Text = styled(Montserrat)`
  font-size: 13px;
`;

export const Date = styled(Montserrat)`
  font-size: 12px;
  color: ${colors.textSecondary};
`;

export const Points = styled.View`
  height: 40px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${colors.secondary};
  width: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Value = styled(Montserrat).attrs({
  weight: 'bold',
})`
  font-size: 14px;
  letter-spacing: 1.11px;
`;
