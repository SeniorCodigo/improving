import React from 'react';
import {Text, Dimensions, TouchableOpacity, View} from 'react-native';
const {width} = Dimensions.get("screen");

const Button  = (props) => {
    return (
        <TouchableOpacity 
            style={{
                backgroundColor: props.backgroundColor ,
                padding: 16,
                borderWidth: props.borderWidth ? props.borderWidth : 1,
                width: props.width ? props.width: width/1.1 ,
                alignItems: "center",
                borderRadius: 7,
                borderColor: props.borderColor,
                marginTop: props.marginTop,
            }}
        disabled={props.disabled}
        onPress={props.onPress}
        >
            <View style={{flexDirection:'row', width:'100%',justifyContent: 'center'}}>
                <Text style={{fontSize:18,}}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button ;