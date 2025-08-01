import React from "react";
import { Button, StatusBar, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export function GalleryScreen({ navigation }: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GalleryScreen</Text>

      <Button
        title="Home"
        onPress={() => navigation.goBack("home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1b1b1ff",
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    color: "white"
  }
});