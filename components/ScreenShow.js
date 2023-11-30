import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ScreenShow = ({ route }) => {
  const { imagePath, name, details, fechas } = route.params;
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.imageContainer}>
        <Image source={imagePath} style={styles.image} />
      </View>

      
      <View style={styles.detailsAndMapContainer}>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{details}</Text>
        </View>

        
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -34.9619,
              longitude: -54.945,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
           
            <Marker
              coordinate={{ latitude: -34.940625544045474, longitude: -54.934435061549735 }}
              title="Ubicación"
              description="Descripción de la ubicación"
            />
          </MapView>
        </View>
      </View>

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleDropdown}>
          <Text>Mostrar fechas</Text>
        </TouchableOpacity>
      </View>

      
      {isDropdownVisible && (
        <FlatList
          style={styles.dropdownList}
          data={fechas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsAndMapContainer: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dropdownList: {
    alignSelf: 'center',
    marginVertical: 10,
    width: '80%',
    zIndex: 1,
  },
  map: {
    width: '100%',
    aspectRatio: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 12,
  },
  
});

export default ScreenShow;