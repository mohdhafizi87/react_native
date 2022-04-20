import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainApp } from '../pages/LandingPage'
import { SecondApp } from '../pages/SecondPage'
import {LoginPg} from '../pages/LoginPage'

const Stack = createNativeStackNavigator();

export default function newMainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Page" component={LoginPg} />
        <Stack.Screen name="Home" component={MainApp} />
        <Stack.Screen name="Second Page" component={SecondApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
