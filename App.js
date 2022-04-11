import React, {useState} from 'react'

import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native'




export const App = () => {

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
    // <SafeAreaView styles={styles.mainContainer}>
    <>
      <View style={styles.container}>
        <Text style={styles.titles}>My name is : {nameText}</Text>
        <TextInput
          onChangeText={textUpdate}
          style={styles.input}
          value={nameText}
        />

      <Text style={styles.titles}>Age is : {ageText}</Text>
        <TextInput
          onChangeText={ageUpdate}
          style={styles.input}
          value={ageText}
        />
      </View>

      </>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1
  },

  container: {
    backgroundColor: 'yellow',
    flex: 1,
    //justifyContent: 'space-between',
    //alignItems: 'center',
    padding: 10,
  },

  containerNew: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  titles: {
    fontSize: 30,
    color: '#4d4d4d',
  }
});