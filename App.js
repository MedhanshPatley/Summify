import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomePage from './src/screens/HomePage';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from './src/screens/components/SignInWithOAuth';
import MainPage from './src/screens/MainPage';
import StackNavigation from './src/navigation/StackNavigation';
import { useNavigation } from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import GetStartedPage from './src/screens/GetStartedPage';
import Result from './src/screens/Result';

const App = () => {
  return (



      
   


    
      

    <ClerkProvider publishableKey={'pk_test_aWRlYWwtbW9yYXktNjEuY2xlcmsuYWNjb3VudHMuZGV2JA'}>
      <SafeAreaView style={styles.root}>
        <NavigationContainer>
        <SignedIn>  
              <Result/>
                   
          </SignedIn>
          <SignedOut>
          <StackNavigation/>
          </SignedOut>
           
            
        </NavigationContainer>
      </SafeAreaView>
     </ClerkProvider>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0C212B'
    // ----------havee after
  }, 
});



export default App;


