import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width - 40;
const LineChartV2 = () => {
  // each value represents a goal ring in Progress chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 100],
      },
    ],
  };
  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <Text className="text-xl mb-3">Bar Chart</Text>
      <BarChart
        data={data}
        width={screenWidth}
        height={400}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 1,
          style: {
            borderRadius: 16,
          },
          barPercentage: 0.5,

          propsForDots: {
            r: "6",
            strokeWidth: "1",
            stroke: "#ffa726",
          },
        }}
        showValuesOnTopOfBars={true}
        style={{ padding: 10, backgroundColor: "white", borderRadius: 10 }}
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default LineChartV2;

const styles = StyleSheet.create({});
