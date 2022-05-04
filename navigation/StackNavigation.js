import { View, Text } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import AppStack from './AppStack';
import Auth from '../src/auth/Auth';

const StackNavigation = () => {
    const auth = useSelector(state => state.auth);
    console.log('_______',typeof auth.access_token);
  return (
    <>

    {
        auth.access_token == '' ? <Auth /> : <AppStack />
    }
    </>
    
  )
}

export default StackNavigation