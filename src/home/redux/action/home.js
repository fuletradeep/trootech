import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'native-base';
import {PostApiInstance} from '../../../../component/axious_instance/AxiousInstance';
import {BASE_URL} from '../../../../config/url';
import { translate } from '../../../../translation/LanguageManager';
import {getSessionToken} from '../../../auth/redux/action/auth';
import { showBannerAlert } from '../../../custom_alert/redux/action/BannerAlert';
import types from './type';

const homeProcessStart = () => ({
  type: types.HOME_PROCESS_START,
  payload: {},
});

const homeProcessEnd = response => ({
  type: types.HOME_PROCESS_END,
  payload: response,
});

export const GetHomeData = async dispatch => {
  dispatch(homeProcessStart());

  const access_token = await getSessionToken();

  const response = await axios
    .post(
      `${BASE_URL}home`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    ).then(response => {
        dispatch(homeProcessEnd(response.data));
    })
    .catch(error => {
      console.log('(((((', JSON.stringify(error.message));
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
