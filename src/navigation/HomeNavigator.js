import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import HomePage from "../screens/HomePage";
import GetStartedPage from "../screens/GetStartedPage";
import { SignIn } from "@clerk/nextjs";
import SignInScreen from "../screens/SignInScreen";
const Stack=createStackNavigator();



function HomeNavigator() {
  return (
  
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home'
         component={HomePage}/>
         <Stack.Screen name ='getstarted'
         component={GetStartedPage}/>
         <Stack.Screen name ='SignIn'
         component={SignInScreen}
         />
         
    </Stack.Navigator>
    
  )
}

export default HomeNavigator