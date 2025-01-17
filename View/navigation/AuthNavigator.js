import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';


const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />


    </Stack.Navigator>
)

export default AuthNavigator;