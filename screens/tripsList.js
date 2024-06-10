import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import TripCard from "../components/tripCard";

import {trips} from "../data"; // import tripsData from separate file
import {useNavigation} from '@react-navigation/native';
  

const App = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        renderItem={({ item }) => {
          return <TripCard 
          info={item} 
          key={item.id} 
          navigation={navigation} 
          onPress={() => {
            navigation.navigate('TripDetails', {
              info: item,
            });
          }}/>;
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
       justifyContent: 'center',
    },
    list:{
    }
  });

export default App;
