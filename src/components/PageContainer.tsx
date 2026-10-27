import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {COLORS} from "@/constants/colors";

type PageContainerProps = {
    children: React.ReactNode;
}

export function PageContainer({children}: PageContainerProps) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 28,
    },
});
