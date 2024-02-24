import { View, Text,StyleSheet} from 'react-native'
import React, {useState} from 'react'

import CustomInput from '../components/CustomInput';
import CustomButtons from '../components/CustomButtons';


const NewPasswordScreen= () => {

    const [code, setCode] = useState('');

    const [newpasseword, setNewPassword] = useState('');
   


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

    const onSubmitPressed=()=>{
      console.warn('onSubmitPressed')
    }


  return (
    <View style ={styles.root}>
     

      <Text style ={styles.title}>
        Reset your passeword
      </Text>

 
      
      
      <CustomInput
       placeholder="Code" 
       value={code}
       setValue={setCode} 
        />
        <CustomInput
       placeholder="New Password" 
       value={newpasseword}
       setValue={setNewPassword} 
       secureTextEntry={true}
        />

      

      <CustomButtons
      text ='Submit'
      onPress={onSubmitPressed}
      
      />

      {/* <CustomButtons
      text ='Resend code'
      onPress={onResendcodePressed}
      type ='SECONDARY'
      /> */}

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
      margin:65,

    },

    text:{

      color:'gray',
      marginVertical: 10,

    },
    link:{
      color:'#FD8075'

    },
    
})

export default NewPasswordScreen