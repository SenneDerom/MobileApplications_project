import {View, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {router} from "expo-router";
import {FooterTab} from "@/components/FooterTab";
import {ScanButton} from "@/components/ScanButton";
import {COLORS} from "@/constants/colors";

export type FooterTabName = "home" | "explanation" | "tour" | "map";

type FooterProps = {
    activeTab?: FooterTabName;
}

export function Footer({activeTab}: FooterProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.footer, {paddingBottom: insets.bottom + 8}]} accessibilityRole="tablist">
            <FooterTab label="Home" icon="home-outline" isActive={activeTab === "home"} />
            <FooterTab label="Uitleg" icon="calendar-outline" isActive={activeTab === "explanation"} onPress={() => router.push("/explanation")} />
            <ScanButton />
            <FooterTab label="Rondleiding" icon="footsteps-outline" isActive={activeTab === "tour"} />
            <FooterTab label="Kaart" icon="map-outline" isActive={activeTab === "map"} />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.footer,
        paddingTop: 8,
        paddingHorizontal: 8,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});
