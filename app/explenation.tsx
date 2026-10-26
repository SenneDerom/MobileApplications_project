import {StyleSheet, View, Image, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Button} from "@/components/Button";

const COLORS = {
    primary: "#E30147",
    onPrimary: "#FFFFFF",
};

export function ExplanationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../public/icons/logo_ucll.png")}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="UCLL logo"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Bekijk de uitleg</Text>
        <Text style={styles.body}>
          Ontdek de campus op je eigen tempo. Op verschillende plaatsen in de campus kan je QR-codes vinden.
            Scan deze QR-codes met deze app en leer alles over je toekomstige opleiding.
            Er is geen volgorde, je kan de QR-codes in eender welke volgorde scannen.
            Je kan de rondleiding ook op elk moment onderbreken en later verder zetten, er is geen tijdslimiet.
            Veel plezier!
        </Text>
      </View>

      <View style={styles.buttons}>
        <Button label="Start de rondleiding" />
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
        marginTop: 10,
    },
    logo: {
        height: 200,
        aspectRatio: 1264 / 1920,
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
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
        marginBottom: 50,
    },
});