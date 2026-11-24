import {View, Text, StyleSheet} from "react-native";
import {Icon} from "@/components/primitives/Icon";
import {COLORS} from "@/constants/colors";
import type {TourStopStatus} from "@/types/TourStop";

type TourStopBadgeProps = {
    number: number;
    status: TourStopStatus;
}

export function TourStopBadge({number, status}: TourStopBadgeProps) {
    if (status === "visited") {
        return (
            <View style={[styles.badge, styles.visited]}>
                <Icon name="checkmark" size={20} color={COLORS.onPrimary} />
            </View>
        );
    }

    const isNext = status === "next";

    return (
        <View style={[styles.badge, isNext ? styles.next : styles.upcoming]}>
            <Text style={[styles.number, isNext ? styles.nextNumber : styles.upcomingNumber]}>{number}</Text>
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
    next: {
        backgroundColor: COLORS.primary,
    },
    upcoming: {
        borderWidth: 1,
        borderColor: COLORS.badgeBorder,
        backgroundColor: COLORS.card,
    },
    number: {
        fontSize: 15,
        fontFamily: "WorkSans_700Bold",
    },
    nextNumber: {
        color: COLORS.onPrimary,
    },
    upcomingNumber: {
        color: COLORS.onCardMuted,
    },
});
