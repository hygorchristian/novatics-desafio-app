import Snackbar from 'react-native-snackbar';
import colors from '~/assets/colors';

export const showSuccessMessage = message => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: colors.primary,
    textColor: colors.textPrimary,
  });
};

export const showErrorMessage = message => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: colors.error,
    textColor: colors.textPrimary,
  });
};
