import React ,{useState} from 'react';
import { View, TextInput, StyleSheet, Text,  } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {auth} from "../fireBaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";
import  MyButton  from '../components/myButton';

const SignUpForm = () => {
  const validationSchema = yup.object().shape({
    userName: yup.string().required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Too short').required('Required'),
    conformPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required'),
  });
  
  const [inputValues, setInputValues] = useState({ userName: '', email: '', password: '', conformPassword: '' });

  const handleSignup = async (inputValues, { setSubmitting }) => {
    try {
      await createUserWithEmailAndPassword(auth, inputValues.email, inputValues.password);
      console.log(`User created successfully!`);
       // reset input values
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
      setInputValues({ userName: '', email: '', password: '', conformPassword: '' });
    }
  };
  

  return (
    
    <Formik
      initialValues={inputValues}
      onSubmit={handleSignup}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('userName')}
            onBlur={handleBlur('userName')}
            value={values.userName}
            placeholder="User name"
            autoCapitalize="none"
            keyboardType="default"
          />
          {errors.userName && <Text style={styles.error}>{errors.userName}</Text>}

          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
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
          <TextInput
            style={styles.input}
            onChangeText={handleChange('conformPassword')}
            onBlur={handleBlur('conformPassword')}
            value={values.conformPassword}
            placeholder="Conform password"
            secureTextEntry
          />
          {errors.conformPassword && <Text style={styles.error}>{errors.conformPassword}</Text>}
          <View style={styles.buttonContainer}>
            <MyButton onPress={handleSubmit} label="Sign up" />
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
    paddingTop:80,
    
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

export default SignUpForm;
