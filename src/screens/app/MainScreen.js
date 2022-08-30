import React, {useState, useEffect} from 'react';
import { View, StyleSheet , FlatList, Image,} from 'react-native';
import { Avatar } from 'react-native-paper';
import { getData } from '../../request';
import color from '../../utils/Colors';

const MainScreen = () => {
  const [data, setData]=useState([])
  
  useEffect(() => {
    getData()
    .then(response => response.json())
    .then(json => {setData(json?.results)})
    .catch(error=>{
      console.log("error=>", error)
    })
  }, []);

  const renderItem = ({ item }) => (
    <View  style={{padding:25, justifyContent:'center', }} key={item?.id} >
      <Avatar.Image
        source={{uri : item?.image}}
        size={150}
        resizeMode={'contain'}
      />
    </View>
  );

    return (
        <View style={[styles.container]}>
         <FlatList
            horizontal
            style={{flex:1}}
            data={ data }
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
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
    carousel: {
        flexGrow: 0,
        height: 150,
       }
  });

 
export default MainScreen;