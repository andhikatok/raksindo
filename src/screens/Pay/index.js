import React, {useRef} from "react";
import { ScrollView, Text, StyleSheet, Image, View, FlatList, Animated   } from "react-native";
import { Notification1, WalletAdd1, Personalcard, Coin } from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { transaction } from "../../components";
import { transactiondata } from "../../../data";
import Transaction from "../../components/Transaction";
import { useNavigation } from "@react-navigation/native";

export default function Pays() {
  const scrollY = useRef(new Animated.Value(1)).current;
  const translateY = scrollY.interpolate({
    inputRange: [-100,0, 100], // Ubah nilai ini sesuai dengan seberapa jauh Anda ingin animasi terjadi
    outputRange: [0, 0, -100],
    extrapolate: 'clamp',
  });
  const opacity = scrollY.interpolate({
    inputRange: [-100, 0, 50, 100],
    outputRange: [0, 1, 0.5, 0],
    extrapolate: 'clamp',
  });


  return (
    <View style={styles.container}>
      <View>
        <View style={styles.HeaderPay}>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <Text style={styles.rupiah}> $ 3,570.00</Text>
          </View>
          <View style={styles.propil}>
            <Notification1 size={30} variant="Broken" color={colors.black()} />
            <Image style={styles.image} source={{ uri: 'https://qph.cf2.quoracdn.net/main-qimg-3b1cdd9c4fb36cf3b771b9b8318623ab-pjlq' }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignContent: "space-between", justifyContent: 'space-around', margin: 25 }}>
          <View style={styles.payicon}>
            <WalletAdd1 size={40} variant="Broken" color={colors.black()} />
            <Text> TOP UP</Text>
          </View>
          <View style={styles.payicon}>
            <Personalcard size={40} variant="Broken" color={colors.black()} />
            <Text>MEMBER CARD</Text>
          </View>
          <View style={styles.payicon}>
            <Coin size={40} variant="Broken" color={colors.black()} />
            <Text>100 POINTS</Text>
          </View>
        </View>
      </View>
      
      <ScrollView 
        style={styles.header}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // Animated.event tidak bekerja dengan useNativeDriver true pada ScrollView
        )}
        scrollEventThrottle={16}
      >
        <Animated.View style={{ transform: [{ translateY }], opacity }}>
          <Text style={styles.title}>TODAY TRANSACTION</Text>
        </Animated.View>
          <RenderTransaction />
      </ScrollView>
    </View>
  );
}


const RenderTransaction = () => {
  const renderItem = ({ item }) => {
    return (
      <Transaction data={item} />
    )
  }
  return (
    <FlatList
      data={transactiondata}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream(),
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fontType['Pjs-Bold'],
    marginBottom: 10,
    marginTop: 10,
  },
  HeaderPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: colors.subbackground(),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  kotak: {
    padding: 20,
    backgroundColor: colors.black(),
    alignItems: 'center',
    borderRadius: 10,
    margin: 1,
    height: 60,
    width: 20,
  },
  rupiah: {
    marginTop: 20,
    fontSize: 30,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  image: {
    height: 45,
    width: 45,
    marginLeft: 12,
  },
  propil: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    marginTop: 40,
  },
  payicon: {
    alignItems: "center",
  }
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