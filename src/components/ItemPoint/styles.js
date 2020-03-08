import styled from 'styled-components/native';
import Montserrat from '~/components/Montserrat';
import colors from '~/assets/colors';

export const Container = styled.View`
  height: 40px;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Image = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${colors.secondaryLight};
  margin-left: 30px;
`;

export const Info = styled.View`
  height: 100%;
  flex-direction: column;
  flex: 1;
  margin-left: 15px;
  justify-content: center;
`;

export const Text = styled(Montserrat)`
  font-size: 12px;
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
