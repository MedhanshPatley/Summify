import { View, Text,StyleSheet} from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../components/CustomInput';
import CustomButtons from '../components/CustomButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [passwordRepeat, setPasswordRepeat] =useState('');


    const navigation = useNavigation();

    const onSignUpPressed = () =>{
      console.warn('Sign up completed👍');
    }

    const onSigInPressed =() =>{
      console.warn("have an account?")
    }

    const onTermofUsePressed =()=>{
      console.warn("Term of Use")
    }

    const PrivacYPolicyPressed =()=>{
      console.warn('Privacy & Policy')
    }


  return (
    <View style ={styles.root}>
     

      <Text style ={styles.title}>
        Create an Account
      </Text>

 
      
      
      {/* <CustomInput
       placeholder="Username" 
       value={username}
       setValue={setUsername} 
        /> */}

      <CustomInput
       placeholder="Email Id" 
       value={email}
       setValue={setEmail} 
        />

      <CustomInput 
      placeholder='Password'
      value={password}
      setValue={setPassword}
      secureTextEntry={true}
      />

     <CustomInput 
      placeholder='Confirm Password'
      value={passwordRepeat}
      setValue={setPasswordRepeat}
      secureTextEntry={true}
      />

      <CustomButtons
      text ='Sign up'
      onPress={onPress =() =>{
        navigation.navigate('MainPage')
      }}
      />

      <Text style ={styles.text}>
        By registering, you confirm that you  accept our {' '}
        <Text style ={styles.link}onPress={onTermofUsePressed}>Terms of Use</Text> and {' '}
        <Text style ={styles.link}onPress={PrivacYPolicyPressed}>Privacy Policy</Text>
      </Text>

      <CustomButtons
      text ='Have an account? Sign In'
      onPress={onPress =() =>{
        navigation.navigate('SignIn')
      }}
      type='TERITARY'
      />

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
    title:{
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      margin:80,

    },

    text:{

      color:'gray',
      marginVertical: 10,

    },
    text_1:{

      color:'gray',
      marginVertical: 10,

    },
    link:{
      color:'#FD8075'

    },
    
})

export default SignUpScreen