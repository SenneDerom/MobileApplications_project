import {Pressable, View, Text, StyleSheet} from "react-native";
import {Icon} from "@/components/primitives/Icon";
import {TourStopBadge} from "@/components/TourStopBadge";
import {COLORS} from "@/constants/colors";
import type {TourStop} from "@/types/TourStop";

type TourStopCardProps = {
    number: number;
    stop: TourStop;
    onPress?: () => void;
}

export function TourStopCard({number, stop, onPress}: TourStopCardProps) {
    const subtitle = stop.visited ? "Bezocht" : stop.location;

    return (
        <Pressable
            onPress={onPress}
            style={({pressed}) => [styles.card, pressed && styles.pressed]}
            accessibilityRole="button"
            accessibilityLabel={`Stop ${number}: ${stop.title}. ${subtitle}`}
        >
            <TourStopBadge number={number} visited={stop.visited} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{stop.title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Icon name="chevron-forward" size={20} color={COLORS.onCard} />
        </Pressable>
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
    pressed: {
        opacity: 0.85,
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
