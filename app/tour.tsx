import {useEffect, useState} from "react";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {Footer} from "@/components/Footer";
import {PageContainer} from "@/components/PageContainer";
import {PageHeader} from "@/components/PageHeader";
import {TourOverview} from "@/components/TourOverview";
import {COLORS} from "@/constants/colors";
import {getSteps} from "@/services/stepService";
import type {Step} from "@/types/Step";
import type {TourStop} from "@/types/TourStop";

const TITLE = "Rondleiding";
const INTRO = "Volg de rode QR-borden over de campus. Scan bij elke stop om meer te ontdekken.";

function toTourStops(steps: Step[]): TourStop[] {
    const nextId = steps.find((step) => !step.visited)?.id;

    return steps.map((step) => ({
        id: step.id,
        title: step.title,
        location: step.location,
        status: step.visited ? "visited" : step.id === nextId ? "next" : "upcoming",
    }));
}

export default function TourScreen() {
    const [stops, setStops] = useState<TourStop[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        getSteps()
            .then((steps) => {
                if (!cancelled) setStops(toTourStops(steps));
            })
            .catch((err: unknown) => {
                console.error(err);
                if (!cancelled) setError("De rondleiding kon niet geladen worden. Probeer het later opnieuw.");
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <PageContainer footer={<Footer activeTab="tour" />}>
            {stops !== null ? (
                <TourOverview title={TITLE} intro={INTRO} stops={stops} />
            ) : (
                <View style={styles.status}>
                    <PageHeader title={TITLE} intro={INTRO} />
                    {error !== null ? (
                        <Text style={styles.error} accessibilityRole="alert">{error}</Text>
                    ) : (
                        <ActivityIndicator size="large" color={COLORS.onPrimary} accessibilityLabel="Rondleiding laden" />
                    )}
                </View>
            )}
        </PageContainer>
    );
}

const styles = StyleSheet.create({
    status: {
        gap: 24,
        paddingTop: 40,
    },
    error: {
        color: COLORS.onPrimary,
        fontSize: 15,
        fontFamily: "WorkSans_600SemiBold",
        lineHeight: 22,
    },
});
