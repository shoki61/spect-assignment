import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SImage from 'react-native-scalable-image';

import Auth from './src/containers/Auth/Auth';
import Login from './src/containers/Login/Login';
import Button from './src/components/UI/Button/Button';
import backIcon from './src/assets/back.png';
import appLogo from './src/assets/spectlogo2.png';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.goBack()}>
              <SImage width={15} source={backIcon}/>
            </TouchableOpacity>
          ),
          headerStyle:{backgroundColor:'transparent', elevation:0},
          headerTitle:() => <SImage width={80} source={appLogo}/>,
          headerTitleAlign:'center'
        })}
        initialRouteName='Auth'
      >
        <Stack.Screen 
          options={{
            headerShown: false
          }} 
          name="Auth" 
          component={Auth}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;