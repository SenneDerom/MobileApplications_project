import {Pressable, Text, StyleSheet} from "react-native";

type ButtonProps = {
    label: string;
}

export function WhiteButton({label}: ButtonProps) {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.label}>
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        minHeight: 48,
        paddingHorizontal: 24,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: "#E30147",
        fontSize: 15,
        fontFamily: "WorkSans_600SemiBold",
        lineHeight: 22,
    },
});