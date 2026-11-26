import {View, Text, StyleSheet} from "react-native";
import {TourStopBadge} from "@/components/TourStopBadge";
import {COLORS} from "@/constants/colors";
import type {TourStop} from "@/types/TourStop";

type TourStopCardProps = {
    number: number;
    stop: TourStop;
}

export function TourStopCard({number, stop}: TourStopCardProps) {
    const subtitle = stop.visited ? "Bezocht" : stop.location;

    return (
        <View
            style={styles.card}
            accessible
            accessibilityLabel={`Stop ${number}: ${stop.title}. ${subtitle}`}
        >
            <TourStopBadge number={number} visited={stop.visited} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{stop.title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        padding: 16,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: COLORS.card,
        backgroundColor: COLORS.card,
        shadowColor: "#000000",
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        elevation: 3,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: COLORS.onCard,
        fontSize: 16,
        fontFamily: "WorkSans_600SemiBold",
        lineHeight: 22,
    },
    subtitle: {
        color: COLORS.onCardMuted,
        fontSize: 13,
        fontFamily: "WorkSans_400Regular",
        lineHeight: 18,
    },
});
