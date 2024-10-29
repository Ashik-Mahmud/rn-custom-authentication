import LineChartComponent from "@/components/Charts/LineChart";
import LineChartV2 from "@/components/Charts/LineChartV2";
import { useSession } from "@/context/AuthContext";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { signOut, session } = useSession();

  return (
    <SafeAreaView style={{}}>
      <StatusBar style="dark" />

      {/* <LineChartComponent /> */}
      <LineChartComponent />
      <LineChartV2 />
      <View className=" text-center p-10 ">
        <Text style={{ fontSize: 16 }}>
          Hi, <Text className="text-green-500">React Native</Text> {session}
        </Text>
        <Text
          onPress={() => {
            // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
            signOut();
          }}
        >
          Sign Out
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
