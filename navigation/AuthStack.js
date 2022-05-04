import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = () => {
    const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <AuthStack.Screen name="AuthScreen" component={Auth} />
    <AuthStack.Screen name="LoginScreen" component={Login} />
    <AuthStack.Screen name="RegestrationScreen" component={Regestration} />
    <AuthStack.Screen name="AppStack" component={AppStack}/>
    <AuthStack.Screen name='TermsAndCondition' component={TermsAndCondition}/>
    <AuthStack.Screen name="policy" component={PrivacyPolicy}/>
  </AuthStack.Navigator>

  )
}

export default AuthStack