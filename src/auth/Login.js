import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Platform
} from 'react-native';
import {
  calculateHeight,
  calculateWidth,
  colors,
  Height,
  sizes,
  Width,
} from '../../constant/theme';
import LinearGradient from 'react-native-linear-gradient';
import {
  AuthStackContainer,
  ErrorTextStyle,
  FaceBookButtonContainer,
  FacebookButtonStyle,
  FacebookButtonTextStyle,
  FaceBookImage,
  ForgotPasswordText,
  LoginButton,
  LoginButtonSapratorStyle,
  LoginButtonSapratorTextStyle,
  LoginButtonText,
  passwordSuggestionStyle,
  TextInputStyle,
} from './AuthStyle';
import {translate} from '../../translation/LanguageManager';
import TextInput from '../../component/textinput/TextInput';
import GradientButton from '../../component/gradient_button/GradientButton';
import {useDispatch, useSelector} from 'react-redux';
import { loginHandler } from './redux/action/auth';

const Login = ({navigation}) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const otp = auth.otp

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  // const [PasswordErrorMessage, setPasswordErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(true);
  const [ShowCancel, setShowCancel] = useState(false);
  const loginButtonHandler = async () => {
    if (otp.length == 0) {
      Alert.alert('Login Error','Please Enter Otp')
    }
    else{
      loginHandler(dispatch,otp,Platform.OS)
    }
  };

  return (
    <View style={AuthStackContainer}>
      <View>
        <TextInput
          focusable={isEmailInvalid}
          label={translate('otp')}
          value={otp}
          setValue={setEmail}
          style={{
            marginTop: isEmailInvalid
              ? calculateHeight(19)
              : calculateHeight(28),
          }}
          autoFocus={true}
          rightIcon={email.length > 0 ? true : false}
          iconName={'close'}
          iconColor={isEmailInvalid ? colors.error : colors.dark_gray}
          onIconPress={() => {
            setEmail('');
            setIsEmailInvalid(false);
          }}
          onChange={() => {
            setIsEmailInvalid(false);
          }}
          errorMsg={ErrorMessage}
        />
      </View>

      <GradientButton
        loading={auth.loading}
        btn_name={translate('verify_otp')}
        buttonHandler={loginButtonHandler}
        btn_style={LoginButton}
        text_style={LoginButtonText}
      />
     
    </View>
  );
};

export default Login;
