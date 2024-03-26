import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },

  text: {
    color: colors.black,
    lineHeight: 18,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },

  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commentText: {
    color: colors.black,
    lineHeight: 18,
  },

  avatar: {
    width: 40,
    aspectRatio: 1,
    marginRight: 5,
    borderRadius: 25,
  },

  middleColumn: {
    flex: 1,
  },

  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  footerText: {
    marginRight: 10,
  },
});

export default styles;
