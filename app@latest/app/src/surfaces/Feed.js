import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import ListOfAvatars from "../components/ListOfAvatars";
import ListOfCards from "../components/ListOfCards";

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
        <ListOfAvatars />
        <ListOfCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 0,
  },
});
