import { View, Text,StyleSheet,Image,useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/Images/Logo.png'
import CustomButtons from '../components/CustomButtons';
import StackNavigation from '../../navigation/StackNavigation';
import { useNavigation } from '@react-navigation/native';
import { withNavigation } from '@react-navigation/native';
import { StackNavigator } from '@react-navigation/stack';
import CustomInput from '../components/CustomInput';



const HomePage = () => {

  // const [username, setUsername] = useState('');
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

 



return (
  <View style ={styles.root}>
    <Image source ={Logo}
    style ={[styles.logo, {height: height*0.80}]}
    resizeMode='contain'
    />

{/* 
    <CustomInput
       placeholder="Username" 
       value={username}
       setValue={setUsername}  */}
        {/* /> */}
    

    <CustomButtons
    text ='Get Started'
    onPress={onPress =() =>{
      navigation.navigate('SignIn')
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

export default HomePage;
