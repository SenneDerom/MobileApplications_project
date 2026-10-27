import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "@/constants/colors";

type ExplanationStepProps = {
    number: number;
    title: string;
    description: string;
}

export function ExplanationStep({number, title, description}: ExplanationStepProps) {
    return (
        <View style={styles.card}>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{number}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "flex-start",
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
    badge: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: COLORS.onPrimary,
        fontSize: 15,
        fontFamily: "WorkSans_700Bold",
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: COLORS.onCard,
        fontSize: 16,
        fontFamily: "WorkSans_600SemiBold",
        lineHeight: 22,
        marginBottom: 2,
    },
    description: {
        color: COLORS.onCardMuted,
        fontSize: 14,
        fontFamily: "WorkSans_400Regular",
        lineHeight: 20,
    },
});
