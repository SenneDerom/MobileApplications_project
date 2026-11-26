import {ScrollView, StyleSheet} from "react-native";
import {PageHeader} from "@/components/PageHeader";
import {TourProgressCard} from "@/components/TourProgressCard";
import {TourStopCard} from "@/components/TourStopCard";
import type {TourStop} from "@/types/TourStop";

type TourOverviewProps = {
    title: string;
    intro: string;
    stops: TourStop[];
    remainingMinutes?: number;
    onStopPress?: (stop: TourStop) => void;
}

export function TourOverview({title, intro, stops, remainingMinutes, onStopPress}: TourOverviewProps) {
    const visited = stops.filter((stop) => stop.status === "visited").length;

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <PageHeader title={title} intro={intro} />
            <TourProgressCard visited={visited} total={stops.length} remainingMinutes={remainingMinutes} />
            {stops.map((stop, index) => (
                <TourStopCard
                    key={stop.id}
                    number={index + 1}
                    stop={stop}
                    onPress={onStopPress !== undefined ? () => onStopPress(stop) : undefined}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    content: {
        gap: 12,
        paddingTop: 40,
        paddingBottom: 24,
    },
});
