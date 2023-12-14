import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Image } from "react-native";
import { fontType, colors } from "../../theme";


const Transaction = ({data}) => {
    return(
        <View style={styles.content}>
            <Text style={styles.title}>{data.name}</Text>
            <View style={styles.content}>
                <Image source={data.image}  style={styles.image}/>
            <Text style={styles.harga}>{data.harga}</Text>
            </View>
        </View>
    )
}

export default Transaction
const styles = StyleSheet.create({
    content: {
        padding: 20,
        backgroundColor: colors.white(),
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 50,
        marginHorizontal: 30,
        height: 350,
    },
    image:{
        height: 180,
        width: 180,
    },
    title: {
        fontFamily: fontType['Pjs-SemiBold'],
        fontSize: 14,
        lineHeight: 18,
        color: colors.black(),
    },
    harga: {
        fontFamily: fontType['Pjs-Bold'],
        fontSize: 30,
        lineHeight: 40,
        color: colors.black(),
        marginTop: 30, 
    }
  });