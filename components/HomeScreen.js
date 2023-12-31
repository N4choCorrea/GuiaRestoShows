import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestoCarrousel from '../components/RestoCarrousel';
import ShowCarrousel from '../components/ShowCarrousel';
import GeneralButton from './GeneralButton';

 function HomeScreen({navigation }) {
  
  return (
    
    <View style={styles.container}>
       <ShowCarrousel navigation={navigation}/> 


      <GeneralButton navigation={navigation}/>


      <SearchBar navigation={navigation}/>


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