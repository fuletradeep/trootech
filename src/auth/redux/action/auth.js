import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'native-base';
import {PostApiInstance} from '../../../../component/axious_instance/AxiousInstance';
import {BASE_URL} from '../../../../config/url';
import types from './type';

const registerProcessStart = () => ({
  type: types.REGISTRATION_PROCESS_START,
  payload: {},
});

const registrationProcessFinished = response => ({
  type: types.REGISTRATION_PROCESS_FINISHED,
  payload: response,
});

const loginProcessStart = () => ({
  type: types.LOGIN_PROCESS_START,
  payload: {},
});

const loginProcessFinished = response => ({
  type: types.LOGIN_PROCESS_FINISHED,
  payload: response,
});

export const registerHandler = async (dispatch, setCurrentScreen) => {
  dispatch(registerProcessStart());

  const data = {
    contact_number: '8989898980',
    country_code: '+91',
  };
  PostApiInstance(`${BASE_URL}generate-otp`, data)
    .then(response => {
      dispatch(registrationProcessFinished(response.data.otp));
      setCurrentScreen('Login');
    })
    .catch(error => {
      console.log('REgistration Error', error);
    });
};

export const loginHandler = async (dispatch, otp, device_type) => {
  dispatch(loginProcessStart());

  const data = {
    contact_number: '8989898980',
    country_code: '+91',
    otp: otp,
    device_type: device_type,
    device_token: '1234',
  };

  PostApiInstance(`${BASE_URL}login`, data)
    .then(response => {
        console.log('%%%%',response.status);
        if (response.status == 200) {
            dispatch(loginProcessFinished(response));
            AsyncStorage.setItem('access_token',response.access_token)
        }
        else{
            alert(response.message)
        }
    //   setCurrentScreen('Login');
    })
    .catch(error => {
      console.log('Login Error', error);
    });
};

export const getSessionToken = async () => {
  let access_token = await AsyncStorage.getItem('access_token');
  return access_token;
};

