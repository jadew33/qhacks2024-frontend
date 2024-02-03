const { Text } = require("react-native");
import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import RightArrow from "../assets/rightarrow.svg";
import leftArrow from "../assets/leftarrow.svg";

const StatsScreen = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);
    direction === "next" ? newDate.setDate(currentDate.getDate() + 7) : newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => handleDateChange("prev")}>
          <View>
            <Text>button</Text>
          </View>
        </TouchableOpacity>
        <Text>{formatDateRange(currentDate)}</Text>
        <TouchableOpacity onPress={() => handleDateChange("next")}>
          <View>
            <Text>button</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.statscontainer}>
        <View style={styles.stats} />
        <Text style={styles.h3}>You go to most classes on Tuesday's</Text>
        <View style={styles.stats} />
      </View>
    </View>
  );
};

const formatDateRange = (date) => {
  const startDate = new Date(date);
  startDate.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)); // Set to Monday of the current week
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 4); // Set to Friday of the current week
  return `${startDate.toDateString()} - ${endDate.toDateString()}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statscontainer: {
    flex: 1,
    justifyContent: "center",
  },
  stats: {
    flex: 0.35,
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
    margin: 10,
    fontFamily: "Cochin",
  },
});

export default StatsScreen;
