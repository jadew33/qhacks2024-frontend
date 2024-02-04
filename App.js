import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
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
import PermissionScreen from "./Components/PermissionScreen";
import CalendarIcon from "./assets/calendar.png";
import FriendsIcon from "./assets/friends.png";
import HomeIcon from "./assets/home.png";
import StatsIcon from "./assets/stats.png";
import CustomizeIconInactive from "./assets/customize-inactive.png";
import CustomizeIconActive from "./assets/customize-active.png";

export default function App() {
  const [data, setData] = useState(null);
  const [coins, setCoins] = useState(100);
  const [closet, setCloset] = useState([]);
  const [avatar, setAvatar] = useState(require("./assets/mascot-orig.png"));

  // useEffect(() => {
  //   fetch("http://192.168.2.34/user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: "kale@gmail.com" }),
  //   })
  //     .then((response) => {
  //       console.log("reached");
  //       console.log("Raw response: ", response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("reached");
  //       console.log("Parsed data: ", data);
  //       setData(data);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }, []);
  // console.log(data);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={HomeIcon}
                style={{
                  tintColor: focused ? "black" : "gray",
                  width: size,
                  height: size,
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? "black" : color, fontSize: 10 }}>
                Home
              </Text>
            ),
          }}
        >
          {() => <HomeScreen data={data} coins={coins} />}
        </Tab.Screen>
        <Tab.Screen
          name="Calendar"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={CalendarIcon}
                style={{
                  tintColor: focused ? "black" : "gray",
                  width: size,
                  height: 26,
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "black" : color,
                  fontSize: 10,
                  marginTop: -4,
                }}
              >
                Calendar
              </Text>
            ),
          }}
        >
          {() => <CalendarScreen data={data} />}
        </Tab.Screen>
        <Tab.Screen
          name="Stats"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={StatsIcon}
                style={{
                  tintColor: focused ? "black" : "gray",
                  width: 27,
                  height: 27,
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "black" : color,
                  fontSize: 10,
                  marginTop: -4,
                }}
              >
                Stats
              </Text>
            ),
          }}
        >
          {() => <StatsScreen data={data} />}
        </Tab.Screen>
        <Tab.Screen
          name="Avatar"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={focused ? CustomizeIconActive : CustomizeIconInactive}
                style={
                  focused
                    ? { width: 64, height: 64 }
                    : {
                        width: 64,
                        height: 64,
                        marginBottom: -13,
                        marginLeft: 4,
                      }
                }
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "black" : color,
                  fontSize: 10,
                  marginTop: -10,
                }}
              >
                Avatar
              </Text>
            ),
          }}
        >
          {() => (
            <CustomizeScreen
              data={data}
              coins={coins}
              closet={closet}
              setCloset={setCloset}
              setCoins={coins}
              avatar={avatar}
              setAvatar={setAvatar}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Friends"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={FriendsIcon}
                style={{
                  tintColor: focused ? "black" : "gray",
                  width: 28,
                  height: 28,
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "black" : color,
                  fontSize: 10,
                  marginTop: -5,
                }}
              >
                Friends
              </Text>
            ),
          }}
        >
          {() => <FriendsScreen data={data} />}
        </Tab.Screen>
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
