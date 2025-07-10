import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { UserListContext } from '../context/UserContext';

export const Card = ({ item, navigation }) => {
  return (
    <UserListContext.Consumer>
      {({ userList }) => {
        const currentUser = userList.filter(user => user.id === item.authorId);

        return (
          <Pressable
            onPress={() =>
              navigation.navigate('ImageDetailsModal', { imageItem: item })
            }
          >
            {/* Main Post Image */}
            <Image
              style={{
                width: '100%',
                height: 288,
                borderRadius: 20,
                marginBottom: 32,
              }}
              source={{ uri: item.url }}
            />

            {/* User Info Overlay */}
            <View
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 20,
                  marginRight: 8,
                }}
                source={{ uri: currentUser[0]?.url }}
              />

              <View>
                <Text style={{ color: '#ffffff', fontSize: 12 }}>
                  {currentUser[0]?.name}
                </Text>
                <Text style={{ color: '#B0B0B0', fontSize: 12 }}>2 hrs ago</Text>
              </View>
            </View>
          </Pressable>
        );
      }}
    </UserListContext.Consumer>
  );
};
