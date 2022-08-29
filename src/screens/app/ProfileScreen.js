import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Components from '../../components';
import color from '../../utils/Colors';


const ProfileScreen = () => {
    return (
        <View style={[styles.container]}>
            <Text>
                {`Profile`}
            </Text>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },

  
  });

 
export default ProfileScreen;