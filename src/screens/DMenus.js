import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  drawerIcon,
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SaleListScreen from '../DrawerMenu/SaleListScreen';
import ReportScreen from '../DrawerMenu/ReportScreen';
import PurchaseList from '../DrawerMenu/PurchaseList';
import EstimateList from '../DrawerMenu/EstimateList';
import ExpenseList from '../DrawerMenu/ExpenseList';
import MoneyInList from '../DrawerMenu/MoneyInList';
import MoneyOutList from '../DrawerMenu/MoneyOutList';
import PartyList from '../DrawerMenu/PartyList';
import Greetings from '../DrawerMenu/Greetings';
import Inventory from '../TabMenu/Inventory';
import TabMenus from './TabMenus';

const Drawer = createDrawerNavigator();
export default function DMenus() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={TabMenus}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="home"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
          headerStyle: {
            backgroundColor: '#008AD0',
          },
          headerTintColor: 'black',
          headerTitle: 'Dashboard',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Drawer.Screen
        name="Reports"
        component={ReportScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="document"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Sale List"
        component={SaleListScreen}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cellular"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Purchase List"
        component={PurchaseList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cellular"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Estimate List"
        component={EstimateList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="briefcase"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Expense List"
        component={ExpenseList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="cellular"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Money In List"
        component={MoneyInList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="wallet"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Money Out List"
        component={MoneyOutList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="wallet"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Item List"
        component={Inventory}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="shapes"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Party List"
        component={PartyList}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="person"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
      <Drawer.Screen
        name="Greetings"
        component={Greetings}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="phone-portrait"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
    </Drawer.Navigator>
  );
}

// Custom Drawer Menus
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      {/* User Profile */}
      <View style={{backgroundColor: '#008AD0', marginTop: -4}}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: 12,
          }}>
          OP : 8193931712
        </Text>
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 80 / 2,
            borderColor: 'white',
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 10,
            backgroundColor: 'white',
          }}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: 12,
          }}>
          ABC
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: 12,
          }}>
          8193931712
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'white',
            height: 40,
            width: 150,
            marginBottom: 10,
            marginTop: 10,
            alignSelf: 'center',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            CHANGE PROFILE
          </Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem 
        label='Logout'
        style={{marginLeft: 70}}
      />
    </DrawerContentScrollView>
  );
}
