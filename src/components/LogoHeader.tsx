import {View, Image, StyleSheet} from "react-native";

export function LogoHeader() {
    return (
        <View style={styles.header}>
            <Image
                source={require("../../public/icons/logo_ucll.png")}
                style={styles.logo}
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
        height: 200,
        aspectRatio: 1264 / 1920,
    },
});
