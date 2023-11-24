import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { useStore } from '../store/StoreProvider';

export default function SearchBar({ navigation }) {
  const [store, dispatch] = useStore();
  const { restaurants, shows } = store;

  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dataSuggestions = [...restaurants, ...shows].filter(
    (item) => item.name.toLowerCase().includes(query.toLowerCase())
  );

  const renderSuggestions = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => {
        Keyboard.dismiss();
        // Navegar a la pantalla correspondiente según el tipo (restaurant o show)
        const screenName = item.hasOwnProperty('menu') ? 'ScreenResto' : 'ScreenShow';
        navigation.navigate(screenName, {
          imagePath: item.image,
          name: item.name,
          details: item.details,
          menu: item.menu,
          fechas: item.fechas,
        });
      }}
      >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setQuery(text);
          setShowSuggestions(text.length >= 3);
        }}
        value={query}
        placeholder='Search'
      />

      {showSuggestions && (
        <FlatList
          style={styles.suggestionItem}
          data= {dataSuggestions}
          renderItem={renderSuggestions}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
    borderRadius: 5,
    width: 200,
  },
  suggestionList: {
    marginTop: 5,
  },
  suggestionItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});