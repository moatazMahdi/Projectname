import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './RootNavigator';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="RootNavigator" component={RootNavigator} options = {{header :()=>null}}/>
                <Stack.Screen name="Details" component={Details} options = {{header :()=>null}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;