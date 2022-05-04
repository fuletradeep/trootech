import axios from 'axios';
import { logger } from '../../config/logger';

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
          
        });
    });
  }  