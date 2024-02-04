import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PermissionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        {/* Your content goes here */}
        <Text style={styles.h3}>In order to properly track your attendance, please allow ---- to access your location</Text>
        <View style={styles.line}></View>
        <View style={styles.line2}></View>
        <Text style={styles.h1}>Allow</Text>
        <Text style={styles.h2}>Don't Allow</Text>
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

  h3: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },

  h2: {
    textAlign: "center",
    left: "23%", // Center horizontally
    top: "-11%", // Center vertically
    fontSize: 25,
  },

  h1: {
    textAlign: "center",
    left: "-28%", // Center horizontally
    top: "7%", // Center vertically
    fontSize: 25,
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