import {Pressable, Text, StyleSheet} from "react-native";

type ButtonProps = {
    label: string;
    backgroundColor?: string;
    textColor?: string;
}

export function Button({label, backgroundColor = "#FFFFFFF", textColor = "E30147"}: ButtonProps) {
    return (
        <Pressable style={[styles.button, {backgroundColor}]}>
            <Text style={[styles.label, {color: textColor}]}>
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
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 15,
        fontFamily: "WorkSans_600SemiBold",
        lineHeight: 22,
    },
});