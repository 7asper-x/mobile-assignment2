import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllEntriesScreen from "../screens/AllEntriesScreen";
import OverLimitEntriesScreen from "../screens/OverLimitEntriesScreen";
import EditEntryScreen from "../screens/EditEntryScreen";
import AddEntryScreen from "../screens/AddEntryScreen";
import Colors from "../styles/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import PlusButton from "../components/PlusButton";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.header },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.header },
        tabBarActiveTintColor: Colors.tabBarActiveTintColor,
      }}
    >
      <Tab.Screen
        name="All Entries"
        component={AllEntriesScreen}
        options={({ navigation }) => ({
            headerRight: () => (
                <PlusButton onPress={() => navigation.navigate("Add Entry")} />
            ),
            tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="coffee" size={size} color={color} />
            ),
        })}
      />
      <Tab.Screen
        name="Over-Limit Entries"
        component={OverLimitEntriesScreen}
        options={({ navigation }) => ({
            headerRight: () => (
                <PlusButton onPress={() => navigation.navigate("Add Entry")} />
            ),
            tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="exclamation" size={size} color={color} />
            ),
        })}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.header },
        headerTintColor: Colors.text,
      }}
    >
      <Stack.Screen
        name="Home"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Edit Entry" component={EditEntryScreen} />
      <Stack.Screen name="Add Entry" component={AddEntryScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
