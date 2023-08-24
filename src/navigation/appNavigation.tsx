import { StyleSheet, Text, View } from "react-native";
import React,{ useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LanguageScreen from "../screens/LanguageScreen";
import WalkthroughScreen from "../screens/WalkthroughScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPass1Screen from "../screens/ForgotPass1Screen";
import ForgotPass2Screen from "../screens/ForgotPass2Screen";
import ForgotPass3Screen from "../screens/ForgotPass3Screen";

import DelayedNavigation from "./DelayedNavigation";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="Language" component={LanguageScreen} />
				<Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Forgot" component={ForgotPass1Screen} />
				<Stack.Screen name="Forgot2" component={ForgotPass2Screen} />
				<Stack.Screen name="Forgot3" component={ForgotPass3Screen} />
				<Stack.Screen name="Register" component={RegisterScreen} />

			</Stack.Navigator>
            <DelayedNavigation />
		</NavigationContainer>
	);
};

export default AppNavigator;

const styles = StyleSheet.create({});