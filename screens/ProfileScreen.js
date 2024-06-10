import { auth } from '../fireBaseConfig';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from '../components/myButton';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const user = auth.currentUser;
  let email;
  let displayName;
  let uid;
  if (user !== null) {
    displayName = user.displayName;
    email = user.email;
    uid = user.uid;
  }

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rahal Profile</Text>
      <View style={styles.infoContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.label}>Your ID:</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>Mohamed yasser</Text>
          <Text style={styles.text}>{uid}</Text>
        </View>
      </View>
      <MyButton onPress={handleSignOut} label="Sign out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"#2E5266FF"
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  labelContainer: {
    width: '40%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
