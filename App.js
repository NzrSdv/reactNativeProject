import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from '@expo/vector-icons/Feather';

import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "./slices/AsyncUsers";
import { addUser, setUsers } from "./slices/UsersSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import LoadingComponent from "./components/elements/LoadingComponent";
import HomeScreen from "./components/Screens/HomeScreen";
import AddUserScreen from "./components/Screens/AddUserScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const { data, isLoading, error } = useGetUsersQuery();

  if (!isLoading && !error) {
    dispatch(setUsers(data.data));
  }
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
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
          tabBarActiveTintColor:"white",
          tabBarInactiveTintColor:"rgb(202, 227, 253)"
      }}>
            <Tab.Screen
              options={{
                tabBarIcon: () => (
                  <FontAwesome name="home" size={24} color="black" selectionColor="white" />
                ),
              }}
              name="Home"
              component={HomeScreen}
              initialParams={{isLoading:isLoading}}

            />
            <Tab.Screen 
           
           options={{
              tabBarIcon: () => (
                <Feather name="user-plus" size={24} color="black" />
              ),
            }}
            name="AddUser" component={AddUserScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
