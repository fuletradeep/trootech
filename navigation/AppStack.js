import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../src/home/Home';
import Profile from '../src/profile/Profile';
import {colors, Width} from '../constant/theme';
import EditProfile from '../src/profile/EditProfile';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          drawerActiveBackgroundColor: colors.white,
          drawerStyle: {
            backgroundColor: colors.white,
            width: Width / 1.3,
            borderTopRightRadius: 10,
          },
          drawerType: 'front',
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name='EditProfile' component={EditProfile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
