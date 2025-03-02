import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import HomeScreen from "./components/Screens/HomeScreen";
import AddUserScreen from "./components/Screens/AddUserScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions=
      {{
        tabBarStyle: {
          backgroundColor: "#596E7F",
        },
        headerStyle: {
          backgroundColor: "#596E7F",
        },
        headerTitleStyle: {
          color: "rgb(255, 255, 255)",
        },
        headerShadowVisible: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "rgb(202, 227, 253)",
      }}
      >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              size={24}
              color="black"
              selectionColor="white"
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Feather name="user-plus" size={24} color="black" />
          ),
        }}
        name="AddUser"
        component={AddUserScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
