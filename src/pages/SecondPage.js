
import React from 'react'

import {View, Text} from 'react-native'

import {mainStyles, textInputStyle} from '../styles'

import {useRoute} from '@react-navigation/native';


export const SecondApp = () => {

  const route = useRoute();

  console.log('route value : ', route.params);

  const {name, age} = route.params;
  
  return(
    
    <>
      <View style={mainStyles.container}>
        <Text style={textInputStyle.titles2}>My name is {name} and i am {age} years old</Text>
        

      
      </View>

      </>
  
  );
};