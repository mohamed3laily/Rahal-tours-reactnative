import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from './SignUpStack';
import WelcomeStack from "./WelcomeStack"

const Stack = createNativeStackNavigator ();

const LoginStack = () => {

  return (
    <Stack.Navigator>
       
      <Stack.Screen
        name="LoginS"
        component={Login}
        options={{ headerShown: false, title:null }}

      />

       <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeStack}
        options={{ headerShown: false }}
        
      />
      
      <Stack.Screen
        name="Go to SignUp"
        component={SignUp}
        options={{ headerShown: false }}
        
      />
     
       
     
    </Stack.Navigator>
  );
};

export default LoginStack;
