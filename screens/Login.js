import React from "react";
import {
StyleSheet,
SafeAreaView,
TouchableOpacity,
View,
Text,
KeyboardAvoidingView, // Add this import statement
} from "react-native";
import LoginForm from "../Forms/LoginForm";
import GoogleSVG from "../assets/Icons/googleLoginIcon";
import FacebookSVG from "../assets/Icons/facebookIcon";
import {useNavigation} from '@react-navigation/native';

const App = () => {
    const navigation = useNavigation();
return (
// Wrap the SafeAreaView with the KeyboardAvoidingView
<KeyboardAvoidingView
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={styles.container}
>
<SafeAreaView style={styles.container}>
<LoginForm />

<Text style={styles.text}>or login via</Text>

<View style={styles.socialIconsContainer}>
<TouchableOpacity onPress={() => {}} style={styles.socialIcon}>
<GoogleSVG height={16} width={16} />
</TouchableOpacity>

<TouchableOpacity onPress={() => {}} style={styles.socialIcon}>
<FacebookSVG height={16} width={16} />
</TouchableOpacity>
</View>
<View style={{flexDirection:"row", paddingVertical:20, justifyContent:"center"}}>
<Text>Doesn't have an account yet?</Text>
<TouchableOpacity onPress={()=>{
        navigation.navigate('Go to SignUp')}}>

    <Text style={{color:"#CF0A0A", fontWeight:"bold"}}> create one!</Text>
    </TouchableOpacity>
</View>
</SafeAreaView>
</KeyboardAvoidingView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "white",
justifyContent: "center",
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
fontSize: 30,
flexDirection: "row",
textAlign: "center",
paddingVertical: 20,
marginTop: 1,
color:"#2E5266FF",
fontWeight:"400"
},
});

export default App;