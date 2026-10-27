import {ScrollView, Text, StyleSheet} from "react-native";
import {ExplanationStep} from "@/components/ExplanationStep";
import {COLORS} from "@/constants/colors";

type Step = {
    title: string;
    description: string;
}

type StepListProps = {
    title: string;
    intro?: string;
    steps: Step[];
    footer?: string;
}

export function StepList({title, intro, steps, footer}: StepListProps) {
    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{title}</Text>
            {intro !== undefined && <Text style={styles.intro}>{intro}</Text>}

            {steps.map((step, index) => (
                <ExplanationStep key={step.title} number={index + 1} title={step.title} description={step.description} />
            ))}

            {footer !== undefined && <Text style={styles.footer}>{footer}</Text>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    content: {
        flexGrow: 1,
        justifyContent: "center",
        gap: 12,
        paddingTop: 40,
        paddingBottom: 24,
    },
    title: {
        color: COLORS.onPrimary,
        fontSize: 36,
        fontFamily: "WorkSans_700Bold",
        lineHeight: 42,
        textAlign: "center",
    },
    intro: {
        color: COLORS.onPrimaryMuted,
        fontSize: 15,
        fontFamily: "WorkSans_400Regular",
        lineHeight: 22,
        textAlign: "center",
        marginBottom: 16,
    },
    footer: {
        color: COLORS.onPrimary,
        fontSize: 18,
        fontFamily: "WorkSans_600SemiBold",
        lineHeight: 24,
        textAlign: "center",
        marginTop: 8,
    },
});
