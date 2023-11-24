import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const GeneralButton = ({ navigation, GeneralDetailsScreen }) => {
    return (
        <TouchableOpacity 
        onPress={() =>navigation.navigate("GeneralDetailsScreen")}
        style={styles.button}>
        <Text style={styles.buttonText}>Observa todo nuestro catalogo</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#ffd7ab',
      padding: 10,
      borderRadius: 5,
      margin: 10,
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
      textAlign: 'center',
    },
  });

export default GeneralButton;