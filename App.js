// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import { StyleSheet, View } from 'react-native';
// import { ContactListScreen } from './screens/ContactListScreen';
import { RootStack } from './navigation/PrimaryStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
