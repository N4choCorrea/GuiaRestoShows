import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TextInput,SafeAreaView, Button } from 'react-native';
import React from 'react';
import SearchBar from './components/SearchBar';
import RestoCarrousel from './components/RestoCarrousel';
import ShowCarrousel from './components/ShowCarrousel';
import ScreenResto from './components/ScreenResto';
import ScreenShow from './components/ScreenShow';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  StoreProvider from './store/StoreProvider'
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();
export default function App() {
   
  return (
    <StoreProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="ScreenResto" component={ScreenResto} />
         <Stack.Screen name="ScreenShow" component={ScreenShow} />
      </Stack.Navigator>
    
      </NavigationContainer>
    </StoreProvider>
  );
}

// function HomeScreen({navigation }) {
  
//   return (
    
//     <View style={styles.container}>
//        <ShowCarrousel navigation={navigation}/> 

      
//       <SearchBar/>


//       <RestoCarrousel navigation={navigation}/>

      
    
//     </View>
//   );
// }






