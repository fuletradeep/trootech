import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  calculateHeight,
  calculateWidth,
  colors,
  Lato,
  LatoBold,
  LatoLight,
  LatoSemibold,
  sizes,
  Width,
} from '../../constant/theme';
import {translate} from '../../translation/LanguageManager';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AcordingList from '../../component/acording_list/AcordingList';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.grey + 70,paddingBottom:calculateHeight(70)}}>
      <ImageBackground
        source={require('../../assets/home.jpg')}
        style={{
          height: calculateHeight(300),
          width: Width,
          paddingHorizontal: calculateWidth(10),
          paddingTop: calculateHeight(20),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={{width: calculateWidth(50), height: calculateHeight(50)}}>
          <Image
            source={require('../../assets/drawer.png')}
            style={{
              width: calculateWidth(50),
              height: calculateHeight(50),
              tintColor: colors.white,
              resizeMode:'center'
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: colors.white,
            marginTop: calculateHeight(10),
            fontSize: sizes.header_text,
            fontFamily: LatoBold,
            fontWeight: 'bold',
          }}>
          {translate('welcome')}
        </Text>

        <Text
          style={{
            color: colors.white,
            fontSize: sizes.loginText,
            fontFamily: LatoBold,
            fontWeight: 'bold',
            marginTop: -calculateHeight(5),
          }}>
          Jhon Doe
        </Text>
      </ImageBackground>

      <View style={{position: 'relative', top: -calculateHeight(75)}}>
        <View style={styles.container}>
          <View style={styles.header_container}>
            <View
              style={{
                width: calculateWidth(150),
                height: calculateWidth(150),
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: calculateHeight(150),
                position: 'absolute',
                top: -calculateHeight(70),
                shadowColor: colors.black,
                shadowOffset: {height: 8, width: 0},
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 10,
              }}>
              <Image
                source={require('../../assets/logo.png')}
                style={{
                  width: calculateWidth(100),
                  height: calculateWidth(100),
                  resizeMode: 'contain',
                }}
              />
            </View>

            <View style={{position:'absolute',top:calculateHeight(110)}}>
              <Text
                style={{
                  fontSize: sizes.large,
                  color: colors.black,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                ABC Company LTD.
              </Text>
              <Text
                style={{
                  fontSize: sizes.title,
                  textAlign: 'center',
                  color: colors.grey,
                }}>
                The Hearest Tower
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: calculateWidth(20),
          marginTop: -calculateHeight(30),
        }}>
        <AcordingList />

        <AcordingList />

        <AcordingList />
      </ScrollView>

      <View
        style={{
          backgroundColor: colors.white,
          width: Width,
          height: calculateHeight(60),
          alignItems: 'center',
          position:'absolute',
          bottom:0,
        }}>
        <Image
          source={require('../../assets/barcode.png')}
          style={{
            height: calculateHeight(60),
            width: calculateWidth(60),
            resizeMode: 'center',
            position:'absolute',
            top:-calculateHeight(25),
            
          }}
        />
      </View>
    </View>
  );
};

export default Home;

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
    // marginBottom: 50,
    //   alignSelf:'center'
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header_container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: calculateHeight(180),
    position: 'relative',
    justifyContent: 'flex-end',
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
