import {Button} from "@/components/Button";
import {ButtonGroup} from "@/components/ButtonGroup";
import {PageContainer} from "@/components/PageContainer";
import {StepList} from "@/components/StepList";

const STEPS = [
    {
        title: "Zoek de QR-codes",
        description: "Op verschillende plaatsen in de campus hangen borden met QR-codes.",
    },
    {
        title: "Scan met de app",
        description: "Scan een QR-code met deze app en leer alles over je toekomstige opleiding.",
    },
    {
        title: "Geen vaste volgorde",
        description: "Je kan de QR-codes in eender welke volgorde scannen.",
    },
    {
        title: "Neem je tijd",
        description: "Onderbreek de rondleiding wanneer je wil en zet ze later verder. Er is geen tijdslimiet.",
    },
];

export default function ExplanationScreen() {
    return (
        <PageContainer>
            <StepList
                title="Hoe werkt het?"
                intro="Ontdek de campus op je eigen tempo in vier eenvoudige stappen."
                steps={STEPS}
                footer="Veel plezier!"
            />

            <ButtonGroup>
                <Button label="Start de rondleiding" />
            </ButtonGroup>
        </PageContainer>
    );
}
