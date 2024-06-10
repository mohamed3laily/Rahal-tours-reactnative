import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export let isSigned = false; // initial value of the state is false

const MyComponent = () => {
    const navigation = useNavigation();
   // let [isSigned, setIsSigned] = useState(false)

return(
  <View style={styles.container}>
    <Text style={styles.head}>Welcome!</Text>
    <Text style={styles.browse}>Browse Trips Now...</Text>
    <TouchableOpacity onPress={()=>{
        navigation.navigate('Browse Trips');
        isSigned = true;
        }} >
    <Icon
        name="arrow-forward-circle-outline"
        type="ionicon"
        size={80}
        style={styles.iconStyle}
        color={"#ff9f1c"}
      />
    </TouchableOpacity>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,


    backgroundColor: '#ffffff',
  },
  head:{
    fontSize: 48,
    fontWeight: 'bold',
    color: '#335c67',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 20,
    marginVertical:120
  },
  browse:{
    fontSize: 30,
    fontWeight: '600',
    color: '#2ec4b6',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 20,
    marginVertical:120
  }

});

export default MyComponent;