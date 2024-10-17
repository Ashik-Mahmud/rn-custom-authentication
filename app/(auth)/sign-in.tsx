import { useSession } from "@/context/AuthContext";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignInScreen = () => {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/(tabs)/");
        }}
      >
        Sign In
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
