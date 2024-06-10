import React from "react";
import { View, Text, StyleSheet, Image ,ScrollView} from "react-native";
import IconLabel from "../components/iconLabelDetails";
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements';
import  MyButton  from '../components/ReserveButton';
import { LinearGradient } from 'expo-linear-gradient';


const TripDetailsScreen = ({ route }) => {
  const { tripName, categories, date, duration,
     numOfParticipants, rating, images,description,id,price, destination } =
    route.params.info || {}; // Default to an empty object if `info` is undefined
  const iconColor = '#00B1D2FF';

  return (
    <View style={{ flex: 1, backgroundColor:"#ffffff" }}>
     <ScrollView>
    <Text style={styles.title}>{tripName}</Text>

    <View style={styles.swiperContainer}>
     <Swiper 
        style={styles.wrapper}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={styles.pagination}
      >
        {images.map((image, index) => ( 
          <Image key={index} source={image} style={styles.image} resizeMode="contain" />
        ))}
      </Swiper>
      </View>

      <Text style={styles.category}>{categories}</Text>
      <View style={styles.detailsContainer}>
        <IconLabel name="calendar" label={date} color={iconColor} />
        <IconLabel name="time" label={duration} color={iconColor} />
        <IconLabel name="person" label={numOfParticipants} color={iconColor} />
        <IconLabel name="star" label={rating} color={iconColor} />
       
      </View>
      <View style={styles.desContainer}>
        <Text  ellipsizeMode="tail" style={styles.description}>{description}</Text>
      </View>
      <View style={styles.priceContainer}>
  <View style={styles.priceIconContainer}>
    <Icon
      name={"location-outline"}
      type="ionicon"
      size={33}
      color={iconColor}
      style={styles.priceIcon}
    />
  </View>
  <View style={styles.priceTextContainer}>
    <Text style={styles.priceText}>{destination}</Text>
  </View>
  </View>
     

      <View style={styles.priceContainer}>
  <View style={styles.priceIconContainer}>
    <Icon
      name={"cash-outline"}
      type="ionicon"
      size={33}
      color={iconColor}
      style={styles.priceIcon}
    />
  </View>
  <View style={styles.priceTextContainer}>
    <Text style={styles.priceText}>{price}</Text>
    <Text style={styles.dollarSign}>$</Text>
  </View>
  
</View>
          <MyButton />
      </ScrollView> 
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 400,
    marginBottom: 10,
    marginVertical:5,
  },
  swiperContainer:{

  },
  image: {
    width: "100%",
    height: "100%",
  },
  dot: {
    backgroundColor: "#ffffff",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5
  },
  activeDot: {
    backgroundColor: "#FFD662FF",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5
  },
  pagination: {
    top: 370,
    marginTop: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 20,
    marginHorizontal: 8,
  },
  category: {
    fontSize: 16,
    fontWeight: "300",
    marginHorizontal: 16,
  },
  detailsContainer: {
    flexDirection: "row", 
    marginVertical: 10,
    marginHorizontal: 16,
  },
  desContainer:{
    paddingHorizontal: 12,
    color: '#000000'
  },
  description: {
    fontSize: 20,
    lineHeight: 24,
    color: '#333',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: 'justify',
    fontFamily:"Roboto"
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 7,
    padding: 16,
    width: '50%',
    marginLeft: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom:5
  },
  priceIconContainer: {
    padding: 2,
    paddingRight: 1,
    marginRight: 11,
  },
  priceIcon: {
    // Add any additional styling for the price icon here
  },
  priceTextContainer: {
    flexDirection:"row"
  },
  priceText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#2E5266FF',
  },
  dollarSign: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#38E54D',
    marginLeft:3
  },

});


export default TripDetailsScreen;