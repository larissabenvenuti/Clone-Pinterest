import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';
import { ImageSourcePropType } from 'react-native';
import foto_1 from '../../assets/foto_1.jpeg';
import foto_2 from '../../assets/foto_2.jpeg';
import foto_3 from '../../assets/foto_3.jpeg';
import foto_4 from '../../assets/foto_4.jpeg';
import foto_5 from '../../assets/foto_5.jpeg';
import foto_6 from '../../assets/foto_6.jpeg';

type ImageData = {
  id: string;
  img: ImageSourcePropType;
  username: string;
};

const images: ImageData[] = [
  { id: '1', img: foto_1, username: 'john_doe' },
  { id: '2', img: foto_2, username: 'mary_smith' },
  { id: '3', img: foto_3, username: 'paul_brown' },
  { id: '4', img: foto_4, username: 'lisa_white' },
  { id: '5', img: foto_5, username: 'david_green' },
  { id: '6', img: foto_6, username: 'emily_jones' },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.containerImage}>
            <Image 
              source={item.img} 
              style={styles.image} 
            />

            <View style={styles.userInfo}>
              <FontAwesome name="user-circle" size={20} color="#333" />
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.points}>...</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.grid}
      />
      <View style={styles.menu}>
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
};

export { Home };
