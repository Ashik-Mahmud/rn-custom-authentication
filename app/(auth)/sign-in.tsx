import { useSession } from "@/context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignInScreen = () => {
  const { signIn } = useSession();

  const handleBiometric = async () => {
    const auth = await LocalAuthentication.authenticateAsync({});
    if (auth.success) {
      signIn();
      router.replace("/(tabs)/");
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/(tabs)/");
        }}
        className="bg-slate-200 p-3 px-6 rounded-full"
      >
        Sign In
      </Text>

      <Text className="my-10 font-semibold text-xl">Or</Text>

      <TouchableOpacity
        onPress={handleBiometric}
        className="p-3 bg-slate-200 rounded-full px-6 w-20 h-20 flex justify-center items-center"
      >
        <MaterialCommunityIcons
          name="face-recognition"
          size={35}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
