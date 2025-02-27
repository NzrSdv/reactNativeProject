import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function AddingUserComponent() {
  const users = useSelector((state) => state.user.users);

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="rgb(190,190,190)"
        style={styles.input}
        placeholder="First name"
        inputMode="text"
      />
      <TextInput
        placeholderTextColor="rgb(190,190,190)"
        style={styles.input}
        placeholder="Last name"
        inputMode="text"

      />
      <TextInput
        placeholderTextColor="rgb(190,190,190)"
        style={styles.input}
        placeholder="Email"
        inputMode="email"
      />
      <TextInput
        placeholderTextColor="rgb(190,190,190)"
        style={styles.input}
        placeholder="Avatar"
        inputMode="url"
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="royalblue"
        style={styles.button}
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
    paddingVertical:5,
    textAlign: "center",
    color: "white",
    fontSize:17
  },
  button:{
    borderWidth:2,
    borderRadius:10,
    borderColor:'white',
    paddingHorizontal:20,
    paddingVertical:5,
  },
  buttonText:{
    color:'white',
    fontSize:17,
    fontWeight:600
  }
});
