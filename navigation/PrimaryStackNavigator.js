import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ContactListScreen } from '../screens/ContactListScreen';
import { ContactDetailsScreen } from '../screens/ContactDetailsScreen';

const Stack = createStackNavigator();

/**
 * Implements a primary (root) navigation stack.
 *
 *  @return Stack.Navigator
 */
function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Contacts"
        component={ContactListScreen}
        options={{ title: "Randomize me!" }}
      />
      <Stack.Screen
        name="Details"
        component={ContactDetailsScreen}
        initialParams={{ user: "details" }}
        options={({ route }) => ({ title: route.params.name.first })}
      />
    </Stack.Navigator>
  );
}

export {RootStack};
