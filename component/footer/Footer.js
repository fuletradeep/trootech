import React from 'react';
import {TouchableOpacity, Text, StyleSheet, SafeAreaView, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  colors,
  Height,
  sizes,
  Width,
  calculateHeight,
  Lato,
  LatoBold,
} from '../../constant/theme';
import {translate} from '../../translation/LanguageManager';
import LoadingActivity from '../loading/LoadingActivity';

const Footer = ({title, FooterPressHandler, disable, loading}) => {
  return (
    <>
    <LinearGradient
      colors={
        disable && loading == false
          ? colors.disable_gradient
          : colors.orange_gradient
      }
      style={styles.linearGradient}>
      <TouchableOpacity
        disabled={disable}
        onPress={() => FooterPressHandler()}
        style={styles.button}>
        {loading ? (
          <LoadingActivity color={colors.white} />
        ) : (
          <Text style={styles.text}>{translate(`${title}`)}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({
  linearGradient: {
    width: Width,
    height: calculateHeight(56),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    bottom:Platform.OS === 'ios'?'3.5%':0,
    borderColor: colors.footerBorder,
    borderWidth: 1.5,
  },
  text: {
    fontFamily: LatoBold,
    fontSize: sizes.tab_img,
    color: colors.white,
    lineHeight: sizes.extra_large,
    letterSpacing: sizes.footer_letterSpace,
  },
  button: {
    width: Width,
    height: Height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
