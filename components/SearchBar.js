import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {useStore} from '../store/StoreProvider';

export default function SearchBar() {
  
  const [store,dispatch] =  useStore();
 const {autoData} = store;

  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  //console.log("store = ", store); 
  //console.log("autoData = ", autoData);  
 const dataSuggestions =  autoData.filter(item => item.toLowerCase().includes(query.toLowerCase()));

 

  const renderSuggestions = ({ item }) => <Text style={styles.suggestionItem}>{item}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => {
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
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 8,
    width: 100,
  },
  suggestionItem: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

