import React from 'react';
import ScreenResto from './components/ScreenResto';
import ScreenShow from './components/ScreenShow';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  StoreProvider from './store/StoreProvider'
import HomeScreen from './components/HomeScreen';
import GeneralDetailsScreen from './components/GeneralDetailsScreen';

const Stack = createStackNavigator();
export default function App() {
   
  return (
    <StoreProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="ScreenResto" component={ScreenResto} />
         <Stack.Screen name="ScreenShow" component={ScreenShow} />
          <Stack.Screen name="GeneralDetailsScreen" component={GeneralDetailsScreen} />
      </Stack.Navigator>
    
      </NavigationContainer>
    </StoreProvider>
  );
}







