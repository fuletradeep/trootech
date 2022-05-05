import {logger} from '../../../../config/logger';
import {BannerError, BannerSuccess} from '../../../../config/string';
import types from './type';

const getAlertStart = () => ({
  type: types.GET_BANNER_ALERT_START,
});
const getAlertFinish = object => ({
  type: types.GET_BANNER_ALERT_FINISH,
  alertObject: object,
});

const getClearAlert = () => ({
  type: types.CLEAR_BANNER_ALERT,
});

const getClearNotification = index => ({
  type: types.CLEAR_ONE_NOTIFICATION,
  indexOfItem: index,
});

export const clearAlert = dispatch => {
  dispatch(getAlertStart());
  dispatch(getClearAlert());
};

export const clearNotification = (dispatch, index) => {
  dispatch(getAlertStart());
  dispatch(getClearNotification(index));
};

let previousMessage = '';
export const showBannerAlert = async (dispatch, object) => {
  dispatch(getAlertStart());
  if (previousMessage == object.message) {
    logger('same ',previousMessage)
  }else{
      console.log('---',object);
    logger('before defining ',previousMessage)
    previousMessage = object.message;
    logger('diff ',previousMessage)
    const alertObject = {
      alertTitle: object.title,
      message: object.message,
      display: object.display,
      modalType: object.modalType,
      acceptButtonTitle: object.accept,
      acceptFunction: object.acceptFunction,
      duration: object.duration,
      id: Math.random(),
      priority: object.priority,
    };
    // dispatch(getClearAlert());

    dispatch(getAlertFinish(alertObject));
    setTimeout(() => {
      previousMessage=''
    }, 6000);
  }
};
