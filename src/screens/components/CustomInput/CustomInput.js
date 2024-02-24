import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style ={styles.container}>
      <TextInput
        value ={value}
        style={styles.value_1}
        onChangeText={setValue}
        
        placeholder={placeholder}
        // style = {styles.input}
        secureTextEntry ={secureTextEntry}
       />
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width:'100%',


        borderColor: "#4AFAAB",
        borderwidth: 3,
        borderRadius: 8,

        paddingHorizontal: 10,
        marginVertical: 10,

    },
    input:{
      color: 'black'

    },
    value_1 :{
      color: 'black'

    }
})

export default CustomInput