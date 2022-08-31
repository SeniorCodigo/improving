import React from "react";
import { StyleSheet, View, } from "react-native";
import LottieView from 'lottie-react-native';

const Loading= () =>{
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../utils/Lottie/loading.json')}
        autoPlay
        loop />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
})
export default Loading;