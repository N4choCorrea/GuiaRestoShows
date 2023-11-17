import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

const ScreenShow = ({ route }) => {
  const { imagePath, name, details, menu } = route.params;
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={imagePath} style={{ width: 200, height: 200 }} />
      <Text>{name}</Text>
      <Text>{details}</Text>

      {/* Botón para mostrar/ocultar la lista */}
      <TouchableOpacity onPress={toggleDropdown} style={{ marginTop: 10 }}>
        <Text>Mostrar Menú</Text>
      </TouchableOpacity>

      {/* Lista */}
      {isDropdownVisible && (
        <FlatList
          style={{ marginTop: 10 }}
          data={menu}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )}
    </View>
  );
};

export default ScreenShow;

