import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {
  calculateHeight,
  calculateWidth,
  colors,
  Height,
  Lato,
  sizes,
  Width,
} from '../../constant/theme';
import {
  AuthStackContainer,
  LoginButton,
  LoginButtonText,
} from './AuthStyle';
import {facebookLoginHandler, registerHandler} from './redux/action/auth';
import GradientButton from '../../component/gradient_button/GradientButton';
import {translate} from '../../translation/LanguageManager';
import TextInput from '../../component/textinput/TextInput';
import PhoneInput from "react-native-phone-number-input";
import { PostApiInstance } from '../../component/axious_instance/AxiousInstance';
import { BASE_URL } from '../../config/url';
import { logger } from '../../config/logger';
import {useDispatch, useSelector} from 'react-redux';

const Regestration = ({setCurrentScreen, navigation,otp,setOtp}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isphoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

    const RegestrationButtonHandler = async () => {
      if (value.length == 0) {
        Alert.alert('Error','Please Enter Mobile Number First')
      }
      else if (value.length < 10) {
        Alert.alert('Error','Please Enter valid Mobile Number')
      }
      else{
        registerHandler(dispatch,setCurrentScreen)
      }
    };
  const phoneInput = useRef(null);

  return (
    <View style={AuthStackContainer}>
      <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            autoFocus
            containerStyle={{marginTop:calculateHeight(20),backgroundColor:colors.grey+90,borderWidth:2,borderColor:colors.orange,width:calculateWidth(344),height:calculateHeight(57)}}
            textContainerStyle={{paddingVertical:-calculateHeight(20)}}
          />
    

      <GradientButton
        btn_name={translate('get_otp')}
        // loading={auth.loading}
        buttonHandler={RegestrationButtonHandler}
        btn_style={[LoginButton, {marginTop: calculateHeight(20)}]}
        text_style={LoginButtonText}
      />
    </View>
  );
};

export default Regestration;

const styles = StyleSheet.create({
  CheckBox: {
    height: calculateHeight(20),
    width: calculateHeight(20),
    borderWidth: 2,
    // marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckBoxText: {
    fontSize: sizes.medium,
    color: colors.dark_gray,
    fontFamily: Lato,
    marginLeft: calculateWidth(8),
  },
});
