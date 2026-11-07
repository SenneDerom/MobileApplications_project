import {View, Image, StyleSheet} from "react-native";

// Width / height of logo_ucll.png. The width must be set explicitly: on web the Image
// otherwise takes the file's full width (1264px), making the page wider than the screen.
const LOGO_ASPECT_RATIO = 1264 / 1920;

type LogoHeaderProps = {
    height?: number;
}

export function LogoHeader({height = 200}: LogoHeaderProps) {
    return (
        <View style={styles.header}>
            <Image
                source={require("../../public/icons/logo_ucll.png")}
                style={[styles.logo, {height, width: height * LOGO_ASPECT_RATIO}]}
                resizeMode="contain"
                accessibilityLabel="UCLL logo"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginTop: 10,
    },
    logo: {
        aspectRatio: LOGO_ASPECT_RATIO,
    },
});
