import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function UsersListComponent() {
  const users = useSelector((state) => state.user.users);
  return <FlatList data={users?.length ? users : []} 
  keyExtractor={(iteuser,index) => index}
  renderItem={({item}) => <View>
    <ImageBackground source={{uri:item.avatar}} resizeMode="contain" style={styles.image}></ImageBackground>
    <Text>{item.first_name}</Text>
  </View>}
  />;
}

const styles = StyleSheet.create({
    image:{
        width:100
    }
});
