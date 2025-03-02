import { ImageBackground, StyleSheet, Text, View ,Button} from "react-native";
import React from "react";


export default function UserScreen({route}) {
    const user = route.params.user;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <ImageBackground
          source={{ uri: user.avatar }}
          resizeMode="contain"
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.name}>{user.first_name}</Text>
      </View>
      <View>
        <Button
          title="Delete"
          color="rgb(255, 46, 46)"
          onPress={() => {
            dispatch(removeUser(item.id));
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListRow: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "steelblue",
  },
  image: {
    width: 70,
    aspectRatio: 1,
    borderRadius: "50%",
    overflow: "hidden",
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    color: "white",
  },
});
