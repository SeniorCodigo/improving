import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as Components from '../../components';
import color from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CacheUtil from '../../utils/Cache/CacheUtils';
Ionicons.loadFont()

const LofinScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    CacheUtil.getUserData().then((user)=>{
      let data=JSON.parse(user)
      if(data && data?.user?.length>0){
        setChecked(true)
        setUser(data.user)
        setPassword(data.password)
      }
    })
  }, []);

  const goTo =  () => {
    if(checked){
      let data = {user: user,password: password, }
      let dataStr = JSON.stringify(data)
      CacheUtil.setUserData(dataStr)
    }

    user.length>3 && password.length>3 && navigation.navigate('App')
    setUser("")
    setPassword("")
    setChecked(false)
}
    return (
        <View style={[styles.container]}>
            <Image
              style={[styles.viewImg]}
              source={require('../../utils/images/improving.png')}
              resizeMode={'contain'}
            />
            <Components.Input
              placeholder="User"
              onChangeText={user => setUser(user)}
              value={user}
            />
            <Components.Input
              placeholder="Password"
              onChangeText={password => setPassword(password)}
              secureTextEntry={true}
              value={password}
              eye={<Ionicons name={'eye'} size={22} color={color.text} />}
              eyeOff={<Ionicons name={'eye-off'} size={22} color={color.text} />}
            />
            <View style={styles.viewRememberme}>
              <View style={[styles.checkboxContainer]} >
                <TouchableOpacity
                  style={[checked ? styles.checkboxChecked : styles.checkboxBase]}
                  onPress={() => { setChecked(!checked) }}>
                  {checked ? <Ionicons name="checkmark" size={22} color={color.white}/> : null}
                </TouchableOpacity>
                <Text style={[styles.text,]}>
                  {`Remember me`}
                </Text>
                </View>
                <Components.Button
                  text={ "Login"}
                  backgroundColor={color.buttonColor1}
                  textColor={color.white}
                  marginTop={40}
                  width={'52%'}
                  onPress={()=>goTo()}
                />
            </View>
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
    viewImg:{ 
      height:'20%', 
      width:'50%', 
      backgroundColor:color.buttonColor1, 
      borderRadius:15,
    },
    viewRememberme:{
      flexDirection:'row',
    },
    checkboxBase: {
      width: 24,
      height: 24,
      borderRadius: 4,
      borderWidth: 2,
       borderColor: color.grayBorder,
      backgroundColor: 'transparent',
      marginRight: 20
    },
    checkboxChecked: {
      width: 24,
      height: 24,
      backgroundColor: color.buttonColor1,
      marginRight: 10
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      top:20,
      right:10,
    },

  });

 
export default LofinScreen;