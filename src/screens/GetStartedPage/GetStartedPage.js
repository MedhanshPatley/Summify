import { View, Text,StyleSheet,Image,useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/Images/Logo.png'
import CustomButtons from '../components/CustomButtons';
import { useNavigation } from '@react-navigation/native';


const GetStartedPage= () => {


  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  // const onSignInPressed = () =>{
  //   console.warn('Sign In');
  // }
  // const onSignUpPressed = () =>{
  //   console.warn('Sign Up');
  // }




return (
  <View style ={styles.root}>
    <Image source ={Logo}
    style ={[styles.logo, {height: height*0.50}]}
    resizeMode='contain'
    />
    

    <CustomButtons
    text ='Sign In'
    onPress={onPress =() =>{
      navigation.navigate('SignIn')
    }}
    />

    <CustomButtons
    text ='Sign Up'
    onPress={onPress =() =>{
      navigation.navigate('SignUp')
    }}
    />


  </View>
)
};

const styles = StyleSheet.create({
  root:{
      alignItems: 'centre',
      padding: 15,
      flex: 1,
      backgroundColor: '#0C212B'
  },
  logo:{
      width:'100%',
     maxWidth:400,
     maxHeight:600,
  }
})

export default GetStartedPage;
