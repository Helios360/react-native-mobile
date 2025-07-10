import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileStatistics } from '../components/ProfileStatistics';
import { AddedImages } from '../components/AddedImages';
import { FavoritedImages } from '../components/FavoritedImages';
import { Ionicons } from '@expo/vector-icons';

export const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"black" }}>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: '#EFE2F2',
          position: 'absolute',
          top: -210,
          left: -120,
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: 'white',
          position: 'absolute',
          top: 260,
          left: -120,
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          position: 'absolute',
          top: 320,
          left: -120,
          backgroundColor: 'rgb(26, 26, 26)',
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View style={{ paddingTop: 50 }}>
        <View
          style={{
            width: 96,
            height: 96,
            borderRadius: 35,
            borderColor: 'white',
            borderWidth: 1,
            transform: [{ rotate: '-45deg' }],
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            overflow: 'hidden',
            alignSelf: 'center',
            borderRadius: 50,
            height: 87,
            width: 87,
            marginTop: -92,
          }}
        >
          <Image
            style={{
              height: 105,
              width: 105,
              alignSelf: 'center',
            }}
            source={{
              uri: 'https://randomuser.me/api/portraits/men/9.jpg',
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins_700Bold',
            fontSize: 26,
            alignSelf: 'center',
            marginTop: 30,
            color:"white",
          }}
        >
          John Doe
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins_400Regular',
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 10,
            color:"white",
          }}
        >
          @johndoe
        </Text>
        <ProfileStatistics/>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="image-outline" color="white" size={30} />
            <AddedImages />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="bookmark-outline" color="white" size={30} />
            <FavoritedImages />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
