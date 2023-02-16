import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: '#f5b6a3',
  },
  // innerBox: {
  //   borderWidth: 2,
  //   borderColor: '#h3b0c0',
  // },
});
