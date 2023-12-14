import React, {useRef} from "react";
import { ScrollView, Text, StyleSheet, Image, View, FlatList, Animated } from "react-native";
import { Setting, Personalcard, Call, Sms, Map1, Logout, Information } from "iconsax-react-native";
import { fontType, colors } from "../../theme";
import { Navbar } from "../../components"
import { useNavigation } from "@react-navigation/native";

export default function Profiles() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0,100],
    outputRange: [ 0, -100],
    extrapolate: 'clamp',
  })

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontFamily: fontType['Pjs-ExtraBold'], color: 'black', fontSize: 23, textAlign: 'center', marginTop: 10 }}>Profile</Text>
        <View style={styles.HeaderProfile}>
          <View style={styles.propil}>
            <Image style={styles.imageprofil} source={{ uri: 'https://qph.cf2.quoracdn.net/main-qimg-3b1cdd9c4fb36cf3b771b9b8318623ab-pjlq' }} />
          </View>
        </View>
        <View>
          <Text style={{ fontFamily: fontType['Pjs-Bold'], color: 'black', fontSize: 19, textAlign: 'center' }}>ANDI MARIMAS</Text>
          <Text style={{ fontFamily: fontType['Pjs-Bold'], color: 'black', fontSize: 15, textAlign: 'center' }}>MEMBER ID : 016740178</Text>
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
        <Animated.View style={{ margin: 25, transform: [{ translateY}] }}>
          <Text style={styles.titleprofile}>Personal Info</Text>
        </Animated.View>
        <View style={styles.iconprofil}>
          <View style={styles.containerprofil}>
            <Personalcard color={colors.black()} variant="Linear" size={30} />
            <View>
              <Text style={{ textAlign: "center", textAlignVertical: "center", fontSize: 19, color: 'black' }}> Name      : Andi Marimas</Text>
            </View>
          </View>
          <View style={styles.containerprofil}>
            <Call color={colors.black()} variant="Linear" size={30} />
            <View>
              <Text style={{ textAlign: "center", textAlignVertical: "center", fontSize: 19, color: 'black' }}> Number  : 086554437261</Text>
            </View>
          </View>
          <View style={styles.containerprofil}>
            <Sms color={colors.black()} variant="Linear" size={30} />
            <View>
              <Text style={{ textAlign: "center", textAlignVertical: "center", fontSize: 19, color: 'black' }}> Email      : Andhimarimas@gmailcom</Text>
            </View>
          </View>
          <View style={styles.containerprofil}>
            <Map1 color={colors.black()} variant="Linear" size={30} />
            <View>
              <Text style={{ textAlign: "center", textAlignVertical: "center", fontSize: 19, color: 'black' }}> Location : Desa Rujuk</Text>
            </View>
          </View>
          <Text style={fontFamily = fontType['Pjs-Bold']}>_____________________________________________________</Text>
          <View style={styles.containerprofil}>
            <Setting color={colors.black()} variant="Linear" size={30} />
            <View>
              <Text style={{ textAlign: "center", textAlignVertical: "center", fontSize: 19, color: 'black' }}> SETTING</Text>
            </View>
          </View>
          <View style={styles.containerprofil}>
            <Information color={colors.black()} variant="Linear" size={30} />
            <View>
              <Text style={{ textAlign: "center", textAlignVertical: "center", fontSize: 19, color: 'black' }}> INFORMATION</Text>
            </View>
          </View>
          <Text style={fontFamily = fontType['Pjs-Bold']}>_____________________________________________________</Text>
          <View style={styles.containerprofil}>
            <Logout color={colors.black()} variant="Linear" size={30} />
            <View>
              <Text style={{ textAlign: "center", textAlignVertical: "center", fontSize: 19, color: 'black' }}> LOG OUT</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream(),
  },
  titleprofile: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: 'black',
  },
  containerprofil: {
    flexDirection: 'row',
    marginVertical: '10',
  },
  HeaderProfile: {
    alignItems: 'center',
    height: 150,
    position: 'relative',
  },
  header: {
    backgroundColor: colors.subbackground(),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
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
  imageprofil: {
    height: 110,
    width: 110,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  propil: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  profileicon: {
    alignItems: "center",
    justifyContent: 'center',
    display: 'flex',
  },
  iconprofil: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'flex-start',
    gap: 20,
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