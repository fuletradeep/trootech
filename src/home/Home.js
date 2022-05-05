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
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/home.jpg')}
        style={styles.imageBackground}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.drawerButtonTouchables}>
          <Image
            source={require('../../assets/drawer.png')}
            style={styles.drawerButtonImage}
          />
        </TouchableOpacity>

        <Text
          style={styles.welcomeText}>
          {translate('welcome')}
        </Text>

        <Text
          style={styles.userName}>
          Jhon Doe
        </Text>
      </ImageBackground>

      <View style={{position: 'relative', top: -calculateHeight(75)}}>
        <View style={styles.container}>
          <View style={styles.header_container}>
            <View
              style={styles.headerWhitebg}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
              />
            </View>

            <View style={{position:'absolute',top:calculateHeight(110)}}>
              <Text
                style={styles.componyName}>
                ABC Company LTD.
              </Text>
              <Text
                style={styles.componySubName}>
                The Hearest Tower
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}>
        <AcordingList />

        <AcordingList />

        <AcordingList />
      </ScrollView>

      <View
        style={styles.footer}>
        <Image
          source={require('../../assets/barcode.png')}
          style={styles.footerImg}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1, backgroundColor: colors.grey + 70,paddingBottom:calculateHeight(70)
  },
  container: {
    backgroundColor: colors.white,
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
  imageBackground:{
    height: calculateHeight(300),
    width: Width,
    paddingHorizontal: calculateWidth(10),
    paddingTop: calculateHeight(20),
  },
  drawerButtonTouchables : {width: calculateWidth(50), height: calculateHeight(50)},
  drawerButtonImage:{
    width: calculateWidth(50),
    height: calculateHeight(50),
    tintColor: colors.white,
    resizeMode:'center'
  },
  welcomeText:{
    color: colors.white,
    marginTop: calculateHeight(10),
    fontSize: sizes.header_text,
    fontFamily: LatoBold,
    fontWeight: 'bold',
  },
  userName:{
    color: colors.white,
    fontSize: sizes.loginText,
    fontFamily: LatoBold,
    fontWeight: 'bold',
    marginTop: -calculateHeight(5),
  },
  headerWhitebg:{
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
  },
  logo:{
    width: calculateWidth(100),
    height: calculateWidth(100),
    resizeMode: 'contain',
  },
  componyName:{
    fontSize: sizes.large,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  componySubName:{
    fontSize: sizes.title,
    textAlign: 'center',
    color: colors.grey,
  },
  scrollView:{
    paddingHorizontal: calculateWidth(20),
    marginTop: -calculateHeight(30),
  },
  footer:{
    backgroundColor: colors.white,
    width: Width,
    height: calculateHeight(60),
    alignItems: 'center',
    position:'absolute',
    bottom:0,
  },
  footerImg:{
    height: calculateHeight(60),
    width: calculateWidth(60),
    resizeMode: 'center',
    position:'absolute',
    top:-calculateHeight(25),
    
  }
});
