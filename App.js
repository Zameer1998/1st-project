import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorHome from './Screen/DoctorHome';
import Camera from './Screen/Camera';
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='DoctorHome' screenOptions={{headerShown: false}}>
        <stack.Screen name='DoctorHome' component={DoctorHome}/>
      </stack.Navigator>
    </NavigationContainer>
    
  );
}

