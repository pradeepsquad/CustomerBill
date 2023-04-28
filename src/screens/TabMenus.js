import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from '../DrawerMenu/DashBoardScreen';
import PartyList from '../DrawerMenu/PartyList';
import Inventory from '../TabMenu/Inventory';
import Payments from '../TabMenu/Payments';
import Settings from '../TabMenu/Settings';

const Tab = createBottomTabNavigator();

export default function TabMenus() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Party') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Payments') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Inventory') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
        // tabBarActiveTintColor: '#008AD0',
        // tabBarInactiveTintColor: 'silver',
      })}>
      <Tab.Screen
        name="Dashboard"
        component={DashBoardScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Party"
        component={PartyList}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
    </Tab.Navigator>
  );
}
