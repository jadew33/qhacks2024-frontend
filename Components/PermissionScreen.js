import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PermissionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        {/* Your content goes here */}
        <Text style={styles.h3}>In order to properly track your attendance, please allow ---- to access your location</Text>
        <View style={styles.innerBox}>
          {/* Content of the inner box goes here */}
          <Text style={styles.h1}>Allow</Text>
          <Text style={styles.h2}>Don't Allow</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.line2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stats: {
    width: 300,
    height: 600,
    backgroundColor: "white",
    borderRadius: 32,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    padding: 16,
  },

  innerBox: {
    width: 270,
    height: 200,
    borderColor: "gray", // Gray outline color
    borderWidth: 1, // Outline width
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-around", // Align items with space around
    marginTop: 40,
  },

  h3: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },

  h2: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 15,
    left: "-25%", // Center horizontally
    top: "50%", // Center vertically
  },

  h1: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 110,
    left: "-28%", // Center horizontally
    top: "7%", // Center vertically
  },

  line: {
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    marginTop: 16, 
  },
  line2: {
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    marginTop: 20,  
  },
});

export default PermissionScreen;