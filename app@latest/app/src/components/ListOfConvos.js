import React, { useState, useEffect } from 'react';
import { View, FlatList, Pressable, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';

export const ListOfConvos = ({ navigation }) => {
    
    const userList = [
        { id: 101, name: 'Jakob Curtis', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.JCY8Mn3lV_ft3t0ouGOTGgHaEo%3Fr%3D0%26pid%3DApi&f=1&ipt=ed5211787684bdb8d3f077cf2fe249ca0e665192448312c60103cf25e776dd61&ipo=images' },
        { id: 202, name: 'Anna Martinez', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F234990.jpg&f=1&nofb=1&ipt=bb42d9da556209f273bb682b8fae5962f55c6d4c36e99e9dd574fefc66432a85' },
        { id: 303, name: 'Liam Foster', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.sf9TyMMVMbwS0BRso1r63QHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=c95866efa276e32c10151b88a99d6ebd31fb2974f6d822227b7d868c4cbc0c8b&ipo=images' },
        { id: 404, name: 'Sophie Nguyen', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.7cLMuCy_fhnHMID2FHh9lgHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=29cb55aa1f3a430b2c50a8c69ee23d02e11975150dbf9978d56078b1471d7d1e&ipo=images' },
        { id: 505, name: 'Dylan Chen', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.ylVRgSRPOlqZnjTE35LZsQHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=d985223ec4019451cb3c3b77ea00d3de9f7fda1699a2990f2a4ca3cd70ca1758&ipo=images' },
    ];

    const conversationsList = [
        { id: 1, userId: 101, text: 'Genetically advanced agriculture could change our future.' },
        { id: 2, userId: 202, text: 'Let’s sync up after lunch and review the PRs.' },
        { id: 3, userId: 303, text: 'Just saw the craziest thing on the train ride this morning.' },
        { id: 4, userId: 404, text: 'After the 2000 census, Davis redrew his district...' },
        { id: 5, userId: 505, text: 'Performance-enhancing drugs in sports are controversial, for sure.' },
    ];

  
  const renderItem = ({ item }) => {
    const currentUser = userList.filter(
      (user) => user.id === item.userId
    );

    return (
      <Pressable
        onPress={() => navigation.navigate("Messages", {
          name: currentUser[0].name,
          avatar: currentUser[0].url
        })}
        style={{
          height: 103,
          backgroundColor: "rgb(228, 226, 226)",
          borderRadius: 15,
          marginBottom: 16,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 67,
            height: 67,
            borderRadius: 35,
            borderWidth: 1,
            marginHorizontal: 17,
          }}
        >
          <Image
            style={{
              width: 61,
              height: 61,
              borderRadius: 35,
              marginTop: 2,
              marginLeft: 2,
            }}
            source={{
              uri: currentUser[0].url,
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 14, paddingBottom: 9 }}>
            {currentUser[0].name}
          </Text>
          <Text style={{ color: "#656565", width: "65%" }}>
            {item.text}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 50,
      }}
    >
      <FlatList
        data={conversationsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={119}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ height: 0 }} />}
      />
    </View>
  );
};
