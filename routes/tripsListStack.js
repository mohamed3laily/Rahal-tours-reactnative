import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tripsList from '../screens/tripsList';
import TripDetailsScreen from '../screens/TripDetailsScreen';

const Stack = createNativeStackNavigator();

const navigation = {
  navigate: () => {},
  goBack: () => {},
  push: () => {},
};

const TripsListStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TripsList" component={tripsList} />
        <Stack.Screen name="TripDetails" component={TripDetailsScreen} />
      </Stack.Navigator>
  );
};

export default  TripsListStack;  