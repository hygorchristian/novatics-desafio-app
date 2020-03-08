import { StyleSheet } from 'react-native';
import colors from '~/assets/colors';

const styles = StyleSheet.create({
  rounded: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    bottom: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
