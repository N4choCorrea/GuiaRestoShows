import { StyleSheet, Text, View, Image, FlatList, TextInput,SafeAreaView } from 'react-native';
import CardResto from './CardResto';
import React from 'react';
import {useStore  } from '../store/StoreProvider';

export default function RestoCarrousel({navigation}) {
    const [store,dispatch] = useStore ();
    const {restaurants} = store;

    const renderRestaurant = ({item}) => {
      if (item.importance === 1) {
        return (
        <CardResto 
        navigation={navigation}  
        details={item.details} 
        ScreenResto="ScreenResto" 
        name={item.name} 
        imagePath={item.image} 
        menu={item.menu}/>
      );
    }
    return null;
    }

      return (
        <View style={styles.container}>
        <FlatList 
          data={restaurants}
          renderItem={renderRestaurant}
          keyExtractor={item => item.name}
          horizontal={true}
          />
        </View>
        );
        }
        
const styles = StyleSheet.create({
  container: {
  marginBottom: 20,
  backgroundColor: '#F9E4B7',
  borderRadius: 20, 
  padding: 5, 
  marginTop: 10,
  },
  flatListContent: {
  paddingHorizontal: 10,
  },
});