import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.text}>Привіт 15 лютого 2023 року</Text>
        <StatusBar style='auto' />
      </View>
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
  innerBox: {
    borderWidth: 2,
    borderColor: '#h3b0c0',
  },
});
