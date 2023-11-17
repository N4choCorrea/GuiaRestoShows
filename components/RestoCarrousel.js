
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TextInput,SafeAreaView } from 'react-native';
import CardResto from './CardResto';
import React from 'react';
import {useStore  } from '../store/StoreProvider';

export default function RestoCarrousel({navigation}) {
    const [store,dispatch] = useStore ();
    const {restaurants} = store;

    const renderRestaurant = ({item}) => (
        <CardResto navigation={navigation}  details={item.details} ScreenResto="ScreenResto" name={item.name} imagePath={item.image}/>
      );

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
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            },
          })