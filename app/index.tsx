import {router} from "expo-router";
import {Button} from "@/components/Button";
import {ButtonGroup} from "@/components/ButtonGroup";
import {IntroText} from "@/components/IntroText";
import {LogoHeader} from "@/components/LogoHeader";
import {PageContainer} from "@/components/PageContainer";
import {COLORS} from "@/constants/colors";

export default function LandingScreen() {
    return (
        <PageContainer>
            <LogoHeader />

            <IntroText
                title="Welkom op Campus Connect"
                body="Ontdek de campus op je eigen tempo. Scan de QR-codes op de borden en leer alles over je toekomstige opleiding."
            />

            <ButtonGroup>
                <Button label="Start de rondleiding" />
                <Button
                    onPress={() => router.push("/explanation")}
                    label="Bekijk de uitleg"
                    textColor={COLORS.onPrimary}
                    backgroundColor={COLORS.primary}
                    borderColor={COLORS.onPrimary}
                />
            </ButtonGroup>
        </PageContainer>
    );
}
