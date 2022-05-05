import axios from 'axios';
import { logger } from '../../config/logger';
import { showBannerAlert } from '../../src/custom_alert/redux/action/BannerAlert';

export const PostApiInstance = async (
    url,
    data,
  ) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(url, data)
        .then(response => {
            console.log('@@@@@',response.data);
          resolve(response.data);
        })
        .catch(async errors => {
          logger('POST API' + url, errors);
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
    });
  }  