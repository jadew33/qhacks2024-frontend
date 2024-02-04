import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "./Components/HomeScreen";
import CustomizeScreen from "./Components/CustomizeScreen";
import StatsScreen from "./Components/StatsScreen";
import FriendsScreen from "./Components/FriendsScreen";
import CalendarScreen from "./Components/CalendarScreen";

import CalendarIcon from "./assets/calendar.svg";
import FriendsIcon from "./assets/friends.svg";
import HomeIcon from "./assets/home.svg";
import StatsIcon from "./assets/stats.svg";
import CustomizeIcon from "./assets/friends.svg";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={() => <HomeScreen data={data} />}
          // options={{
          //   tabBarIcon: ({ color, size }) => (
          //     <HomeIcon name="home" color={color} size={size} />
          //   ),
          // }
          // }
        />
        <Tab.Screen
          name="Calendar"
          component={() => <CalendarScreen data={data} />}
          // options={{
          //   tabBarIcon: ({ color, size }) => (
          //     <CalendarIcon name="calendar" color={color} size={size} />
          //   ),
          // }
          // }
        />
        <Tab.Screen
          name="Stats"
          component={() => <StatsScreen data={data} />}
          // options={{
          //   tabBarIcon: ({ color, size }) => (
          //     <StatsIcon name="stats" color={color} size={size} />
          //   ),
          // }
          // }
        />
        <Tab.Screen
          name="Customize"
          component={() => <CustomizeScreen data={data} />}
          // options={{
          //   tabBarIcon: ({ color, size }) => (
          //     <CustomizeIcon name="customize" color={color} size={size} />
          //   ),
          // }
          // }
        />
        <Tab.Screen
          name="Friends"
          component={() => <FriendsScreen data={data} />}
          // options={{
          //   tabBarIcon: ({ color, size }) => (
          //     <FriendsIcon name="friends" color={color} size={size} />
          //   ),
          // }
          // }
        />
      </Tab.Navigator>
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
