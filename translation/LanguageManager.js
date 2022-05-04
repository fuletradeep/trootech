import I18n from 'i18n-js';
import {NativeModules, Platform} from 'react-native';

import {en} from './en';
import {de} from './de';
import {pt} from './pt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {localLanguage} from '../config/string';
import {logger} from '../config/logger';

I18n.translations = {
  en,
  de,
  pt,
};

export const initLanguage = async profile => {
  const userSelectedLanguage = await AsyncStorage.getItem(localLanguage);
  const session_token = await getSessionToken();

  
    const localeLanFromDevice =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    if (
      localeLanFromDevice.slice(0, 2) !== 'en' &&
      localeLanFromDevice.slice(0, 2) !== 'de' &&
      localeLanFromDevice.slice(0, 2) !== 'pt'
    ) {
      logger('by default::', 'en');
      I18n.locale = 'en';
      return 'en';
    } else {
      I18n.locale = localeLanFromDevice.slice(0, 2);
      logger('Device language', localeLanFromDevice.slice(0, 2));
      return localeLanFromDevice.slice(0, 2);
    }
  }


export const setLocal = lan => {
  I18n.locale = lan;
};

export const translate = d => {
  return I18n.t(d);
};

export default I18n;
