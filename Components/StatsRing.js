const { Text } = require("react-native");
import { BarChart, ProgressChart } from "react-native-chart-kit";
import React, { useEffect, useState } from "react";

import { StyleSheet, View } from "react-native";

const StatsRing = ({ currentData }) => {
  const chartConfig = {
    backgroundGradientFrom: "white", // Set the background color
    backgroundGradientTo: "white",
    yAxisInterval: 20,
    color: (opacity = 1) => `rgba(124, 150, 97, ${opacity})`, // Set bar color
  };

  return (
    <ProgressChart
      data={[
        currentData.datasets[0].data.reduce((sum, value) => sum + value, 0) /
          currentData.datasets[0].data.length /
          100,
      ]}
      width={300}
      height={200}
      radius={70}
      chartConfig={chartConfig}
      hideLegend={true}
    />
  );
};

export default StatsRing;
