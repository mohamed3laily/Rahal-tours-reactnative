import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../fireBaseConfig"
import {useNavigation} from '@react-navigation/native';


import  MyButton  from '../components/myButton';
import { color } from 'react-native-reanimated';

const LoginForm = () => {
  const navigation = useNavigation();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleLogin = async (inputValues, { setSubmitting }) => {
    try {
      await signInWithEmailAndPassword(auth, inputValues.email, inputValues.password);
      console.log(`User logged in successfully!`);
      navigation.navigate('WelcomeScreen');
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
          <View style={styles.buttonContainer}>
            <MyButton onPress={handleSubmit} label="Login"  />
            <TouchableOpacity >
              <Text style={{color:"#00B1D2FF", textAlign:"center", fontSize:16, paddingBottom:20}}>Froget you password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop:40,
    
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginForm;
