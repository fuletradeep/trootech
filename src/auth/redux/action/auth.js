import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'native-base';
import {PostApiInstance} from '../../../../component/axious_instance/AxiousInstance';
import firebase from '../../../../config/firebase';
import firebaseApp from '../../../../config/firebase';
import {BASE_URL} from '../../../../config/url';
import types from './type';
import database from '@react-native-firebase/database';
import { showBannerAlert } from '../../../custom_alert/redux/action/BannerAlert';
import { BannerSuccess } from '../../../../config/string';

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

      const object = {
        title: null,
        message: 'otp send successfully',
        display: true,
        modalType: BannerSuccess,
        priority: 'low',
        accept: null,
        acceptFunction: null,
        duration: 3000,
      };
      showBannerAlert(dispatch, object);
    })
    .catch(error => {
      const object = {
        title: null,
        message: JSON.stringify(errors.message),
        display: true,
        modalType: 'BannerError',
        priority: 'low',
        accept: null,
        acceptFunction: null,
        duration: 3000,
      };
      showBannerAlert(dispatch, object);
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
            const firebasedata = response.user_details
            database().ref('Users/').set({
             firebasedata
          }).then((data)=>{
              //success callback
              const object = {
                title: null,
                message: 'Welcome To TrooTech',
                display: true,
                modalType: BannerSuccess,
                priority: 'low',
                accept: null,
                acceptFunction: null,
                duration: 3000,
              };
              showBannerAlert(dispatch, object);
          }).catch((error)=>{
              //error callback
              const object = {
                title: null,
                message:error,
                display: true,
                modalType: 'BannerError',
                priority: 'low',
                accept: null,
                acceptFunction: null,
                duration: 3000,
              };
              showBannerAlert(dispatch, object);
          })
        }
        else{
          const object = {
            title: null,
            message: response.message,
            display: true,
            modalType: 'BannerError',
            priority: 'low',
            accept: null,
            acceptFunction: null,
            duration: 3000,
          };
          showBannerAlert(dispatch, object);
        }
    //   setCurrentScreen('Login');
    })
    .catch(error => {
      const object = {
        title: null,
        message: JSON.stringify(error.message),
        display: true,
        modalType: 'BannerError',
        priority: 'low',
        accept: null,
        acceptFunction: null,
        duration: 3000,
      };
      showBannerAlert(dispatch, object);
    });
};

export const getSessionToken = async () => {
  let access_token = await AsyncStorage.getItem('access_token');
  return access_token;
};

