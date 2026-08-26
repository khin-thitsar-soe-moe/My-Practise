import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({placeholder, value, onChangeText, keyboardType}) => {
  return (
    <View>
      <TextInput 
        placeholder={placeholder} 
        value={value} 
        onChangeText={onChangeText} 
        keyboardType={keyboardType} 
      />
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({

})