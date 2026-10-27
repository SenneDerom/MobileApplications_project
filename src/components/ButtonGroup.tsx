import {View, StyleSheet} from "react-native";

type ButtonGroupProps = {
    children: React.ReactNode;
}

export function ButtonGroup({children}: ButtonGroupProps) {
    return (
        <View style={styles.buttons}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        gap: 12,
        marginBottom: 50,
    },
});
