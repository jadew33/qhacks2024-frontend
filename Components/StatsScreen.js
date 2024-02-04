const { Text } = require("react-native");
import React, { useState } from "react";
import { AzeretMono_400Regular } from "@expo-google-fonts/azeret-mono";
import {
  useFonts,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_400Regular,
} from "@expo-google-fonts/be-vietnam-pro";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import StatsChart from "./StatsChart";
import StatsRing from "./StatsRing";

const StatsScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    BeVietnamPro_600SemiBold,
    BeVietnamPro_400Regular,
    AzeretMono_400Regular,
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentData, setCurrentData] = useState(null);

  const calculateChartData = (date) => {
    // Logic to calculate chart data based on the date
    // For demonstration, let's just use some static values
    const data = {
      labels: ["M", "T", "W", "T", "F"],
      datasets: [
        {
          data: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
          ],
        },
      ],
    };
    return data;
  };

  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);
    direction === "next"
      ? newDate.setDate(currentDate.getDate() + 7)
      : newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  return (
    <View style={[styles.container]}>
      <View>
        <Text
          style={{
            paddingTop: 40,
            fontSize: 24,
            fontFamily: "BeVietnamPro_600SemiBold",
          }}
        >
          Statistics
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => handleDateChange("prev")}>
          <View>
            <Image
              source={require("../assets/leftarrow.png")}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ fontFamily: "AzeretMono_400Regular" }}>
          {formatDateRange(currentDate)}
        </Text>
        <TouchableOpacity onPress={() => handleDateChange("next")}>
          <View>
            <Image
              source={require("../assets/rightarrow.png")}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.statscontainer}>
        <View style={styles.statscharts}>
          <StatsChart currentDate={currentDate} />
        </View>
        <Text style={styles.h3}>You go to most classes on Tuesday's</Text>
        {/* <View style={[styles.stats, { marginTop: 20 }]} /> */}
        <View style={[styles.statscharts, { marginTop: 20 }]}>
          <StatsRing currentDate={currentDate} />
        </View>
      </View>
    </View>
  );
};

const formatDateRange = (date) => {
  const startDate = new Date(date);
  startDate.setDate(
    date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
  ); // Set to Monday of the current week

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 4); // Set to Friday of the current week

  const startDateString = startDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const endDateString = endDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return `${startDateString} - ${endDateString}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 25,
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 10,
  },
  statscontainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: "center",
    // justifyContent: "center",
  },
  statscharts: {
    flex: 0.5,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "white",
    borderRadius: 32,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    paddingTop: 10,
  },
  stats: {
    flex: 0.4,
    backgroundColor: "white",
    borderRadius: 32,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  h3: {
    textAlign: "center",
    margin: 10,
    fontFamily: "BeVietnamPro_400Regular",
    color: "#2E2E30",
  },
});

export default StatsScreen;
