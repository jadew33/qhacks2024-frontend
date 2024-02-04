const { Text } = require("react-native");
import { BarChart, ProgressChart } from "react-native-chart-kit";

import { StyleSheet, View } from "react-native";

const StatsRing = ({ currentDate }) => {
    const data = {
        labels: ["Monday"], // optional
        data: [0.4]
      };

  const chartConfig = {
    backgroundGradientFrom: "white", // Set the background color
    backgroundGradientTo: "white",
    yAxisInterval: 20,
    color: (opacity = 1) => `rgba(124, 150, 97, ${opacity})`, // Set bar color
  };

  return (
    <ProgressChart
      data={data}
      width={300}
      height={200}
      strokeWidth={16}
      radius={70}
      chartConfig={chartConfig}
      hideLegend={true}
    />
  );
};

export default StatsRing;
