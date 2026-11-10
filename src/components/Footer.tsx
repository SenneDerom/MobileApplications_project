import {View, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {FooterTab} from "@/components/FooterTab";
import {ScanButton} from "@/components/ScanButton";
import {COLORS} from "@/constants/colors";

export type FooterTabName = "home" | "tour";

type FooterProps = {
    activeTab?: FooterTabName;
}

export function Footer({activeTab}: FooterProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.footer, {paddingBottom: insets.bottom + 8}]} accessibilityRole="tablist">
            <FooterTab label="Start" icon="home-outline" isActive={activeTab === "home"} />
            <ScanButton />
            <FooterTab label="Rondleiding" icon="footsteps-outline" isActive={activeTab === "tour"} />
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
