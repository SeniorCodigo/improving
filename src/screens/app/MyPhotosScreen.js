import React, {useEffect, useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { getData } from '../../request';
import * as Components from '../../components';

const MyPhotosScreen = () => {

  const [data, setData]=useState(null)
  const [refreshing, setrefreshing] = useState(false);
  const [pagination, setPagination] = useState(0);
  const [isLoading, setIsLoading]=useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, []);
  
  useEffect(() => {
    getData(pagination)
    .then(response => response.json())
    .then(json => {setData(json?.results)})
    .catch(error=>{
      console.log("error=>", error)
    })
  }, [pagination]);

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setPagination(pagination+1)
      setrefreshing(false);
    }, 2000);
  };
    return (
      <View style={[styles.container]}>
        <FlatList
          style={{marginTop:50}}
          data={ data }
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={onRefresh}
          renderItem={({ item }) => {
            return (
              <Components.Card
                data={item}
              />
            )
          }}
        />
        {isLoading && <Components.Loading/>} 
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

export default MyPhotosScreen;