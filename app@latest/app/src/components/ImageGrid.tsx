import React from 'react';
import { FlatList, Image, View, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface ImageItem {
  id: number | string;
  url: string;
}

interface ImageGridProps {
  data: ImageItem[];
  imageHeight?: number;
  imageWidthRatio?: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ data, imageHeight = 180, imageWidthRatio = 0.5 }) => {
  const imageWidth = screenWidth * imageWidthRatio;

  const renderItem = ({ item }: { item: ImageItem }) => (
    <View style={[styles.imageContainer, { width: imageWidth, height: imageHeight }]}>
      <Image
        source={{ uri: item.url }}
        style={[styles.image, { width: imageWidth, height: imageHeight }]}
      />
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => (item?.id ?? index).toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageContainer: {
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 20,
  },
});

export default ImageGrid;
