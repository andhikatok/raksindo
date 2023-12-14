import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Wallet, Home3, ProfileCircle, Add } from "iconsax-react-native";
import { colors , fontType} from "../../theme";

const Navbar = () => {
    return (
        <View style={navbar.navButton}>
        <View style={navbar.navIcon}>
          <Home3 color={colors.subbackground()} variant="Linear" size={35} />
          <Text style={navbar.navText}>Home</Text>
        </View>
        <View style={navbar.navIcon}>
          <Wallet color={colors.subbackground()} variant="Linear" size={35} />
          <Text style={navbar.navText}>Pay</Text>
        </View>
        <View style={navbar.navIcon}>
          <ProfileCircle color={colors.subbackground()} variant="Linear" size={35} />
          <Text style={navbar.navText}>Account</Text>
        </View>
      </View>
    )
}
export default Navbar

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