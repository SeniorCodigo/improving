import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen  from './MainScreen'
import MyPhotosScreen from './MyPhotosScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" 
             options={{
                tabBarLabel: 'Main',
    
              }}
        component={MainScreen} 
        />
      <Tab.Screen name="MyPhotos" component={MyPhotosScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabs