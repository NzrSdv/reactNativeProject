import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UsersListComponent from "../elements/UsersListComponent";

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <UsersListComponent params={route.params} navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
