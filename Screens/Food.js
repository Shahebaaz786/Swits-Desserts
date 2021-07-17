import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SettingsScreen from './SettingsScreen';
import All from './All';


const StackNavigator = createStackNavigator({
    HomeScreen: {
        screen: All,
        navigationOptions: {
            headerShown: false
        }
    },
    DetailScreen: {
        screen: SettingsScreen,
        navigationOptions: {
            headerShown: false
        }
    },
});

export default createAppContainer(StackNavigator);