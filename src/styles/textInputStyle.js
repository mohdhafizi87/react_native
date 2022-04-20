import {StyleSheet} from 'react-native'

const defaultTitle = {
    fontSize: 30,
    color: 'white',
}

export const textInputStyle = StyleSheet.create({
    title: defaultTitle,
    titles2: {
    ...defaultTitle,
      color: 'black',
      margin: 10,
      fontSize: 20,
    },
    btnStyle: {
      ...defaultTitle,
      alignItems: "center",
      backgroundColor: "red",
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    logo: {
      width: 350,
      height: 80,
    },
    logoSmall: {
      width: 90,
      height: 20,
    },
    footerStyle: {
      fontSize: 10,
      color: 'black',
    },
    footerStyle02: {
      fontSize: 15,
      color: 'black',
    },
    titleHead: {
      fontSize: 20,
      color: 'black',
    },
    loadingIcon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

