import {Pressable, StyleSheet} from "react-native";
import {Icon} from "@/components/primitives/Icon";
import {COLORS} from "@/constants/colors";

type ScanButtonProps = {
    onPress?: () => void;
}

export function ScanButton({onPress}: ScanButtonProps) {
    return (
        <Pressable onPress={onPress} style={styles.button} accessibilityRole="button" accessibilityLabel="Scan QR-code">
            <Icon name="qr-code-outline" size={28} color={COLORS.onPrimary} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
        shadowColor: "#000000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        elevation: 4,
    },
});
