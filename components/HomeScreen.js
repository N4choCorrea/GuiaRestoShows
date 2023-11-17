import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestoCarrousel from '../components/RestoCarrousel';
import ShowCarrousel from '../components/ShowCarrousel';
 function HomeScreen({navigation }) {
  
  return (
    
    <View style={styles.container}>
       <ShowCarrousel navigation={navigation}/> 

      
      <SearchBar/>


      <RestoCarrousel navigation={navigation}/>

      
    
    </View>
   );
 }

    export default HomeScreen;

 const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });