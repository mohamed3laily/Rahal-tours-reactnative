import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

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
      colors={['#FFD662FF', '#FFD66210']}
      style={{
        borderRadius: 25,
        padding: 18,
        //justifyContent:"center"
      }}
      start={{x:.3,y:.3}}
      end={{x:1,y:1}}
      
      >
      <View style={styles.contentContainer}>
        <Icon
      name={"flag-outline"}
      type="ionicon"
      size={30}
      color="#2E5266FF"
      
    />
      <Text
        style={styles.text}>
        BOOK TRIP!
      </Text>
      </View>  

    </LinearGradient>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 text:{
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 22,
        color: '#36413D',
        marginLeft:8 
    },
    contentContainer:{
        flexDirection:"row",
        justifyContent:"center",
        paddingRight:15
    }

})