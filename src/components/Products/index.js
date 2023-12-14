import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import { fontType, colors } from "../../theme";
import FastImage from 'react-native-fast-image';

const Newproduct = ({data}) => {
    return(
        <View style={styles.content}>
            <Text style={styles.title}>{data?.title}</Text>
                <FastImage source={{uri: data?.image,  headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,}}  style={styles.image} resizeMode={FastImage.resizeMode.cover}/>
        </View>
    )
}

export default Newproduct
const styles = StyleSheet.create({
    content: {
        padding: 20,
        backgroundColor: colors.white(),
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 30,
        height: 250,
    },
    image:{
        resizeMode: 'contain',
        height: 180,
        width: 180,
    },
    title: {
        fontFamily: fontType['Pjs-SemiBold'],
        fontSize: 14,
        lineHeight: 18,
        color: colors.black(),
    },
  });