import {View, Text, StyleSheet} from "react-native";
import {Icon} from "@/components/primitives/Icon";
import {COLORS} from "@/constants/colors";

type TourStopBadgeProps = {
    number: number;
    visited: boolean;
}

export function TourStopBadge({number, visited}: TourStopBadgeProps) {
    if (visited) {
        return (
            <View style={[styles.badge, styles.visited]}>
                <Icon name="checkmark" size={20} color={COLORS.onPrimary} />
            </View>
        );
    }

    return (
        <View style={[styles.badge, styles.notVisited]}>
            <Text style={styles.number}>{number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    visited: {
        backgroundColor: COLORS.success,
    },
    notVisited: {
        borderWidth: 1,
        borderColor: COLORS.badgeBorder,
        backgroundColor: COLORS.card,
    },
    number: {
        color: COLORS.onCardMuted,
        fontSize: 15,
        fontFamily: "WorkSans_700Bold",
    },
});
