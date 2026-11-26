import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "@/constants/colors";

type PageHeaderProps = {
    title: string;
    intro?: string;
}

export function PageHeader({title, intro}: PageHeaderProps) {
    return (
        <View style={styles.header}>
            <Text style={styles.title} accessibilityRole="header">{title}</Text>
            {intro !== undefined && <Text style={styles.intro}>{intro}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        gap: 8,
        marginBottom: 8,
    },
    title: {
        color: COLORS.onPrimary,
        fontSize: 32,
        fontFamily: "WorkSans_700Bold",
        lineHeight: 38,
    },
    intro: {
        color: COLORS.onPrimaryMuted,
        fontSize: 15,
        fontFamily: "WorkSans_400Regular",
        lineHeight: 22,
    },
});
