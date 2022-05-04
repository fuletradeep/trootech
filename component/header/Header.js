import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  calculateHeight,
  calculateWidth,
  colors,
  Lato,
  LatoSemibold,
  sizes,
  Width,
} from '../../constant/theme';
import {translate} from '../../translation/LanguageManager';

export const Header = props => {
  let {
    title,
    chatName,
    isMailImag,
    navigation,
    image,
    showAvatar,
    showMenuIcon,
    goToHome,
    DiscardChanges,
    dispatch,
  } = props;

  const nav = () => {
    navigation.goBack();
  };
  return (
    <>
      <SafeAreaView
        style={{flex: 0, backgroundColor: colors.yellow_statusbar}}
      />
      <StatusBar
        backgroundColor={colors.yellow_statusbar}
        barStyle={'dark-content'}
      />
      <LinearGradient
        colors={colors.orange_gradient}
        style={{
          height: calculateHeight(48),
          width: Width,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.backIcon}
           >
            <Image
              source={require('../../assets/header_back.png')}
              style={{
                height: calculateHeight(20),
                width: calculateHeight(11.25),
                tintColor:colors.white
              }}
            />
          </TouchableOpacity>

          <View style={{marginLeft: calculateWidth(24), flexDirection: 'row'}}>
            {title && (
              <Text style={styles.headerTitle}>{translate(`${title}`)}</Text>
            )}
          </View>
         
        </View>
      </LinearGradient>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: sizes.loginText,
    lineHeight: sizes.extra_large,
    color: colors.white,

    textAlign: 'center',
    letterSpacing: sizes.chat_header_letterSpace,
    fontFamily: LatoSemibold,
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  avatar: {
    height: calculateHeight(38),
    width: calculateHeight(38),
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: calculateWidth(10),
    // position: 'absolute',
  },
  noImageAlternative: {
    backgroundColor: colors.light_gray_text,
    height: calculateHeight(38),
    width: calculateHeight(38),
    borderRadius: 60,
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MenuIcon: {
    position: 'absolute',
    right: calculateWidth(10),
    width: calculateWidth(30),
    height: calculateHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    // marginLeft: calculateWidth(22.37),
    height: calculateHeight(48),
    width: calculateHeight(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
