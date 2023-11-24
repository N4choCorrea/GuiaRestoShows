import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useStore } from '../store/StoreProvider';
import CardResto from './CardResto';
import CardShow from './CardShow';

const GeneralDetailsScreen = ({ navigation }) => {
  const [store] = useStore();
  const { restaurants, shows } = store;

  const renderResto = ({ item }) => (
    <CardResto
      navigation={navigation}
      ScreenResto="ScreenResto"
      imagePath={item.image}
      name={item.name}
      details={item.details}
      menu={item.menu}
      fechas={item.fechas}
    />
  );

  const renderShow = ({ item }) => (
    <CardShow
      navigation={navigation}
      ScreenShow="ScreenShow"
      imagePath={item.image}
      name={item.name}
      details={item.details}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Restaurantes</Text>
        <FlatList
          data={restaurants}
          renderItem={renderResto}
          keyExtractor={(item) => item.name}
          horizontal={false}
        />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Shows</Text>
        <FlatList
          data={shows}
          renderItem={renderShow}
          keyExtractor={(item) => item.name}
          horizontal={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 1,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default GeneralDetailsScreen;
