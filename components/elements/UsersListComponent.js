import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../slices/UsersSlice";

export default function UsersListComponent({ navigation, params }) {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.user.users);
  const [refresh, setRefresh] = useState(false);
  if (params?.user) {
    dispatch(addUser(params.user));
  }
  function makeRefresh() {
    setRefresh(true);
    setTimeout(() => {
      if (params.user != undefined) {
      }
      setRefresh(false);
    }, 500);
  }
  return users.length ? (
    <>
      <FlatList
        data={users?.length ? users : []}
        keyExtractor={(user, index) => index}
        refreshing={refresh}
        onRefresh={makeRefresh}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.2}
            onLongPress={() => navigation.navigate("User",{user: item })}
          >
            <View style={styles.flatListRow}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <ImageBackground
                  source={{ uri: item.avatar }}
                  resizeMode="contain"
                  style={styles.image}
                ></ImageBackground>
                <Text style={styles.name}>{item.first_name}</Text>
              </View>
              <Button
                title="Delete"
                color="rgb(255, 46, 46)"
                onPress={() => {
                  dispatch(removeUser(item.id));
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  ) : (
    <Text style={{ fontWeight: 600, fontSize: 20 }}> no users</Text>
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
