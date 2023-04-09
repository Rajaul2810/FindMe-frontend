import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './Components/SignIn';
import AppStack from './Navigation/AppStack';
import AuthStack from './Navigation/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
       <AuthStack/>
       {/* <AppStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
