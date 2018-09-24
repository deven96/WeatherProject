import { StyleSheet } from 'react-native';

const Appstyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7b733',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const Weatherstyle = StyleSheet.create({
        
    weatherContainer:{
            flex: 1,
            backgroundColor: '#f7b733',
        },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    tempText: {
        fontSize: 48,
        color: '#fff'
    },  
    title: {
        fontSize: 48,
        color: '#fff'
      },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
})

export {
    Appstyle,
    Weatherstyle,
}