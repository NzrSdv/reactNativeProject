

import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "./slices/AsyncUsers";
import { addUser, setUsers } from "./slices/UsersSlice";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import UserScreen from "./components/Screens/UserScreen";
import TabNavigator from "./TabNavigator"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()
;
export default function App() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetUsersQuery();
  if (!isLoading && !error) {
    dispatch(setUsers(data.data));
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Tabs" component={TabNavigator}/>
        <Stack.Screen name="User" component={UserScreen}/>
    </Stack.Navigator>
      
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
