import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, Pressable } from 'react-native';
import PriceChangePercentage from './PriceChangePercentage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const ItemOverview = (props: any) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('ItemDetails', {item: props.item})} style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
        })}>
            <View style={styles.mainRow}>

                <View style={{ flexDirection: "row", alignItems: 'center', }}>

                    <Image source={{ uri: props.item.image }}
                        style={styles.image}
                    />

                    <Text style={styles.coinName}>
                        {props.item.name}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", right: 20 }}>
                    <Text style={styles.coinPrice}>
                        € {props.item.currentPrice.toFixed(2)}
                    </Text>

                    <PriceChangePercentage priceChangePercentage24h={props.item.priceChange24H} />
                </View>
            </View>
        </Pressable>
    )
}

export default ItemOverview;

const styles = StyleSheet.create({
    coinName: {
        fontSize: 15,
        left: 30,
    },
    coinPrice: {
        fontSize: 15,
        right: 20,
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 0,
        left: 20,
        right: 20,
    },
    mainRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
})