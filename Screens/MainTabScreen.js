import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>
(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={'darkmagenta'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: "Suit's Types",
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={'indigo'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Review's",
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={'darkred'} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Chatting',
          tabBarColor: '#d12ffe',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={'navy'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>
(
    <HomeStack.Navigator screenOptions={{
         headerStyle:{
            backgroundColor: '#009387',
          },
          headerTintColor:'deeppink',
          headerTitleStyle:{
            fontWeight:'bold'
          }
          }}>
        <HomeStack.Screen name="Home" component={HomeScreen} 
        options={{ 
          title:"Suit's Desserts Overview",
      
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" color="lime" onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
           }} />
         
    </HomeStack.Navigator>
);


const DetailsStackScreen = ({navigation}) =>
(
<DetailStack.Navigator screenOptions={{
         headerStyle:{
            backgroundColor: '#1f65ff',
          },
          headerTintColor:'orange',
          headerTitleStyle:{
            fontWeight:'bold'
          }
      }}>
        <DetailStack.Screen name="Details" component={DetailsScreen} 
        options={{ 
          title:"Suit's System",
          headerLeft: () => (
            <Icon.Button name="rocket" size={25} backgroundColor="#1f65ff" color="red" onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
          }} />
      </DetailStack.Navigator>
);


const ProfileStackScreen = ({navigation}) =>
(
    <ProfileStack.Navigator screenOptions={{
         headerStyle:{
            backgroundColor: '#694fad',
            
          },
          headerTintColor:'hotpink',
          headerTitleStyle:{
            fontWeight:'bold'
          }
          
          }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} 
        options={{ 
          title:"Review's",
          
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}  backgroundColor="#694fad" color="violet" onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
           }} />
         
    </ProfileStack.Navigator>
);

const ExploreStackScreen = ({navigation}) =>
(
    <ExploreStack.Navigator  screenOptions={{
      headerStyle:{
         backgroundColor: '#d12ffe',     
       },
       headerTintColor:'navy',
       headerTitleStyle:{
         fontWeight:'bold'
       },
      // headerShown:false,
       }}>
        <ExploreStack.Screen name="Explore"  component={ExploreScreen} 
        options={{ 
          title:"Chats Together ...",
          
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}  backgroundColor="#d12ffe" color="navy" onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          )
           }} />
         
    </ExploreStack.Navigator>
);