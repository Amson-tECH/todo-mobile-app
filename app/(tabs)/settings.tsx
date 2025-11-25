import { createSettingsStyles } from "@/assets/styles/settings.styles";
import DangerZone from "@/components/DangerZone";
import Preferences from "@/components/Preferences";
import ProgressStats from "@/components/ProgressState";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const { colors } = useTheme();

  const settingStyle = createSettingsStyles(colors);

  return (
    <LinearGradient
      style={settingStyle.container}
      colors={colors.gradients.background}
    >
      <SafeAreaView style={settingStyle.safeArea}>
        <View style={settingStyle.header}>
          <View style={settingStyle.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingStyle.iconContainer}
            >
              <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingStyle.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingStyle.scrollView}
          contentContainerStyle={settingStyle.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          <Preferences />
          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
