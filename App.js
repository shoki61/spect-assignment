import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SImage from 'react-native-scalable-image';

import Auth from './src/containers/Auth/Auth';
import Login from './src/containers/Login/Login';
import { SignUpEmail, SignUpPassword, SignUpUsername } from './src/containers/SignUp/index';
import backIcon from './src/assets/back.png';
import appLogo from './src/assets/spectlogo2.png';
import userReducer from './src/store/reducers/user';

const Stack = createStackNavigator();

const App = () => {
  const store = createStore(userReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
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
            name='Auth' 
            component={Auth}
          />
          <Stack.Screen 
            name='Login' 
            component={Login}
          />
          <Stack.Screen
            name='SignUpEmail'
            component={SignUpEmail}
          />
          <Stack.Screen
            name='SignUpPassword'
            component={SignUpPassword}
          />
          <Stack.Screen
            name='SignUpUsername'
            component={SignUpUsername}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;