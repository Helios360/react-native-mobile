import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

const Favorites = () => {
  const likedImages = useSelector((state) => state.likedImages.likedImages);
  const loading = useSelector((state) => state.likedImages.loading);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const reversed = [...likedImages].reverse();
    setImageList(reversed);
  }, [likedImages]);

  const renderItem = ({ item }) => (
    <Image
      style={styles.image}
      source={{ uri: item.url }}
    />
  );

  if (loading) {
    return <Loading message="Loading your favorites..." />;
  }

  if (imageList.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorites yet. Start liking some images!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  grid: {
    gap: 10,
    paddingBottom: 20,
  },
  image: {
    width: (screenWidth - 30) / 2,
    height: 180,
    borderRadius: 15,
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
});
