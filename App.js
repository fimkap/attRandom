import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import { RootStack } from './navigation/PrimaryStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
