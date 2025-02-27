import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UsersListComponent from "../elements/UsersListComponent";

export default function HomeScreen({isLoading}) {
  return (
    <View style={styles.container}>
      <UsersListComponent isLoading={isLoading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  },
});
