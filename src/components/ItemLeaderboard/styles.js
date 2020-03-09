import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Montserrat from '~/components/Montserrat';
import colors from '~/assets/colors';

const getColor = index => {
  if (index === 1) {
    return colors.gold;
  }
  if (index === 2) {
    return colors.silver;
  }
  if (index === 3) {
    return colors.bronze;
  }

  return 'transparent';
};

export const Container = styled.View`
  height: 40px;
  flex-direction: row;
  margin-bottom: 30px;
  align-items: center;
`;

export const StarContainer = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-left: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MDIcon).attrs({
  size: 28,
  name: 'trophy',
})`
  color: ${({ index }) => getColor(index)};
`;

export const Info = styled.View`
  height: 100%;
  flex-direction: column;
  flex: 1;
  margin-left: 12px;
  justify-content: center;
`;

export const Text = styled(Montserrat)`
  font-size: 13px;
`;

export const Points = styled.View`
  height: 40px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${colors.primaryLight};
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

export const Number = styled(Montserrat).attrs({
  weight: 'bold',
})`
  margin-horizontal: 12px;
  font-size: 16px;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const Name = styled(Montserrat)`
  font-size: 16px;
`;
