import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions } from 'react-native';
import React, { useState } from 'react';
import IconLabel from './iconLabel';
import TripDetailsScreen from '../screens/TripDetailsScreen';
import {data} from "../data"


const deviceWidth = Math.round(Dimensions.get('window').width);
const iconColor = '#00B1D2FF';

const TripCard = ({info , navigation, onPress}) => {
  const {tripName, categories, date,duration,numOfParticipants,rating, images,id, description } =  info;

  
  return (
    <TouchableOpacity onPress={onPress}
    >

    <View style={styles.container}>
     <Image
        source={images[0]}
        accessibilityLabel="A decorative image of nature"
        style={styles.Image} 
        resizeMode="cover"
        />
      <Text style={styles.title}>{tripName}</Text>
      <Text style={styles.categoryStyle}>{categories}</Text>

      <View style={styles.iconLabelStyle}>
      <IconLabel name="calendar" label={date} color={iconColor} />
      <IconLabel name="time" label={duration} color={iconColor} />
      <IconLabel name="person" label={numOfParticipants} color={iconColor} />


      <View style={styles.RatingIconLabel}>
      <IconLabel  name="star" label={rating} color="#FFD662FF" />
      </View>

      </View>

      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: .9, // sets the border width to 1 pixel
    borderBottomColor: iconColor,
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
    alignContent: 'center',
  },
  Image:{
    width: deviceWidth -60,
    height: 200,
   
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 3,
  },
  categoryStyle: {
    fontWeight: '300',
  },
  details: {
    flexDirection: 'row',
  },
  date: {
    marginRight: 8,
  },
  duration: {},
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
    
  },
  RatingIconLabel:{
    position: 'absolute',
    right: 6,

  }
 

});

export default TripCard;