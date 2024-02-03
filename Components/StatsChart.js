const { Text } = require("react-native");
import { BarChart } from "react-native-chart-kit";

import { StyleSheet, View } from "react-native";

const StatsChart = ({ currentDate }) => {
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

  const data = calculateChartData(currentDate);

  const chartConfig = {
    backgroundGradientFrom: "white", // Set the background color
    backgroundGradientTo: "white",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Set bar color
    yAxisInterval: 20
    // color: (opacity = 1) => `rgba(124, 150, 97, ${opacity})`, // Set bar color
  };

  return (
    <BarChart
      data={data}
      width={300} // Adjust width as needed
      height={200}
      yAxisLabel="%"
      chartConfig={chartConfig}
      verticalLabelRotation={30}
      showValuesOnTopOfBars={true}
    />
  );
};

export default StatsChart;
