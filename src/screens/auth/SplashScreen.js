import React, { useEffect } from 'react';
import {useColorScheme, Image, StyleSheet, View} from 'react-native';
import color from '../../utils/Colors';

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
      <Image
        style={[styles.viewImg]}
        source={require('../../utils/images/improving.png')}
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
    backgroundColor: color.principal
  },
  viewImg:{ 
    height:'20%', 
    width:'50%', 
    backgroundColor:color.buttonColor1, borderRadius:15
  }
});

export default SplashScreen