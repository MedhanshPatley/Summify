import { View, Text,StyleSheet,Image,useWindowDimensions,ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/Images/Logo.png'
import CustomButtons from '../components/CustomButtons';
import { useAuth } from '@clerk/clerk-expo';
import Header from '../components/Header';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomOutputs from '../components/CustomOutputs';
import axios from 'axios'; // Import Axios





const MainPage = () => {


  const {height} = useWindowDimensions();

  const{isLoaded, signOut} =useAuth();

  const navigation = useNavigation();


  

  const [userInput, setUserInput] = useState(''); // State for user input
  const [predictionLabels, setPredictionLabels] = useState([]); // State for predicted labels

  const onGetStartedPressed = async () => {
    // Send an HTTP request to your Flask API with user input
    try {
      const response = await axios.post('http://192.168.1.26:5000/classify', {
        user_text: userInput, // Send the user input
      });
  
      if (response.status === 200) { // Check the status code
        const data = response.data;
        setPredictionLabels(data.labels); // Update the prediction labels state
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

return (
  <View style ={styles.root}>
  
  <Header/>
    <Image source ={Logo}
    style ={[styles.logo, {height: height*0.30}]}
    resizeMode='contain'
    />

    <CustomInput
        placeholder='Enter the Text Input'
        value={userInput}
        setValue={(text) => setUserInput(text)} // Update the userInput state
      />
   
    <CustomButtons
    text ='Genrate Lables'
    onPress={onGetStartedPressed}
    />

    <CustomOutputs labels={predictionLabels} />

      

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
export default MainPage