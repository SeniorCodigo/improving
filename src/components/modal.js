import React from 'react';
import { Text, TouchableOpacity, View, Modal, StyleSheet, } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import color from '../utils/Colors';
SimpleLineIcons.loadFont()

const ModalComponent = (props) => {

  const {setIsModal, data} = props;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setIsModal(!modalVisible);
        }}
      >
        <View style={[styles.centeredView, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
          <View style={styles.modalView}>
            <View style={{ width: '95%', alignItems: 'flex-end', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => { setIsModal(false) }}
              >
                <SimpleLineIcons name={'close'} size={24} color={color.card} />
              </TouchableOpacity>
            </View>
            <Text style={[styles.text1]}>
                {`Brand: ${data?.brand}`}
            </Text>
            <Text style={[styles.text1]}>
                {`Model: ${data?.model}`}
            </Text>
            <Text style={[styles.text1]}>
                {`System Version: ${data?.systemVersion}`}
            </Text>
            <Text style={[styles.text1]}>
                {`Version: ${data?.version}`}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    position: 'absolute',
    backgroundColor: color.white,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '70%',
    height: '30%',
  },
  text1:{
    fontSize:16, 
    color: color.card,
    textDecorationLine: 'underline',
    marginVertical:15,
  }
});
export default ModalComponent;