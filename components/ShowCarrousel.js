import { StyleSheet, Text, View, Image, FlatList, TextInput,SafeAreaView } from 'react-native';
import React from 'react';
import CardShow from './CardShow';
import {useStore } from '../store/StoreProvider';

export default function ShowCarrousel({navigation}) {
    const [store,dispatch] = useStore ();
    const {shows} = store;

    const renderShow = ({ item }) => {
      if (item.importance === 1) {
        return (
          <CardShow
            navigation={navigation}
            details={item.details}
            ScreenShow="ScreenShow"
            name={item.name}
            imagePath={item.image}
            fechas={item.fechas}
          />
        );
      }
      return null;
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={shows}
          renderItem={renderShow}
          keyExtractor={(item) => item.image}
          horizontal={true}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      marginTop: 280,
      marginBottom: 0,
      backgroundColor: '#F9E4B7', 
      borderRadius: 20, 
      padding: 1, 
    },
    flatListContent: {
      paddingHorizontal: 10,
    },
  });