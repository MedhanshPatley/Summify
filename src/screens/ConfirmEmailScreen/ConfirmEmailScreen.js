import { View, Text,StyleSheet} from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../components/CustomInput';
import CustomButtons from '../components/CustomButtons';


const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');

   


    const onSignUpPressed = () =>{
      console.warn('Sign up completed👍');
    }

    const onSigInPressed =() =>{
      console.warn("Back to sign in")
    }

    const onTermofUsePressed =()=>{
      console.warn("Term of Use")
    }

    const onResendcodePressed =()=>{
      console.warn('onResendcodePressed')
    }

    const onComfirmPressed =()=>{
      console.warn('Confirming the code')
    }


  return (
    <View style ={styles.root}>
     

      <Text style ={styles.title}>
        Confrim your Email
      </Text>

 
      
      
      <CustomInput
       placeholder="Enter your confirmation code" 
       value={code}
       setValue={setCode} 
        />

      

      <CustomButtons
      text ='Confirm'
      onPress={onComfirmPressed}
      
      />

      <CustomButtons
      text ='Resend code'
      onPress={onResendcodePressed}
      type ='SECONDARY'
      />

      <CustomButtons
      text ='Back to Sign In'
      onPress={onSigInPressed}
      type='TERITARY'
      />

    </View>
  )
};

const styles = StyleSheet.create({
    root:{
    
        alignItems: 'centre',
        padding:10,

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
    link:{
      color:'#FD8075'

    },
    
})

export default ConfirmEmailScreen