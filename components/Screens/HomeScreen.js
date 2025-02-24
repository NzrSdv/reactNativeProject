import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UsersListComponent from "../elements/UsersListComponent";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <UsersListComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
