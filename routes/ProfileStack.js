import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator ();

const SignUpStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="ProfileSC"
          component={ProfileScreen}
        />
        <Stack.Screen
        name="Signed out"
        component={Login}
        options={{ headerShown: false }}
        
      />
      </Stack.Navigator>
    
  );
};

export default SignUpStack;