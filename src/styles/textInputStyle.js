import {StyleSheet} from 'react-native'

const defaultTitle = {
    fontSize: 30,
    color: '#4d4d4d',
}

export const textInputStyle = StyleSheet.create({
    title: defaultTitle,
    titles2: {
    ...defaultTitle,
      color: 'blue',
    }
  });