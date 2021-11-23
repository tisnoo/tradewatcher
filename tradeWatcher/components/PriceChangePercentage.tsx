import React from 'react';

import { Text, StyleSheet, View } from 'react-native';

export default function PriceChangePercentage(props: any) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={props.priceChangePercentage24h > 0 ? styles.trianglePositive : styles.triangleNegative}>

            </View>
            <Text style={[styles.heading, props.priceChangePercentage24h > 0 ? styles.positive : styles.negative]}>
                {getFormattedPercentage(props.priceChangePercentage24h)} %
            </Text>
        </View>
    );
}

function getFormattedPercentage(priceChangePercentage24h: number): string {
    return priceChangePercentage24h.toFixed(2);
}

const styles = StyleSheet.create({
    heading: {
        textAlign: 'left',
        fontSize: 15,
    },

    positive: {
        color: "green",
    },

    negative: {
        color: "red",
    },

    trianglePositive: {
        right: 5,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "green",
    },

    triangleNegative: {
        right: 5,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderTopWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "red",
    },
})

