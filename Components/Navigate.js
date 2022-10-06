import React from "react";
import LoginScreen from '../Login/ScreenLogin';
import HomeScreen from '../Login/ScreenHome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenMain from '../Screens/ScreenMain';
import InfoScreen from '../Screens/InfoScreen';
import Menu from './Menu';
import Moscow from "../Screens/Moscow";
import Boston from "../Screens/Boston";
import London from "../Screens/London";
const Stack = createNativeStackNavigator();

export default function Navigate() {
    return( <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={ScreenMain}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Info" component={InfoScreen} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Moscow" component={Moscow} />
            <Stack.Screen name="London" component={London} />
            <Stack.Screen name="Boston" component={Boston} />
        </Stack.Navigator>
    </NavigationContainer>
    )
};