import React from "react";
import { View, TextInput, Pressable } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ListOfConvos } from "../components/ListOfConvos";

export const Conversations = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 80, backgroundColor: "black" }}>
      <View style={{ marginHorizontal:10, position: "relative", backgroundColor: "black" }}>
        <View>
          <TextInput
            style={{
              fontSize: 14,
              paddingVertical: 12,
              paddingLeft: 40,
              marginHorizontal: 0,
              borderRadius: 10,
              backgroundColor: "#ffffff",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 9,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder="search contacts"
          />
          <Ionicons
            name="search"
            size={24}
            color="#000000"
            style={{ position: "absolute", left: 10, top: 10 }}
          />
        </View>
        <ListOfConvos navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
export default Conversations;