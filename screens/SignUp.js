import React from "react";
import {
StyleSheet,
TouchableOpacity,
View,
Text,
ScrollView, // Add this import statement
} from "react-native";
import SignUpForm from "../Forms/SignUpForm";
import GoogleSVG from "../assets/Icons/googleLoginIcon";
import FacebookSVG from "../assets/Icons/facebookIcon";
import {useNavigation} from '@react-navigation/native';


const App = () => {
    const navigation = useNavigation();
return (
// Wrap the SafeAreaView with the KeyboardAvoidingView

<ScrollView style={styles.container}>
<SignUpForm />

<Text style={styles.text}>Or signup using another method</Text>

<View style={styles.socialIconsContainer}>
<TouchableOpacity onPress={() => {}} style={styles.socialIcon}>
<GoogleSVG height={16} width={16} />
</TouchableOpacity>

<TouchableOpacity onPress={() => {}} style={styles.socialIcon}>
<FacebookSVG height={16} width={16} />
</TouchableOpacity>
</View>
<View style={{flexDirection:"row", paddingVertical:20, justifyContent:"center"}}>
<Text>Do you have an account already? </Text>
<TouchableOpacity 
onPress={()=>{
        navigation.navigate('Go to Login')}} >
            <Text style={{color:"#CF0A0A", fontWeight:"bold"}}>Sign In</Text></TouchableOpacity>
</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "white",
},
socialIconsContainer: {
flexDirection: "row",
justifyContent: "center",
},
socialIcon: {
borderColor: "#ddd",
borderWidth: 2,
borderRadius: 8,
paddingHorizontal: 8,
paddingVertical: 6,
marginHorizontal: 4,
marginVertical: 8,
},
text: {
fontSize: 20,
flexDirection: "row",
textAlign: "center",
paddingVertical: 20,
marginTop: 1,
color:"#2E5266FF",
fontWeight:"400"
},
});

export default App;