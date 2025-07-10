import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Card } from "../components/ListOfCards";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const screenWidth = Dimensions.get('window').width;

export const ListOfFavorites = ({ navigation }) => {
  const likedImages = useSelector((state) => state.likedImages.likedImages);
  const [imageList, setImageList] = useState([]);

  if (!imageList) {
    return <Loading message="loading image list" />;
  }

  useEffect(() => {
    const reversedImages = [...likedImages].reverse();
    setImageList(reversedImages);
  }, [likedImages]);

  const renderItem = ({ item }) => {
    return <Card item={item} navigation={navigation} />;
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        snapToInterval={32}
        decelerationRate={fast}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: (screenWidth - 30) / 2,
    height: 180,
    borderRadius: 15,
    margin: 5,
  },
  grid: {
    padding: 10,
  },
});
