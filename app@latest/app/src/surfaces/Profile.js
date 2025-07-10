import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default Profile = () => {
  return (
    <View style={styles.container}>
      <Text>this will be the Profile screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 0,
  },
});