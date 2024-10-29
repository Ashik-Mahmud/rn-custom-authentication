import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const LineChartComponent = () => {
  const barData = [
    { value: 15, label: "Jan" },
    { value: 40, label: "Feb" },
    { value: 10, label: "Mar" },
    { value: 30, label: "Apr" },
    { value: 50, label: "May" },
    { value: 40, label: "June" },
    { value: 80, label: "July" },
    { value: 110, label: "August" },
  ];

  return (
    <View className="px-5">
      <Text>Bezier Line Chart</Text>
      <View
        style={{
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#f0f0f0",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Overview
        </Text>
        <View style={{ padding: 0, alignItems: "center" }}>
          <BarChart
            width={Dimensions.get("window").width - 110}
            data={barData}
            barWidth={35}
            cappedBars
            capColor={"rgba(78, 0, 142)"}
            capThickness={4}
            showGradient
            gradientColor={"rgba(200, 100, 244,0.8)"}
            frontColor={"rgba(219, 182, 249,0.2)"}
          />
        </View>
      </View>
    </View>
  );
};

export default LineChartComponent;

const styles = StyleSheet.create({});
