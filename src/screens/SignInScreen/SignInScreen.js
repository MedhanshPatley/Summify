import { View, Text,StyleSheet,Image,useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/Images/Logo.png'
import CustomInput from '../components/CustomInput';
import CustomButtons from '../components/CustomButtons';
import SignInWithOAuth from '../components/SignInWithOAuth';

import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    // const onSignInPressed = () =>{
    //   console.warn('Sign in');
    // }

    const onForgetPasswordPressed = () =>{
      console.warn('Forget Password');
    }

    const onSigUpPressed =() =>{
      console.warn("Don't have an account create one")
    }



  return (
    <View style ={styles.root}>
      <Image source ={Logo}
      style ={[styles.logo, {height: height*0.60}]}
      resizeMode='contain'
      />
      
      {/* <CustomInput
       placeholder="Username" 
       value={username}
       setValue={setUsername} 
        />

      <CustomInput 
      placeholder='Password'
      value={password}
      setValue={setPassword}
      secureTextEntry={true}
      />

      <CustomButtons
      text ='Sign In'
      onPress={onPress =() =>{
        navigation.navigate('MainPage')
      }}
      />

      <CustomButtons
      text ='Or'
      onPress={onForgetPasswordPressed}
      type='TERITARY'
      /> */}


      <SignInWithOAuth
               
      />

{/* 
      <CustomButtons
      text ='Dont have an account? Create one'
      onPress={onPress =() =>{
        navigation.navigate('SignUp')
      }}
      type='TERITARY'
      /> */}

    
    </View>
  )
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'centre',
        padding:10,
        flex: 1,
      backgroundColor: '#0C212B'

    },
    logo:{
        width:'100%',
       maxWidth:400,
       maxHeight:600,
    }
})

export default SignInScreen