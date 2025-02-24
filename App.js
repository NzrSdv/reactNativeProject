import FontAwesome from "@expo/vector-icons/FontAwesome";

import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "./slices/AsyncUsers";
import { setUsers } from "./slices/UsersSlice";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/Screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import LoadingComponent from "./components/elements/LoadingComponent";

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
      <Tab.Navigator>
        {isLoading && (
          <Tab.Screen name="loading" component={LoadingComponent} />
        )}
        {!isLoading && (
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <FontAwesome name="home" size={24} color="black" />
              ),
            }}
            name="Home"
            component={HomeScreen}
          />
        )}
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
