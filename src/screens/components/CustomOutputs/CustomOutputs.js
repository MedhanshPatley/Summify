import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const CustomOutputs = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderRadius:8,
        width: 296,
        height: 56,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
      color: 'black'
    }
})

export default CustomOutputs