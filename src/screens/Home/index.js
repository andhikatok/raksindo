import React, {useState,useCallback, useEffect} from "react";
import { Text, StyleSheet, View, TextInput, FlatList, Image, Animated, TouchableOpacity, useAnimatedValue, TouchableWithoutFeedback, ActivityIndicator, ScrollView } from "react-native";
import { SearchNormal, Candle2, Wallet, ProfileCircle, Setting, Home3, Add } from "iconsax-react-native";
import { fontType, colors } from "../../../src/theme";
import { Categories, Newproduct } from "../../components";
import { Navbar } from "../../components"
import { categoriesdata, newproductdata } from "../../../data";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';

export default function Home() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Product')
      .onSnapshot(querySnapshot => {
        const products = [];
        querySnapshot.forEach(documentSnapshot => {
          products.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setProductData(products);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
      .collection('Product')
      .onSnapshot(querySnapshot => {
        const products = [];
        querySnapshot.forEach(documentSnapshot => {
          products.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setProductData(products);
      });
    setRefreshing(false);
  }, 1500);
}, []);

  return (
    <View style={styles.container}>
      <View style={styles.Headers}>
        <Image style={styles.logo} source={require('../../assets/img/logo.png')}></Image>
      </View>
      <View style={styles.searchrow}>
        <View style={styles.boxsearch}>
          <SearchNormal color={colors.black()} varian="Linear" size={25} />
          <TextInput size={14} placeholder=" Search Product" color={colors.black()} />
        </View>
        <View style={styles.boxfilter}>
          <Candle2 size={25} varian="Linear" color={colors.black()} />
        </View>
      </View>
      <View style={styles.card}>
      </View>
      <View style={styles.text}>
        <Text style={styles.heading}>Categories</Text>
        <Text style={styles.subheading}>See More</Text>
      </View>
      <View>
        <RenderCategory />
      </View>
      <View style={styles.text}>
        <Text style={styles.heading}>New Product</Text>
        <Text style={styles.subheading}>See More</Text>
      </View>
      <ScrollView>
      {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            productData.map((data, index) => <Newproduct data={data} key={index} />)
          )}
      </ScrollView>
    </View >
  );
}
const navigation = useNavigation();

const RenderCategory = () => {
  const renderItem = ({ item }) => {
    return (
      <Categories data={item} />
    )
  }
  return (
    <FlatList
      data={categoriesdata}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
      contentContainerStyle={{ gap: 10 }}
      horizontal
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream(),
  },
  Headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
  boxsearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white(),
    paddingHorizontal: 20,
    marginTop: 20,
    width: '80%',
    borderRadius: 10,
  },
  boxfilter: {
    padding: 10,
    backgroundColor: colors.white(0.8),
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  searchrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  text: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  heading: {
    padding: 5,
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 20,
    lineHeight: 18,
    color: colors.black(),
  },
  subheading: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.black(0.5),
  },
  cardIcon: {
    backgroundColor: colors.blue(0.8),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
  content: {
    padding: 20,
    backgroundColor: colors.white(),
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    height: 200,
  },
  listCategory: {
    marginTop: 5,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  logo: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

const category = StyleSheet.create({
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.black(),
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.white(),
    marginHorizontal: 5
  },
});

const navbar = StyleSheet.create({
  navButton: {
    backgroundColor: colors.black(),
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    elevation: 8,
    paddingBottom: 4,
  },
  navIcon: {
    alignItems: 'center',
    paddingHorizontal: 45,
  },
  navText: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 10,
    color: colors.black(),
  },
});
