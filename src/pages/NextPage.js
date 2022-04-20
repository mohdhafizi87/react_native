import React, {useState} from 'react'

import axios from 'axios';

import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert} from 'react-native'

import {mainStyles, textInputStyle} from '../styles'

export const NextApp = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [jsonString, setJsonString] = useState({

        first_name: '',
        last_name: '',
        email_value: '',
    });

    const textUpdate = (value, state) => {

        const tempValue = {...jsonString}
        tempValue[state] = value

        setJsonString(tempValue)
    }

    const submitFunc = () => {

        setIsLoading(true);

        var formBody = [];
        for (var property in jsonString) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(jsonString[property]);
        formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
 
        axios.post('https://dev-msid.posdigicert.com.my/APIEX/test_add_new',  formBody, {
            headers: {
                token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
        })
        .then(res => {

            

            setIsLoading(false);

            Alert.alert('Success', 'berjaya', [
                {
                    text: 'OK',
                }  
              ]);
            console.log(res.data);
        })
        .catch(err => {
            setIsLoading(false);
            console.log('err : ', err)})

    }

    return(

        isLoading ?
        <View style={textInputStyle.loadingIcon}>
        <ActivityIndicator size="large">
        </ActivityIndicator>
        <Text>Please wait ...</Text>
        </View>
        :
        <View>
            <Text style={textInputStyle.titles2}>First name : </Text>
            <TextInput
            placeholder="Enter First Name ..."
            onChangeText={value => textUpdate(value, 'first_name')}
            style={mainStyles.input}
            value={jsonString.first_name}
            />

            <Text style={textInputStyle.titles2}>Last name : </Text>
            <TextInput
            placeholder="Enter Last Name ..."
            onChangeText={value => textUpdate(value, 'last_name')}
            style={mainStyles.input}
            value={jsonString.last_name}
            />

            <Text style={textInputStyle.titles2}>Email : </Text>
            <TextInput
            placeholder="Enter Email ..."
            onChangeText={value => textUpdate(value, 'email_value')}
            style={mainStyles.input}
            value={jsonString.email}
            />

            <TouchableOpacity
                 style={textInputStyle.btnStyle}
                 onPress={submitFunc}
            >
                <Text style={textInputStyle.title}>Submit</Text>
            </TouchableOpacity>
        </View>

       
    );
};