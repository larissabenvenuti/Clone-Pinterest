import React from "react";
import { ScrollView, View, TouchableOpacity, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";

interface PinType {
  id: string;
  image: {uri: string};
  title: JSX.Element;
  username: string;
  points: string;
  height: number;
}

const pins: PinType[] = [
  {
    id: "0",
    image: require("../../assets/foto_1.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "john_doe",
    points: "...",
    height: 120,
  },
  {
    id: "1",
    image: require("../../assets/foto_2.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "mary_smith",
    points: "...",
    height: 140,
  },
  {
    id: "2",
    image: require("../../assets/foto_3.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "paul_brown",
    points: "...",
    height: 130,
  },
  {
    id: "3",
    image: require("../../assets/foto_4.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "lisa_white",
    points: "...",
    height: 150,
  },
  {
    id: "4",
    image: require("../../assets/foto_5.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "david_green",
    points: "...",
    height: 120,
  },
  {
    id: "5",
    image: require("../../assets/foto_6.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "emily_jones",
    points: "...",
    height: 180,
  },
  {
    id: "6",
    image: require("../../assets/foto_7.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "iza_martins",
    points: "...",
    height: 140,
  },
  {
    id: "7",
    image: require("../../assets/foto_8.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "anna_wilson",
    points: "...",
    height: 130,
  },
  {
    id: "8",
    image: require("../../assets/foto_9.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "george_clark",
    points: "...",
    height: 180,
  },
  {
    id: "9",
    image: require("../../assets/foto_10.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "susan_lee",
    points: "...",
    height: 160,
  },
  {
    id: "10",
    image: require("../../assets/foto_11.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "alex_garcia",
    points: "...",
    height: 200,
  },
  {
    id: "11",
    image: require("../../assets/foto_12.jpeg"),
    title: <FontAwesome name="user-circle" size={18} color="#333" />,
    username: "guto_soarez",
    points: "...",
    height: 130,
  },
];
export function Home() {
  return (
    <View style={styles.container}>
    <ScrollView>
       <View style={styles.topMenu}>
        <TouchableOpacity>
        <Text style={[styles.menuItem, styles.underlined]}>Tudo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItem}>Outfit Inspo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItem}>Room Inspo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuItem}>Tech Inspo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins
            .filter((item, index) => index % 2 === 0)
            .map((pin) => (
              <View style={styles.pinContainer} key={pin.id}>
                <Image
                  source={pin.image}
                  style={[styles.image, { height: pin.height }]}
                />
                <View style={styles.userInfo}>
                  {pin.title}
                  <Text style={styles.username}>{pin.username}</Text>
                  <Text style={styles.points}>{pin.points}</Text>
                </View>
              </View>
            ))}
        </View>
        <View style={styles.column}>
          {pins
            .filter((item, index) => index % 2 === 1)
            .map((pin) => (
              <View style={styles.pinContainer} key={pin.id}>
                <Image
                  source={pin.image}
                  style={[styles.image, { height: pin.height }]}
                />
                <View style={styles.userInfo}>
                  {pin.title}
                  <Text style={styles.username}>{pin.username}</Text>
                  <Text style={styles.points}>{pin.points}</Text>
                </View>
              </View>
            ))}
        </View>
      </View>

    </ScrollView>

     <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <FontAwesome name="home" size={30} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="search" size={30} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="plus" size={30} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="comments" size={30} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user" size={30} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}