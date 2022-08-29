import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Components from '../../components';
import color from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont()

const LofinScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const goTo =  () => {
    navigation.navigate('App')

}
    return (
        <View style={[styles.container]}>
            <Text>
                {`Hola`}
            </Text>
            <Components.Input
                placeholder="E-mail"
                onChangeText={user => setUser(user)}
                value={user}
                
                />
                                <Components.Input
                placeholder="Constraseña"
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
                value={password}
                // eye={<Ionicons name={'eye'} size={22} color={color.text} />}
                // eyeOff={<Ionicons name={'eye-off'} size={22} color={color.text} />}
                />
                  <Components.Button
                    text={ "Inicia sesión"}
                    backgroundColor={color.buttonColor1}
                    textColor={color.white}
                    marginTop={15}
                    onPress={()=>goTo()}
                    borderColor={'transparent'}
                />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    checkboxBase: {
      width: 24,
      height: 24,
      borderRadius: 4,
      borderWidth: 2,
      // borderColor: color.grayBorder,
      backgroundColor: 'transparent',
      marginRight: 20
    },
    checkboxChecked: {
      width: 24,
      height: 24,
      // backgroundColor: color.buttonColor1,
      marginRight: 20
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10 
    },
  
  });

 
export default LofinScreen;