import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TextInput,SafeAreaView } from 'react-native';
import React from 'react';
import CardShow from './CardShow';
import {useStore } from '../store/StoreProvider';

export default function ShowCarrousel({navigation}) {
    const [store,dispatch] = useStore ();
    const {shows} = store;

    const renderShow = ({item }) => (
        <CardShow navigation={navigation} details={item.details} ScreenShow="ScreenShow" name={item.name} imagePath={item.image}/>
      );
    return (    
        <View style={styles.container}>
    <FlatList 
      data={shows}
      renderItem={renderShow}
      keyExtractor={item => item.image}
      horizontal={true}
      />
    </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });