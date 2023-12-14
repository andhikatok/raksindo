import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { fontType, colors } from "../../theme";


const Categories = ({data}) => {
    return(
        <View style={styles.listCategory}>
            <View style={styles.item}>
            <Text style={styles.title}>{data.name}</Text>
            </View>
        </View>
    )
}

export default Categories
const styles = StyleSheet.create({
    listCategory: {
      paddingVertical: 5,
    },
    item: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: colors.white(),
        marginHorizontal: -25,
        marginLeft: 20,
      },
    title: {
        fontFamily: fontType['Pjs-SemiBold'],
        fontSize: 14,
        lineHeight: 18,
        color: colors.black(),
        
      },
  });