import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "@/constants/colors";

type IntroTextProps = {
    title: string;
    body: string;
}

export function IntroText({title, body}: IntroTextProps) {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
    },
    title: {
        color: COLORS.onPrimary,
        fontSize: 32,
        fontFamily: "WorkSans_700Bold",
        lineHeight: 38,
        textAlign: "center",
        marginBottom: 12,
    },
    body: {
        color: COLORS.onPrimary,
        fontSize: 15,
        fontFamily: "WorkSans_400Regular",
        lineHeight: 22,
        textAlign: "center",
    },
});
