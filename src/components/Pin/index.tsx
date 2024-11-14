import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../screens/Home/style";

interface PropsPin {
  pinImage: string;
  pinUsername: string;
  pinPoints: string;
}

export const Pin = ({ pinImage, pinUsername, pinPoints }: PropsPin) => (
  <View style={styles.pinContainer}>
    <Image source={{ uri: pinImage }} style={styles.image} />
    <View style={styles.userInfo}>
      <Text style={styles.username}>{pinUsername}</Text>
      <Text style={styles.points}>{pinPoints}</Text>
    </View>
  </View>
);
