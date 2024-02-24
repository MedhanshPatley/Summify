import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

import { useUser } from '@clerk/clerk-expo';


const Header = () => {
    
    const{isLoaded, isSignedIn,user} = useUser();

    if(!isLoaded || !isSignedIn){

      return null;
    }

  return (
    <View >
        <View style ={{
          display:'flex',
          flexDirection:'row',
          gap:7,
          alignItems:'center',
          marginVertical:20,
         }}>
          <Image source={{uri:user.imageUrl}}
          style={{width:45,height:45,borderRadius: 100}}
          />
          <View>
            <Text style ={styles.text_1}>Hello,👋</Text>
            <Text style ={styles.text}>{user.fullName}</Text>
          </View>

        </View>

    </View>
  )
  
};

const styles = StyleSheet.create({
  text:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',

  },
  text_1:{
    color:'white',
  }

})



export default Header