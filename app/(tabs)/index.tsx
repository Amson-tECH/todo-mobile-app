import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text> Toggle Darkmode </Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      backgroundColor: colors.bg,
    },
    content: {
      fontSize: 22,
      color: colors.textMuted,
    },
  });
  return style;
};
