import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";

import MapView, { Marker } from "react-native-maps";

const HomeScreen = ({ navigation, data, coins }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 44.2207234,
    longitude: -44.5232731,
    latitudeDelta: 0.0001, // smaller value for more zoom
    longitudeDelta: 0.0001, // smaller value for more zoom
  });

  console.log(data);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      console.log(currentLocation);
      setMapRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.absolute}>
        <Text style={styles.header}>Hello, Kale</Text>
        <View style={styles.pill}>
          <Image
            source={require("../assets/sun.png")}
            style={styles.pillImage}
          />
          <Text style={styles.pillText}>{coins} </Text>
        </View>
      </View>

      <Image
        style={{ position: "absolute", top: 60, right: 30 }}
        source={require("../assets/profile.png")}
        // style={{ width: 50, height: 50 }}
        // resizeMode="contain"
      />

      <View style={styles.circle}>
        <MapView
          region={mapRegion}
          style={styles.map}
          // scrollEnabled={false}
          // zoomEnabled={false}
        >
          <Marker coordinate={mapRegion} title="Your Location">
            <Image
              source={require("../assets/mascot-orig.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </Marker>
        </MapView>
      </View>
      <Text style={styles.goalText}>
        Congrats! You attended all of your classes today!
      </Text>
      <View style={styles.streakContainer}>
        <View>
          <Image
            source={require("../assets/sun.png")}
            // style={{ width: 50, height: 50 }}
            // resizeMode="contain"
          />
        </View>
        <View style={styles.streakCircle} />
        <View style={styles.streakCircle} />
        <View style={styles.streakCircle} />
        <View style={styles.streakCircle} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 40,
  },
  absolute: {
    position: "absolute",
    top: 65,
    left: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  circle: {
    width: 250, // or whatever size you want
    height: 250, // should match width for a perfect circle
    borderRadius: 150, // half of your width and height
    overflow: "hidden", // to ensure the corners are not visible
    marginTop: 130,
    borderColor: "#F89364",
    borderStyle: "solid",
    borderWidth: 5,
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
    ...StyleSheet.absoluteFillObject, // to ensure the map takes the full space of the parent View
  },
  pillImage: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  goalText: {
    // marginTop: 40,
    textAlign: "center",
    fontSize: 16,
    width: 250,
  },
  pill: {
    // backgroundColor: "#dbe4cf",
    backgroundColor: "white",
    borderRadius: 32,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 15,
    width: 80,
    // position: "absolute",
  },
  pillText: {
    // color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  streakContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 100,
    alignSelf: "center",
    // marginTop: 40,

    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 250,

    backgroundColor: "white",
    borderRadius: 32,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  streakCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 5,
    borderColor: "#fff48f",
  },
  streakCircleFilled: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#7C9661",
  },
});

export default HomeScreen;
