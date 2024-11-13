import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {styles} from '../../screens/Home/style'

type PinProps = {
  pin: {
    id: string;
    image: string;
    title: JSX.Element;
    username: string;
    points: string;
  };
};

const Pin: React.FC<PinProps> = ({ pin }) => {
  return (
    <View style={styles.pinContainer}>
      <Image source={{ uri: pin.image }} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{pin.username}</Text>
        <Text style={styles.points}>{pin.points}</Text>
      </View>
      {pin.title}
    </View>
  );
};

export default Pin;