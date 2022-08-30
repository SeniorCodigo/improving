import React, { } from "react";
import { Alert, Modal, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import LottieView from 'lottie-react-native';
function Loading({isPlay}) {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={false}
      onRequestClose={() => { }}
    >
      <View style={styles.container}>
        <LottieView
          source={require('../utils/Lottie/loading.json')}
          style={{ width: '75%', height:'75%' }}
          autoPlay
          loop />
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
})
export default Loading;