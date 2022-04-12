
import React, {useState} from 'react'

import {View, Text, TextInput} from 'react-native'

import {mainStyles} from '../styles/formInputStyle'


export const mainApp = () => {

  const [nameText, setNameText] = useState('')

  const [ageText, setAgeText] = useState('')

  const textUpdate = (text) => {
  
    console.log('value : ', text)
  
    setNameText(text)
  }

  const ageUpdate = (text) => {
  
    console.log('value age : ', text)
  
    setAgeText(text)
  }

  return(
    
    <>
      <View style={mainStyles.container}>
        <Text style={mainStyles.titles}>My names is : {nameText}</Text>
        <TextInput
          onChangeText={textUpdate}
          style={mainStyles.input}
          value={nameText}
        />

      <Text style={mainStyles.titles}>Age is : {ageText}</Text>
        <TextInput
          onChangeText={ageUpdate}
          style={mainStyles.input}
          value={ageText}
        />
      </View>

      </>
  
  );
};