import React from 'react';
import {View,Image, Text, StyleSheet} from 'react-native';
import color from '../utils/Colors';

const Card = ({data}) => {
    const {image, title, id}=data
    return (
        <View style={[styles.card]} key={id}>
            <Image style={[styles.img]} source={{uri : image}} resizeMode={'contain'}/>
            <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.txt0]}>
                {title}
            </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    card:{    
        shadowColor: '#171717',
        shadowOffset: {
            width: -2,
            height: 10
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent:'space-evenly',
        width: '90%', 
        borderRadius:15, 
        margin:15, 
        flexDirection:'row', 
        alignItems:'center', 
        backgroundColor: color.card
    },
    img:{
        height:100, 
        width:100,
    },
    txt0:{
        color:color.white, 
        width: '40%'
    }, 
  });
 
export default Card;