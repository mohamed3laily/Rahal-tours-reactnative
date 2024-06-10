import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      
    }}>
    <LinearGradient
      colors={['#FFD662FF', '#00B1D2FF']}
      style={{
        borderRadius: 14,
        padding: 20,
        //justifyContent:"center"
      }}
      start={{x:.3,y:.3}}
      end={{x:1,y:1}}

      
      >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 19,
          color: '#36413D',
        }}>
        {label}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
  );
}