import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';


const CardResto = ({ navigation, ScreenResto, imagePath, name, details, menu }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenResto, { imagePath, name, details ,menu})}
        style={styles.card}
      >
        <Image source={imagePath} style={styles.image} />
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        width: 150,
         height: 150,
        }, 
        image: {
          width: '100%',
          height: '100%',
          },
      });

export default CardResto;
