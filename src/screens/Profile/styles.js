import styled from 'styled-components/native';
import colors from '~/assets/colors';
import Montserrat from '~/components/Montserrat';
import { SCREEN_WIDTH } from '~/utils/dimensions';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${colors.inactive};
`;

export const UserContainerBG = styled.View`
  background-color: ${colors.paper};
`;

export const UserContainer = styled.View`
  height: 260px;
  width: ${SCREEN_WIDTH};
  background-color: ${colors.primaryLight};
  border-bottom-left-radius: 36px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled(Montserrat)`
  margin-top: 30px;
  width: ${SCREEN_WIDTH - 30};
  font-size: 24px;
  text-align: center;
`;

export const Username = styled(Montserrat)`
  margin-top: 5px;
  width: ${SCREEN_WIDTH - 30};
  font-size: 14px;
  text-align: center;
  color: ${colors.textSecondary};
`;

export const InfoContainer = styled.View`
  height: 80px;
  width: ${SCREEN_WIDTH};
  background-color: ${colors.paper};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom-left-radius: 36px;
`;

export const ItemInfo = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Montserrat)`
  font-size: 12px;
`;

export const Number = styled(Montserrat).attrs({
  weight: 'semibold',
})`
  font-size: 16px;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 60,
  },
})`
  flex: 1;
  width: ${SCREEN_WIDTH};
`;
