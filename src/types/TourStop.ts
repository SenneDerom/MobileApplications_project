export type TourStopStatus = "visited" | "next" | "upcoming";

export type TourStop = {
    id: number;
    title: string;
    location: string;
    status: TourStopStatus;
}
