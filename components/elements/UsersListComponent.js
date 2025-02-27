import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";

export default function UsersListComponent({isLoading}) {
  const users = useSelector((state) => state.user.users);
  if(!isLoading){
    return (
      <FlatList
        data={users?.length ? users : []}
        keyExtractor={(user, index) => index}
        renderItem={({ item }) => (
          <View style={styles.flatListRow}>
            <ImageBackground
              source={{ uri: item.avatar }}
              resizeMode="contain"
              style={styles.image}
            ></ImageBackground>
            <Text style={styles.name}>{item.first_name}</Text>
          </View>
        )}
      />
    );
  }
  else{
    return (<LoadingComponent/>)
  }
}

const styles = StyleSheet.create({
  flatListRow: {
    flexDirection: "row",
    width:300,
    justifyContent:"flex-start",
    alignItems:'center',
    gap:10,
    marginTop:20,
    padding:5,
    borderRadius:10,
    backgroundColor:'steelblue'
  },
  image: {
    width: 70,
    aspectRatio: 1,
    borderRadius:'50%',
    overflow:'hidden'
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    color:'white'
  },
});
