const { Text } = require("react-native");
import { BarChart } from "react-native-chart-kit";

import { StyleSheet, View } from "react-native";

const StatsChart = ({ currentData }) => {
  const chartConfig = {
    backgroundGradientFrom: "white", // Set the background color
    backgroundGradientTo: "white",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Set bar color
    yAxisInterval: 20,
    color: (opacity = 1) => `rgba(124, 150, 97, ${opacity})`, // Set bar color
  };

  return (
    <BarChart
      data={currentData}
      width={300} // Adjust width as needed
      height={200}
      yAxisLabel=""
      yAxisSuffix="%"
      chartConfig={chartConfig}
      verticalLabelRotation={30}
      showValuesOnTopOfBars={true}
      segments={4}
      fromZero={true} // Start y-axis from 0
    />
  );
};

export default StatsChart;
