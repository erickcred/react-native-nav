import { StyleSheet, Text, View } from "react-native";

export function GroupPersonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GourpPersonScreen</Text>
    </View>
  )
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
})