import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Router from './src/navigation/Router';
import { Home, Pay, Profile, } from "./src/screens";

const Stack = createStackNavigator();


export default function App(){
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}
