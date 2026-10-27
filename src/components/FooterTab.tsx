import {Pressable, Text, StyleSheet} from "react-native";
import {Icon} from "@/components/primitives/Icon";
import {COLORS} from "@/constants/colors";

type FooterTabProps = {
    label: string;
    icon: React.ComponentProps<typeof Icon>["name"];
    isActive?: boolean;
    onPress?: () => void;
}

export function FooterTab({label, icon, isActive = false, onPress}: FooterTabProps) {
    const color = isActive ? COLORS.primary : COLORS.footerInactive;

    return (
        <Pressable
            onPress={onPress}
            style={styles.tab}
            accessibilityRole="tab"
            accessibilityState={{selected: isActive}}
            accessibilityLabel={label}
        >
            <Icon name={icon} size={26} color={color} />
            <Text style={[styles.label, {color}, isActive && styles.activeLabel]}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },
    label: {
        fontSize: 13,
        fontFamily: "WorkSans_400Regular",
        lineHeight: 16,
    },
    activeLabel: {
        fontFamily: "WorkSans_600SemiBold",
    },
});
