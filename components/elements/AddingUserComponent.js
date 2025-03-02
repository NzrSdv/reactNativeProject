import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setUsers } from "../../slices/UsersSlice";

export default function AddingUserComponent({ navigation }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="rgb(190,190,190)"
        style={styles.input}
        placeholder="First name"
        inputMode="text"
        value={fname}
        onChangeText={(text) => {
          setFname(text);
        }}
      />
      <TextInput
        placeholderTextColor="rgb(190,190,190)"
        style={styles.input}
        placeholder="Last name"
        inputMode="text"
        value={lname}
        onChangeText={(text) => {
          setLname(text);
        }}
      />
      <TextInput
        placeholderTextColor="rgb(190,190,190)"
        style={styles.input}
        placeholder="Email"
        inputMode="email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        placeholderTextColor="rgb(190,190,190)"
        style={styles.input}
        placeholder="Avatar url"
        inputMode="url"
        value={avatar}
        onChangeText={(text) => {
          setAvatar(text);
        }}
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="royalblue"
        style={styles.button}
        onPress={() => {
          dispatch(setUsers([...users,{
            id: Date.now(),
            first_name: fname,
            last_name: lname,
            email: email,
            avatar: avatar,
          }]))
          navigation.navigate("Home");
          setFname("");
          setLname("");
          setEmail("");
          setAvatar("");
        }}
      >
        <Text style={styles.buttonText}>Create</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: "center",
    gap: 20,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 10,
    backgroundColor: "steelblue",
  },
  input: {
    borderBottomColor: "#C0CCC2",
    borderBottomWidth: 1,
    width: "60%",
    paddingVertical: 5,
    textAlign: "center",
    color: "white",
    fontSize: 17,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: 600,
  },
});
