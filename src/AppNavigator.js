import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './screens';
import BottomTabs from './screens/app';

const RootStack = createNativeStackNavigator();

function AppNaviigator() {

    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false}}>
          <RootStack.Screen name='Auth' component={AuthStack}/>
          <RootStack.Screen name='App' component={BottomTabs}/>
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNaviigator;