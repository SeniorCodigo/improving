import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet , Dimensions} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import Carousel from 'react-native-snap-carousel';
// import Carousel from 'react-native-anchor-carousel';

import * as Components from '../../components';
import color from '../../utils/Colors';
const {width: windowWidth} = Dimensions.get('window');

// const carouselRef = useRef(null);


const MainScreen = () => {

   const renderItem = ({item, index}) => {
        return (
                <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                         carouselRef.current.scrollToIndex(index);
                        }}>
                 ...
                </TouchableOpacity>
        );
       }
    return (
        <View style={[styles.container]}>
            <Text>
                {`Main`}
            </Text>
            {/* <Carousel layout={'default'} /> */}
            {/* <Carousel
        ref={carouselRef}
        data={Array(3).fill(0)}
        renderItem={renderItem}
        style={styles.carousel}
        itemWidth={windowWidth * 0.8}
        containerWidth={windowWidth}
        separatorWidth={0}
/> */}

        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    carousel: {
        flexGrow: 0,
        height: 150,
       }
  });

 
export default MainScreen;