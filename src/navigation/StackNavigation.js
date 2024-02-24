import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from '@react-navigation/stack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import SignInScreen from '../screens/SignInScreen';
import MainPage from '../screens/MainPage';
import GetStartedPage from '../screens/GetStartedPage';
import SignUpScreen from '../screens/SignUpScreen';
import Result from '../screens/Result';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    
  
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <Stack.Screen name ='HomePage' component={HomePage} />
        <Stack.Screen name ='Getstarted' component={GetStartedPage}/>
        <Stack.Screen name ='SignIn' component={SignInScreen} />
        <Stack.Screen name ='SignUp' component={SignUpScreen} />
        <Stack.Screen name ='MainPage' component={MainPage} />
        <Stack.Screen name = 'Result' component ={Result}/>
      </Stack.Navigator>
     
  )
}

export default StackNavigation