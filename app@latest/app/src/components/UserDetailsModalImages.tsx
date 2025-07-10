import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootState } from '../store/store';
import Loading from './Loading';
import { requestBase } from '../utils/constants';


export type ImageItem = {
  itemId: number;
  url: string;
  likes: number;
  conversations: number;
};

type RootStackParamList = {
  UserDetailsModalImages: { imageItem: ImageItem };
};

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetailsModalImages'>;


export const UserDetailsModalImages: React.FC<Props> = ({ navigation, route }) => {
  const randomImageSet = Math.round(Math.random() * 3);
  const [imageList, setImageList] = useState<{ listOfItems: ImageItem[] } | null>(null);
  const { width, height } = useWindowDimensions();

  const likedImages = useSelector((state: RootState) => state.likedImages.likedImages);

  const isLiked = likedImages.some((fav: ImageItem) => fav.itemId === route.params.imageItem.itemId);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch(`${requestBase}/userImages/${randomImageSet}.json`);
        const data = await response.json();
        setImageList(data);
      } catch (error) {
        console.error('Failed to fetch image data:', error);
      }
    };

    fetchImageData();
  }, []);

  if (!imageList) {
    return <Loading message="Loading image list..." />;
  }

  const renderItem = ({ item }: { item: ImageItem }) => (
    <Image
      style={[
        styles.image,
        {
          height: height * 0.6,
          width: width * 0.75,
        },
      ]}
      source={{ uri: item.url }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList.listOfItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.825}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ width: width * 0.1 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  image: {
    borderRadius: 28,
    marginRight: 30,
  },
});
