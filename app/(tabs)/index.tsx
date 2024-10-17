import { useSession } from "@/context/AuthContext";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { signOut, session } = useSession();

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <StatusBar style="dark" />
      <View className="flex-1 justify-center items-center">
        <Text style={{ fontSize: 33 }}>
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
