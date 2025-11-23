import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{}}
      screenListeners={{
        tabPress: () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="flash-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="flash-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="settings" size={size} color={color} />
            ) : (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
