import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import MainScreen  from './MainScreen'
import MyPhotosScreen from './MyPhotosScreen';
import ProfileScreen from './ProfileScreen';
import color from '../../utils/Colors';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} headerMode='none'>
      <Tab.Screen 
        name="Main"
        component={MainScreen}  
        options={{
          tabBarActiveTintColor: color.buttonColor1,
          tabBarLabel: 'Main',
          tabBarIcon: ()=>(<Image style={{tintColor:color.buttonColor1}} source={require('../../utils/images/tab/home.png')} resizeMode={'contain'} />)
        }}
        />
      <Tab.Screen 
        name="MyPhotos" 
        component={MyPhotosScreen} 
        options={{
          tabBarActiveTintColor: color.buttonColor1,
          tabBarLabel: 'MyPhotos',
          tabBarIcon: ()=>(<Image style={{tintColor:color.buttonColor1}} source={require('../../utils/images/tab/photos.png')} resizeMode={'contain'}/>)
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarActiveTintColor: color.buttonColor1,
          tabBarLabel: 'Profile',
          tabBarIcon: ()=>(<Image  style={{tintColor:color.buttonColor1}} source={require('../../utils/images/tab/profile.png')} resizeMode={'contain'}/>)
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabs