import { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {auth} from '../fireBaseConfig'
import {onAuthStateChanged } from 'firebase/auth';
import { Icon } from 'react-native-elements';
// stacks
import TripsListStack from './tripsListStack';
import LoginStack from './loginStack';
import SignUpStack from './SignUpStack';
import ProfileStack from './ProfileStack';

// Drawer navigation options
const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user);
    });

    return unsubscribe;
  }, []);

  const screens = [
    {
      name: 'Trips',
      component: TripsListStack,
      drawerIcon: () => (
        <Icon
          name='planet-outline'
          type='ionicon'
          color='#00B1D2FF'
        />
      ),
    },
  ];

  if (!isAuthenticated) {
    screens.push(
      {
        name: 'SignUp',
        component: SignUpStack,
        drawerIcon: () => (
          <Icon
            name='log-in-outline'
            type='ionicon'
            color='#00B1D2FF'
          />
        ),
      },
      {
        name: 'Login',
        component: LoginStack,
        drawerIcon: () => (
          <Icon
            name='lock-closed-outline'
            type='ionicon'
            color='#00B1D2FF'
          />
        ),
      },
    );
  } else if(isAuthenticated){
    screens.push(
      {
        name: 'Profile',
        component: ProfileStack,
        drawerIcon: () => (
          <Icon
            name='person-circle-outline'
            type='ionicon'
            color='#00B1D2FF'
          />
        ),
      },
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentContainerStyle={{
    paddingTop: 50, // Add the desired padding value here
  }} >
        {screens.map(screen => (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              drawerIcon: screen.drawerIcon,
              drawerActiveBackgroundColor: '#FFD662B8',
              drawerActiveTintColor: '#2E5266FF',
              drawerInactiveTintColor: '#333',
              drawerLabelStyle: {
                marginLeft: -25,
                fontSize: 16,
                
              }
              
            }}
            
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootDrawerNavigator;
