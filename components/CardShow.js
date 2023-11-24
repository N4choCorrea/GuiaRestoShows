import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';



const CardShow = ({ navigation, ScreenShow, imagePath, name, details, fechas}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(ScreenShow, {imagePath, name, details,fechas})}
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
        height: 250,
        }, 
        image: {
             width: '100%',
            height: '100%',
        },
    });

export default CardShow;