import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";

// let locationsOfInterest = [
//   {
//     title: "First",
//     location: {
//       latitude: -27.2,
//       longitude: 145,
//     },
//     description: "My First Marker",
//   },
//   {
//     title: "Second",
//     location: {
//       latitude: -30.2,
//       longitude: 150,
//     },
//     description: "My Second Marker",
//   },
// ];

// const mapJson = [
//   {
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#212121",
//       },
//     ],
//   },
//   {
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#212121",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.country",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#9e9e9e",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.locality",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#bdbdbd",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#181818",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#1b1b1b",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#2c2c2c",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#8a8a8a",
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#373737",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#3c3c3c",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         color: "#ffeb3b",
//       },
//       {
//         weight: 3,
//       },
//     ],
//   },
//   {
//     featureType: "road.highway.controlled_access",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#4e4e4e",
//       },
//     ],
//   },
//   {
//     featureType: "road.local",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#1f0038",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#3d3d3d",
//       },
//     ],
//   },
// ];

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState();
  const [count, setCount] = useState(0);

  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: 148.11,
    latitude: -26.85,
  });
  const mapRef = useRef();

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({
      width: 300,
      height: 300,
      result: "base64",
    });
    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, {
      encoding: FileSystem.EncodingType.Base64,
    });
    await shareAsync(uri);
  };

  useEffect(() => {
    console.log("reache");

    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log(currentLocation);
    };
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}></MapView>
      {/* <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: -26.852691607783505,
          latitudeDelta: 27.499085419977938,
          longitude: 148.1104129487327,
          longitudeDelta: 15.952148000000022,
        }}
        customMapStyle={mapJson}
      >
        {showLocationsOfInterest()}
        <Marker
          draggable
          pinColor="#0000ff"
          coordinate={draggableMarkerCoord}
          onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
        />
        <Marker
          pinColor="#00ff00"
          coordinate={{ latitude: -35, longitude: 147 }}
        >
          <Callout>
            <Text>Count: {count}</Text>
            <Button
              title="Increment Count"
              onPress={() => setCount(count + 1)}
            />
            <Button
              title="Take Snapshot and Share"
              onPress={takeSnapshotAndShare}
            />
          </Callout>
        </Marker>
        <Text style={styles.mapOverlay}>
          Longitude: {draggableMarkerCoord.longitude}, latitude:{" "}
          {draggableMarkerCoord.latitude}
        </Text>
      </MapView> */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center",
  },
});

export default HomeScreen;
