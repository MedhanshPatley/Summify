import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, ScrollView , useWindowDimensions, StyleSheet, StatusBar} from 'react-native';
import CustomButtons from '../components/CustomButtons';
import Logo from '../../../assets/Images/Logo.png'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../components/Header';

const apiUrl = 'http://192.168.1.15:5000/classify'; // Use your local IP address



export default function App() {
  const [userText, setUserText] = useState('');
  const [predictedLabels, setPredictedLabels] = useState([]);
  const { height, width } = useWindowDimensions();
  const{isLoaded, signOut} =useAuth();
  

  const classifyText = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_text: userText }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPredictedLabels(data.labels);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    
    <View style={[styles.root, {height: height}] }>
      <View style={[styles.head, {width: width}]}>
        <Header/>
      </View>
    <StatusBar backgroundColor="black" />
  
      <Image source ={Logo}
      style ={[styles.logo, {height: height*0.30}]}
      resizeMode='contain'
      />

      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter text to classify"
        placeholderTextColor='rgba(255, 255, 255, 0.5)'
        onChangeText={(text) => setUserText(text)}
        value={userText}
      />
      <CustomButtons text="Classify Text" onPress={classifyText} />
      <ScrollView style={{ marginTop: 20 }}>
      <View style={styles.label_container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>Predicted Labels: </Text>
        
        {predictedLabels.map((label, index) => (
          <Text style={styles.label} key={index}>{label},  </Text>
        ))}
      </View>
      </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
  root:{
  
      alignItems: 'center',
      // padding:10,
      // flex: 1,
    backgroundColor: '#0C212B',
    

  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin:80,

  },

  input: {
    alignItems: 'center',
    color: 'white', 
    width: 350,
    height: 100,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
    borderWidth: 2,
    padding: 10,
  },

  label_container: {
    flexDirection: 'row',
    justifyContent: 'center',
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

  label: {
    color: '#ffffff',
    fontSize: 18,
  }
  
})