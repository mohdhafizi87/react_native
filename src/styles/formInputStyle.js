
import {StyleSheet} from 'react-native'

export const mainStyles = StyleSheet.create({

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