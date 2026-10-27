import {Button} from "@/components/Button";
import {ButtonGroup} from "@/components/ButtonGroup";
import {IntroText} from "@/components/IntroText";
import {LogoHeader} from "@/components/LogoHeader";
import {PageContainer} from "@/components/PageContainer";

export default function ExplanationScreen() {
    return (
        <PageContainer>
            <LogoHeader />

            <IntroText
                title="Bekijk de uitleg"
                body="Ontdek de campus op je eigen tempo. Op verschillende plaatsen in de campus kan je QR-codes vinden. Scan deze QR-codes met deze app en leer alles over je toekomstige opleiding. Er is geen volgorde, je kan de QR-codes in eender welke volgorde scannen. Je kan de rondleiding ook op elk moment onderbreken en later verder zetten, er is geen tijdslimiet. Veel plezier!"
            />

            <ButtonGroup>
                <Button label="Start de rondleiding" />
            </ButtonGroup>
        </PageContainer>
    );
}
