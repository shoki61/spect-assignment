import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from './src/containers/Auth/Auth';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            headerShown: false
          }} 
          name="Auth" 
          component={Auth} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;