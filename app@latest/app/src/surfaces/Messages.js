import React from 'react';
import { View, Text, Image } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListOfMessages } from '../components/ListOfMessages';

const Messages = ({ route }) => {
  const headerHeight = useHeaderHeight();
  console.log("log route in message surface", JSON.stringify(route))

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight, backgroundColor: "black"}}>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#ffffff",
          position: "absolute",
          top: 190,
          left: -290,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 70,
        }}
      >
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 35,
            borderColor: "white",
            borderWidth: 1,
            transform: [{ rotate: "-45deg" }],
            position: "absolute",
            top: -3,
            left: -3,
          }}
        />
        <Image
          style={{ height: 50, width: 50, borderRadius: 40 }}
          source={{
            uri: route.params.avatar,
          }}
        />
      </View>
      <ListOfMessages conversationId="2" />
    </SafeAreaView>
  );
};
export default Messages;