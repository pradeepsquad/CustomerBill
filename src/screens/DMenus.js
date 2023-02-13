import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

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
 
const Drawer = createDrawerNavigator()
export default function DMenus() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={TabMenus}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitle: 'Dashboard',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='Reports' component={ReportScreen}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='Sale List' component={SaleListScreen}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='Purchase List' component={PurchaseList}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='Estimate List' component={EstimateList}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='Expense List' component={ExpenseList}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='MoneyIn List' component={MoneyInList}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='MoneyOut List' component={MoneyOutList}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='Item List' component={Inventory}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='Party List' component={PartyList}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
      <Drawer.Screen name='Greetings' component={Greetings}    options={{
                headerShown: true,  
                headerStyle: {
                backgroundColor: '#008AD0',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
                },
         }}/>
    </Drawer.Navigator> 
  )
}

