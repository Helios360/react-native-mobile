import React from 'react';
import {
  View,
  FlatList,
  Pressable,
  Image,
  useWindowDimensions,
} from 'react-native';
import ImageGrid from './ImageGrid';
const data = [
    {
      itemId: 101,
      authorId: 11,
      timeStamp: '2 hrs ago',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.fp8kNlKj96YBoaDXF_de3QHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=f7a4b1976bfb4899700a0f296bde1e8617562711df7b758fba9067e302c2ccce&ipo=images',
      likes: '28',
      conversations: '12',
    },
    {
      itemId: 102,
      authorId: 1,
      timeStamp: '1 week ago',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.ipm-qsHbljTFWA4ddJKgUwHaFj%3Fr%3D0%26pid%3DApi&f=1&ipt=ff2a5fe85894b502ba11b715692c2877b5e07477ceb1b192513c8c8c293c1b63&ipo=images',
      likes: '80',
      conversations: '123',
    },
    {
      itemId: 108,
      authorId: 6,
      timeStamp: '5 hrs ago',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdwallpaperim.com%2Fwp-content%2Fuploads%2F2017%2F08%2F25%2F455641-space-stars-galaxy-nebula-space_art.jpg&f=1&nofb=1&ipt=a9dbf2cb71641c459fe45b3d7cc4034f353f9bcff7920b3084954988f447a195',
      likes: '79',
      conversations: '16',
    },
  ];

export const AddedImages = () => <ImageGrid data={data} imageHeight={220} imageWidthRatio={0.4} />;
