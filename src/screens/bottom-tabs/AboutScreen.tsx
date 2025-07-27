import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AboutScreen</Text>
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