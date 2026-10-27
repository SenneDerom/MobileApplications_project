import {View, Image, StyleSheet} from "react-native";

type LogoHeaderProps = {
    height?: number;
}

export function LogoHeader({height = 200}: LogoHeaderProps) {
    return (
        <View style={styles.header}>
            <Image
                source={require("../../public/icons/logo_ucll.png")}
                style={[styles.logo, {height}]}
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
        aspectRatio: 1264 / 1920,
    },
});
