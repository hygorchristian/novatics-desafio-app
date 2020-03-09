import styled from 'styled-components/native';
import Montserrat from '~/components/Montserrat';
import colors from '~/assets/colors';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colors.background};
  flex-direction: column;
`;

export const Ornament = styled.View`
  height: 20px;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${colors.primary};
`;

export const UserContainer = styled.View`
  flex-direction: row;
`;

export const Text = styled(Montserrat)`
  margin-right: 20px;
`;

export const Title = styled(Montserrat)`
  margin: 30px;
  font-size: 24px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 60,
  },
})`
  flex: 1;
  width: 100%;
`;
