import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {colors, Width} from '../../constant/theme';

export const LoadingActivity = ({color,backgroundColor}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:backgroundColor}}>
      <ActivityIndicator
        size={'large'}
        color={color}
        //  style={{marginLeft:Width/200}}
      />
    </View>
  );
};

export default LoadingActivity;
