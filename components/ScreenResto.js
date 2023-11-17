import React from 'react';
import { View, Image, Text } from 'react-native';

const ScreenResto = ({ route }) => {
  const { imagePath, name, details } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={imagePath} style={{ width: 200, height: 200 }} />
      <Text>{name}</Text>
      <Text>{details}</Text>
    </View>
  );
};

export default ScreenResto;
