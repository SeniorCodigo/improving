import React, { useEffect } from 'react';
import {StatusBar, useColorScheme, Image, StyleSheet, View} from 'react-native';
// import color from '../../utils/Colors';

const  SplashScreen = ({ navigation })=> {

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    _goto()
  }, [])

  const _goto = () => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000)
  }

  return (
    <View
      style={[styles.container]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Image
        style={{ height:'70%', width:'70%' }}
        source={require('../../utils/images/github.png')}
        resizeMode={'contain'}
      />
    </View>        
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:color.secondary
  },
});

export default SplashScreen