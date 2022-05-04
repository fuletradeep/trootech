import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import {
  calculateHeight,
  calculateWidth,
  colors,
  Height,
  sizes,
  Width,
} from '../../constant/theme';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {translate} from '../../translation/LanguageManager';
import ImagePickerComponent from '../../component/image_picker/ImagePickerComponent';
import RBSheet from 'react-native-raw-bottom-sheet';
import TextInput from '../../component/textinput/TextInput';
import CancelIcon from '../../component/cancel_icon/CancelIcon';
import {useFocusEffect} from '@react-navigation/core';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {editProfile, localLanguage} from '../../config/string';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({navigation}) => {
  

  const refRBSheet = useRef();

  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [firstNameErrorFlag, setFirstNameErrorFlag] = useState(false);
  const [lastNameErrorFlag, setlastNameErrorFlag] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [validationError, setvalidationError] = useState('');

  

//   useFocusEffect(
//     React.useCallback(() => {
//       return () => {
//         getPreviousUserImage(dispatch);
//       };
//     }, []),
//   );
  const regex = /[a-zA-Z]$/g;

//   const FooterPressHandler = () => {
//     const first_Name = firstName;
//     const last_Name = lastName;

//     if (firstName.length == 0 || lastName.length == 0) {
//       firstName.length == 0
//         ? (setFirstNameErrorFlag(true), setlastNameErrorFlag(false))
//         : (setlastNameErrorFlag(true), setFirstNameErrorFlag(false));
//       setvalidationError(translate('not_empty'));
//     } else if (!first_Name.match(regex)) {
//       setFirstNameErrorFlag(true), setlastNameErrorFlag(false);
//       setvalidationError(
//         translate('validName') + ' ' + translate('first_name'),
//       );
//     } else if (!last_Name.match(regex)) {
//       setlastNameErrorFlag(true), setFirstNameErrorFlag(false);
//       setvalidationError(translate('validName') + ' ' + translate('last_name'));
//     } else {
//       setFirstNameErrorFlag(false);
//       setlastNameErrorFlag(false);
//       updateProfile(
//         dispatch,
//         email,
//         gender,
//         firstName,
//         lastName,
//         profile.img_uri,
//         navigation,
//         profile.user_profile.user_display_language
//       ),
//         navigation.goBack();
//     }
//   };

  const CloseRBSheet = () => {
    refRBSheet.current.close();
  };

  const iconContainerStyle = {
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: '5%',
    top: 25,
  };

  const iconStyle_firstName = {
    height: Width / 20,
    width: Width / 20,
    tintColor: firstNameErrorFlag ? colors.error : colors.grey,
  };

  const iconStyle_lastName = {
    height: Width / 20,
    width: Width / 20,
    tintColor: lastNameErrorFlag ? colors.error : colors.grey,
  };

  const iconStyle_email = {
    height: Width / 20,
    width: Width / 20,
    tintColor: colors.grey,
  };

//   const checkForChanges = () => {
//     if (
//       (profile.user_profile.title == gender &&
//         profile.user_profile.first_name == firstName &&
//         profile.user_profile.last_name == lastName &&
//         avatar == profile.user_profile.avatar) ||
//       email.length == 0
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   };

  return (
    <PaperProvider theme={theme}>
      <View style={{flex: 1, backgroundColor: colors.yellow_statusbar}}>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            container: {
              height: calculateHeight(350),
            },
            wrapper: {
              backgroundColor: colors.light_gray + 70,
            },
            draggableIcon: {
              backgroundColor: colors.orange,
            },
          }}>
          <ImagePickerComponent
            CloseRBSheet={CloseRBSheet}
            postImagePicker={false}
            avatar={avatar}
            setAvatar={setAvatar}
          />
        </RBSheet>

        <Header title={editProfile} navigation={navigation} />
        <KeyboardAwareScrollView
          style={{
            backgroundColor: colors.main_back,
            flex: 1,
            // marginBottom: 50,
          }}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps={'always'}>
          <View
            style={{
              // height: Height / 1.66,
              backgroundColor: colors.white,
              margin: calculateHeight(16),
              paddingBottom: 20,
              marginVertical: calculateHeight(24),
            }}>
            <View style={{marginVertical: calculateHeight(40)}}>
              {avatar == '' || avatar == undefined ? (
                <Image
                  source={require('../../assets/dummy_user.png')}
                  style={styles.profileImage}
                  resizeMode={'cover'}
                />
              ) : (
                <Image
                  source={{
                    uri: avatar,
                  }}
                  style={styles.profileImage}
                  resizeMode={'cover'}
                />
              )}
              <TouchableOpacity
                onPress={() => {
                  refRBSheet.current.open();
                }}
                activeOpacity={0.8}
                style={styles.camera}>
                <Image
                  source={require('../../assets/camera.jpg')}
                  style={{
                    height: calculateHeight(12.17),
                    width: calculateWidth(14.11),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: calculateHeight(16)}}>
              <View
                style={{
                  // marginHorizontal: '1%',
                  position: 'relative',
                  justifyContent: 'center',
                }}>
                <TextInput
                  disabled={true}
                  label={translate('email')}
                  value={email}
                  setValue={setEmail}
                />
              </View>
            
              <View
                style={{
                  // marginHorizontal: '1%',
                  marginTop: calculateHeight(16),
                  position: 'relative',
                  justifyContent: 'center',
                }}>
                <TextInput
                  label={translate('first_name')}
                  mode={'outlined'}
                  value={firstName}
                  setValue={setFirstName}
                  focusable={firstNameErrorFlag}
                  errorMsg={validationError}
                  onChange={() => {
                    setFirstNameErrorFlag(false);
                  }}
                  rightIcon={firstName.length > 0 ? true : false}
                  iconName={'close'}
                  iconColor={
                    firstNameErrorFlag ? colors.error : colors.dark_gray
                  }
                  onIconPress={() => {
                    setFirstName('');
                    setFirstNameErrorFlag(false);
                  }}
                />
              </View>
              <View
                style={{
                  // marginHorizontal: '1%',
                  marginTop: calculateHeight(16),
                  position: 'relative',
                  justifyContent: 'center',
                }}>
                <TextInput
                  label={translate('last_name')}
                  value={lastName}
                  setValue={setLastName}
                  focusable={lastNameErrorFlag}
                  errorMsg={validationError}
                  onChange={() => {
                    setlastNameErrorFlag(false);
                  }}
                  rightIcon={lastName.length > 0 ? true : false}
                  iconName={'close'}
                  iconColor={
                    lastNameErrorFlag ? colors.error : colors.dark_gray
                  }
                  onIconPress={() => {
                    setLastName('');
                    setlastNameErrorFlag(false);
                  }}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <Footer
          title="apply_change"
          // FooterPressHandler={FooterPressHandler}
          // disable={checkForChanges()}
          // loading={profile.loading}
        />
        <SafeAreaView style={{flex: 0, backgroundColor: colors.border}} />
      </View>
    </PaperProvider>
  );
};

export default EditProfile;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.orange,
    text: colors.dark_gray,
  },
};

const styles = StyleSheet.create({
  camera: {
    zIndex: 1,
    position: 'absolute',
    left: calculateWidth(210),
    top: calculateHeight(74),
    backgroundColor: colors.map_strock,
    borderRadius: 22,
    height: calculateHeight(25.72),
    width: calculateHeight(25.72),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: calculateHeight(104),
    width: calculateHeight(104),
    borderRadius: calculateHeight(500),
    borderColor: colors.orange,
    borderWidth: 2,
    alignSelf: 'center',
    position: 'relative',
  },
});
