import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import TripsListStack from '../routes/tripsListStack';

const Stack = createNativeStackNavigator ();

const WelcomeStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
        name="Browse Trips"
        component={TripsListStack}
        
      />
      </Stack.Navigator>
    
  );
};

export default WelcomeStack;