import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-500">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
