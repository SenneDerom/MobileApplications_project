import {Footer} from "@/components/Footer";
import {PageContainer} from "@/components/PageContainer";
import {TourOverview} from "@/components/TourOverview";
import type {TourStop} from "@/types/TourStop";

// Hardcoded until the stops and the visitor's progress come from Supabase.
const STOPS: TourStop[] = [
    {id: "onthaal", title: "Onthaal & inschrijvingen", location: "Gebouw A · gelijkvloers", walkMinutes: 0, status: "visited"},
    {id: "bibliotheek", title: "Bibliotheek & studieplekken", location: "Gebouw A · eerste verdieping", walkMinutes: 1, status: "visited"},
    {id: "it-labos", title: "IT-labo's", location: "Gebouw A · tweede verdieping", walkMinutes: 2, status: "next"},
    {id: "makerspace", title: "Makerspace", location: "Gebouw B · gelijkvloers", walkMinutes: 3, status: "upcoming"},
    {id: "studentenresto", title: "Studentenresto", location: "Gebouw C · gelijkvloers", walkMinutes: 2, status: "upcoming"},
    {id: "sportzaal", title: "Sportzaal", location: "Gebouw D · gelijkvloers", walkMinutes: 4, status: "upcoming"},
    {id: "auditorium", title: "Auditorium", location: "Gebouw B · eerste verdieping", walkMinutes: 4, status: "upcoming"},
    {id: "studentenvoorzieningen", title: "Studentenvoorzieningen", location: "Gebouw C · eerste verdieping", walkMinutes: 2, status: "upcoming"},
];

export default function TourScreen() {
    return (
        <PageContainer footer={<Footer activeTab="tour" />}>
            <TourOverview
                title="Rondleiding"
                intro="Volg de rode QR-borden over de campus. Scan bij elke stop om meer te ontdekken."
                stops={STOPS}
                remainingMinutes={25}
            />
        </PageContainer>
    );
}
