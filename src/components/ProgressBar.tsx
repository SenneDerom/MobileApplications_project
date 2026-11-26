import {View, StyleSheet} from "react-native";
import {COLORS} from "@/constants/colors";

type ProgressBarProps = {
    value: number;
    max: number;
    label: string;
}

export function ProgressBar({value, max, label}: ProgressBarProps) {
    const percentage = max > 0 ? Math.min(100, (value / max) * 100) : 0;

    return (
        <View
            style={styles.track}
            accessibilityRole="progressbar"
            accessibilityLabel={label}
            accessibilityValue={{min: 0, max, now: value}}
        >
            <View style={[styles.fill, {width: `${percentage}%`}]} />
        </View>
    );
}

const styles = StyleSheet.create({
    track: {
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.progressTrack,
        overflow: "hidden",
    },
    fill: {
        height: "100%",
        borderRadius: 4,
        backgroundColor: COLORS.primary,
    },
});
