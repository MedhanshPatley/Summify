import { View, Text,StyleSheet,Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButtons = ({onPress, text, type ='PRIMARY',bgcolor,fgcolor}) => {
  return (
    <TouchableOpacity onPress={onPress}
    style ={[styles.container , styles[`container_${type}`],
    bgcolor ? {backgroundColor:bgcolor } :{}
    ]}>
    <Text style ={[styles.text , styles[`text_${type}`],
    fgcolor ? {color:fgcolor} :{}
]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
    
        width: '100%',

        padding: 15,
        marginVertical:30,

        alignItems: 'center', 
        borderRadius: 100,

    },

    container_PRIMARY: {

        backgroundColor:'#4AFA92',
        


    },
    container_SECONDARY:{
        bordercolor:"white",
        borderWidth:2,
    },
    container_TERITARY:{

    },
    text:{

        fontWeight:'bold',
        color:'white',
    },
    text_SECONDARY:{
        color: '#4AFAAB',
    },

    text_TERITARY:{
        color: 'gray',
    },
})

export default CustomButtons