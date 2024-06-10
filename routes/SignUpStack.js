import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Login from './loginStack';

const Stack = createNativeStackNavigator ();

const SignUpStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="New SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="Go to Login" 
          component={Login}
        />
      </Stack.Navigator>
    
  );
};

export default SignUpStack;