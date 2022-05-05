/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppStack from './navigation/AppStack';
import Auth from './src/auth/Auth';
import {Provider, useDispatch} from 'react-redux';
import store from './config/store';
import StackNavigation from './navigation/StackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingActivity from './component/loading/LoadingActivity';
import BannerAlert from './component/aler/BannerAlert';

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const access_token = await AsyncStorage.getItem('access_token');

    if (
      access_token == '' ||
      access_token == null ||
      access_token == undefined
    ) {
      setIsUserLogin(false);
      setLoading(false);
    } else {
      setIsUserLogin(true);
      setLoading(false);
    }
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        {loading ? (
          <LoadingActivity />
        ) : isUserLogin ? (
          <>
            <BannerAlert />
            <AppStack />
          </>
        ) : (
          <>
            <BannerAlert />
            <StackNavigation />
          </>
        )}
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
