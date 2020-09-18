import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStack } from './navigation/PrimaryStackNavigator';

/**
 * Display navigation stack with the app screens.
 *
 * @component
 */
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
