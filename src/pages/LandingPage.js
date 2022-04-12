
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react'

import {View, Text, TextInput, Button} from 'react-native'

import {mainStyles, textInputStyle} from '../styles'


export const MainApp = () => {

    const navigation = useNavigation();

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
        <Text style={textInputStyle.titles2}>My names is : {nameText}</Text>
        <TextInput
          onChangeText={textUpdate}
          style={mainStyles.input}
          value={nameText}
        />

      <Text style={textInputStyle.title}>Age is : {ageText}</Text>
        <TextInput
          onChangeText={ageUpdate}
          style={mainStyles.input}
          value={ageText}
        />

        <Button
        onPress={() => navigation.navigate('Second Page', {name:nameText, age:ageText})}
        title='go to next page'
      
        />
      </View>

      </>
  
  );
};