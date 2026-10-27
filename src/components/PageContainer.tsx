import {View, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {COLORS} from "@/constants/colors";

type PageContainerProps = {
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export function PageContainer({children, footer}: PageContainerProps) {
    // The footer handles the bottom safe area itself, so it can run to the edge of the screen.
    const edges = footer !== undefined ? ["top", "left", "right"] as const : undefined;

    return (
        <SafeAreaView style={styles.container} edges={edges}>
            <View style={styles.content}>
                {children}
            </View>
            {footer}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    content: {
        flex: 1,
        paddingHorizontal: 28,
    },
});
