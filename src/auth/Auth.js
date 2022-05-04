import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import {
  DefaultTheme,
  TextInput,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  colors,
  Height,
  sizes,
  Width,
  calculateHeight,
  calculateWidth,
  Lato,
  LatoLight,
  LatoBold,
  LatoSemibold,
} from '../../constant/theme';
import Regestration from './Regestration';
import Login from './Login';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {translate} from '../../translation/LanguageManager'

const Auth = ({navigation}) => {
    const [currentScreen,setCurrentScreen] = useState("Login")
    const [otp,setOtp] = useState("")
  return (
    <>
      <SafeAreaView
        style={{flex: 0, backgroundColor: colors.yellow_statusbar}}
      />
      <StatusBar backgroundColor={colors.yellow_statusbar} barStyle={'dark-content'}/>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView
          nestedScrollEnabled={true}
          enableOnAndroid={true}
          enableAutomaticScroll={true}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}>

          <PaperProvider theme={theme}>
            <LinearGradient
              colors={colors.orange_gradient}
              style={styles.imageBackground}>
              <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../../assets/logoo.png')}
              />
              {Platform.OS === 'ios' ? (
                <TouchableOpacity
                  style={styles.IosBackButtonContainer}
                  onPress={() => navigation.goBack()}>
                  <Image
                    source={require('../../assets/header_back.png')}
                    style={styles.IosBackButtonImg}
                  />
                </TouchableOpacity>
              ) : null}
            </LinearGradient>
            <View style={{position: 'relative', top: -calculateHeight(65)}}>
              <View style={styles.container}>
                <View style={styles.header_container}>
                  <TouchableOpacity
                    onPress={() => setCurrentScreen('Login')}
                    style={
                      currentScreen === 'Login'
                        ? styles.selected_touchables
                        : styles.unselected_touchables
                    }>
                    <Text
                      style={
                        currentScreen === 'Login'
                          ? styles.select_title
                          : styles.unselect_title
                      }>
                      {translate('login')}
                    </Text>
                    <LinearGradient
                      colors={
                        currentScreen === 'Login'
                          ? colors.orange_gradient
                          : colors.grey_gradient
                      }
                      style={{
                        height: currentScreen === 'Login' ? 5 : 2,
                        width: '100%',
                        position: 'relative',
                        bottom:
                          currentScreen === 'Login'
                            ? -calculateHeight(10)
                            : -calculateHeight(12),
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setCurrentScreen('Register')}
                    style={
                      currentScreen === 'Register'
                        ? styles.selected_touchables
                        : styles.unselected_touchables
                    }>
                    <Text
                      style={
                        currentScreen === 'Register'
                          ? styles.select_title
                          : styles.unselect_title
                      }>
                      {translate('register')}
                    </Text>
                    <LinearGradient
                      colors={
                        currentScreen === 'Register'
                          ? colors.orange_gradient
                          : colors.grey_gradient
                      }
                      style={{
                        height: currentScreen === 'Register' ? 5 : 2,
                        width: '100%',
                        position: 'relative',
                        bottom:
                          currentScreen === 'Register'
                            ? -calculateHeight(10)
                            : -calculateHeight(12),
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {currentScreen === 'Login' ? (
                  <Login navigation={navigation} otp={otp}/>
                ) : (
                  <Regestration
                    setCurrentScreen={setCurrentScreen}
                    navigation={navigation}
                    otp={otp}
                    setOtp={setOtp}
                  />
                )}
              </View>
              {currentScreen === 'Register' && (
                <Text
                  style={{
                    color: colors.darkOrange,
                    alignSelf: 'center',
                    fontSize: sizes.medium,
                    fontFamily: LatoBold,
                    marginTop: calculateHeight(10),
                  }}>
                  {translate('need_help')}
                </Text>
              )}
            </View>
          </PaperProvider>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({
  imageBackground: {
    height: calculateHeight(270),
    width: calculateWidth(414),
    alignItems: 'center',
  },
  logo: {
    height: calculateHeight(166.93),
    width: calculateWidth(154),
    marginTop: calculateHeight(31.01),
    // marginBottom:calculateHeight(23.06)
  },
  appName: {
    textAlign: 'center',
    fontSize: sizes.app_name_text,
    fontFamily: 'PetitFormalScript-Regular',
    color: colors.dark_gray,
    fontFamily: Lato,
    marginTop: calculateHeight(21),
    // lineHeight: calculateHeight(75),
  },
  appSubTitle: {
    textAlign: 'center',
    color: colors.dark_gray + 70,
    fontFamily: LatoLight,
    fontSize: sizes.appName_subtitle,
    // lineHeight: calculateHeight(30),
    // marginTop: 2,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginLeft: calculateWidth(15),
    marginRight: calculateWidth(18),
    margin: calculateHeight(10),
    // marginBottom: 50,
    //   alignSelf:'center'
    shadowColor: colors.black,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  header_container: {
    flexDirection: 'row',
    // height: calculateHeight(48),
    paddingVertical: calculateHeight(11),
  },
  selected_touchables: {
    width: Width / 2.17,
    // borderBottomWidth: calculateHeight(2),
    // borderBottomColor: colors.border_bottom,
    justifyContent: 'space-between',
    // paddingTop:calculateHeight(4)
  },
  unselected_touchables: {
    width: Width / 2.17,
    // justifyContent: 'center',
    flex: 1,
  },
  select_title: {
    fontFamily: LatoSemibold,
    fontSize: sizes.extra_large,
    lineHeight: sizes.home_icon,
    letterSpacing: sizes.chat_header_letterSpace,
    color: colors.orange,
    textAlign: 'center',
    textAlignVertical: 'center',
    // marginTop:calculateHeight(10)
  },
  unselect_title: {
    fontFamily: LatoSemibold,
    fontSize: sizes.extra_large,
    lineHeight: sizes.home_icon,
    letterSpacing: sizes.chat_header_letterSpace,
    color: colors.grey,
    textAlign: 'center',
  },
  IosBackButtonContainer: {
    position: 'absolute',
    height: calculateHeight(48),
    width: calculateHeight(48),
    justifyContent: 'center',
    alignItems: 'center',
    left: calculateWidth(0),
  },
  IosBackButtonImg: {
    height: calculateHeight(20),
    width: calculateHeight(11.25),
    tintColor: colors.white,
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.orange,
    text: colors.dark_gray,
    error: colors.error,
  },
};
