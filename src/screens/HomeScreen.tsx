import React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export function HomeScreen({ navigation }: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>

      <Button
        title="Gallery"
        onPress={() => navigation.navigate("gallery")}
      />

      <StatusBar style="auto" />
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
    color: "white",
  }
});