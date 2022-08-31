import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Avatar } from 'react-native-paper';
import * as Components from '../../components';
import CacheUtil from '../../utils/Cache/CacheUtils';
import { geoLocation, getDeviceInfo } from '../../utils/helpers';
import color from '../../utils/Colors';


const ProfileScreen = ({navigation}) => {
  const [dataLocation, setDataLocation]= useState(null);
  const [dataDevice, setDataDevice]= useState(null);
  const [isModal, setIsModal]=useState(false);
  const [isLoading, setIsLoading]=useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, []);

  useEffect(() => {
    setDataDevice(getDeviceInfo())
    geoLocation()
    .then(response => response)
    .then(json => {setDataLocation(json)})
    .catch(error=>{
      console.log("error=>", error)
    })
  }, []);

  const handleLogout = () => {
    CacheUtil.removeAll();
    navigation.navigate('Auth');
  };

  const handleModal = ()=>{
    setIsModal(true)
  }

    return (
        <View style={[styles.container]}>
          <Text style={[styles.text0]}>
              {`Profile`}
          </Text>
          {isLoading ? 
            <Components.Loading/>
          :
            <>
              <View style={[styles.card]}>
                <Avatar.Image
                  size={150}
                  source={require('../../utils/images/papito.jpg')}
                  resizeMode={'contain'}
                />
                <Text style={[styles.text1]}>
                    {`Name: Alan Alvarado Salgado`}
                </Text>
                <Text style={[styles.text1]}>
                    {`Job: Mobile React Native developer`}
                </Text>
                <Text style={[styles.text1]}>
                    {`Age: 36`}
                </Text>
                <Text style={[styles.text1]}>
                    {`Latitude: ${dataLocation?.latitude} `}
                </Text>
                <Text style={[styles.text1]}>
                {`Longitude: ${dataLocation?.longitude}`}
                </Text>
                <Components.Button
                  text={ "Device info"}
                  backgroundColor={color.white}
                  textColor={color.card}
                  marginTop={15}
                  borderColor={'transparent'}
                  width={'40%'}
                  onPress={(d=>{handleModal()})}
                />

                {isModal && 
                  <Components.Modal
                    style={[styles.button]}
                    setIsModal={setIsModal}
                    data={dataDevice}
                  />
                }
            </View>
            <Components.Button
              text={ "Logout"}
              backgroundColor={color.buttonColor1}
              textColor={color.white}
              marginTop={40}
              onPress={()=>handleLogout()}
              borderColor={'transparent'}
            />
          </>
          } 
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: color.principal
    },
    card:{
      width:'85%',
      alignItems:'center',
      borderRadius:20,
      backgroundColor: color.card,
      paddingVertical:15,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    text0:{
      fontSize:24, 
      color: color.black,
      marginVertical:20
    },
    text1:{
      fontSize:16, 
      color: color.white,
      marginVertical:20
    }
  });

 
export default ProfileScreen;