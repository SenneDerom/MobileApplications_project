export type TourStopStatus = "visited" | "next" | "upcoming";

export type TourStop = {
    id: string;
    title: string;
    location: string;
    walkMinutes: number;
    status: TourStopStatus;
}
