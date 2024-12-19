import React from "react";
import type { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

export default function CurrencyButton(props: CurrencyButtonProps): JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center"
    },
    flag: {
        fontSize: 28,
        marginBottom: 4
    },
    name: {
        fontSize: 12
    }
})