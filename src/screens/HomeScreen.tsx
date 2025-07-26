import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StatusBar, StyleSheet } from "react-native";
import { Text, View } from "react-native";

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>

      <Button
        title="Gallery"
        onPress={() => navigation.navigate("gallery")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    color: "white",
  }
});