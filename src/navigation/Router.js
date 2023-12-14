import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Pay, Profile, AddProduct, AddBlogForm} from '../screens';
import { Wallet, ProfileCircle, Home3, Building, Chart } from "iconsax-react-native";
import { fontType, colors } from "../theme";

const Tab = createBottomTabNavigator();
function Router() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.icon(),
        tabBarInactiveTintColor: colors.subbackground(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
          fontFamily: fontType['Pjs-Medium'],
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home3
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          tabBarLabel: 'Pay',
          tabBarIcon: ({focused, color}) => (
            <Wallet
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddBlog"
        component={ AddBlogForm }
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({focused, color}) => (
            <Chart
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
        ),
        headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default Router;