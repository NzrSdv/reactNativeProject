
import { useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "./slices/AsyncUsers";
import { addUser } from "./slices/UsersSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/Screens/HomeScreen";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    const { data, isLoading, error } = useGetUsersQuery();
    if(error){
      console.log(`Fetch error \n${error}`)
    }
    if(!isLoading){
      data.data.forEach(user => {
        dispatch(addUser(user))
      });
    }
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
