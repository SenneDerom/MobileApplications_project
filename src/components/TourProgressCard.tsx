import {View, Text, StyleSheet} from "react-native";
import {Icon} from "@/components/primitives/Icon";
import {ProgressBar} from "@/components/ProgressBar";
import {COLORS} from "@/constants/colors";

type TourProgressCardProps = {
    visited: number;
    total: number;
    remainingMinutes?: number;
}

export function TourProgressCard({visited, total, remainingMinutes}: TourProgressCardProps) {
    const progressLabel = `${visited} van ${total} stops bezocht`;

    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.title}>{progressLabel}</Text>
                {remainingMinutes !== undefined && (
                    <View style={styles.time} accessibilityLabel={`Nog ongeveer ${remainingMinutes} minuten`}>
                        <Icon name="time-outline" size={16} color={COLORS.onCardMuted} />
                        <Text style={styles.timeText}>± {remainingMinutes} min</Text>
                    </View>
                )}
            </View>
            <ProgressBar value={visited} max={total} label={progressLabel} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        gap: 14,
        padding: 16,
        borderRadius: 14,
        backgroundColor: COLORS.card,
        shadowColor: "#000000",
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        elevation: 3,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
    },
    title: {
        flex: 1,
        color: COLORS.onCard,
        fontSize: 16,
        fontFamily: "WorkSans_600SemiBold",
        lineHeight: 22,
    },
    time: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    timeText: {
        color: COLORS.onCardMuted,
        fontSize: 14,
        fontFamily: "WorkSans_400Regular",
        lineHeight: 20,
    },
});
