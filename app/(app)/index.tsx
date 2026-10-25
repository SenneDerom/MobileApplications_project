import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/Button";

const COLORS = {
  primary: "#E30147",
  onPrimary: "#FFFFFF",
};

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>UCLL</Text>
          <Text style={styles.subtitle}>Campus Connect - Leuven</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Welkom op Campus Connect</Text>
          <Text style={styles.body}>
            Ontdek de campus op je eigen tempo. Scan de QR-codes op de borden en leer alles over je toekomstige opleiding.
          </Text>
        </View>

        <View style={styles.buttons}>
          <Button label="Start de rondleiding" />
          <Button label="Bekijk het programma" textColor={COLORS.onPrimary} backgroundColor={COLORS.primary} borderColor={COLORS.onPrimary} />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 28,
  },
  header: {
    alignItems: "center",
    marginTop: 24,
  },
  logo: {
    color: COLORS.onPrimary,
    fontSize: 32,
    fontFamily: "WorkSans_700Bold",
    lineHeight: 38,
  },
  subtitle: {
    color: COLORS.onPrimary,
    fontSize: 11,
    fontFamily: "WorkSans_600SemiBold",
    lineHeight: 14,
    letterSpacing: 0.66,
    marginTop: 4,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.onPrimary,
    fontSize: 32,
    fontFamily: "WorkSans_700Bold",
    lineHeight: 38,
    textAlign: "center",
    marginBottom: 12,
  },
  body: {
    color: COLORS.onPrimary,
    fontSize: 15,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 22,
    textAlign: "center",
  },
  buttons: {
    gap: 12,
    marginBottom: 24,
  },
});