import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

import SplashScreen from './src/screens/SplashScreen';
import DMenus from './src/screens/DMenus';
import NewItemCategory from './src/ExtraScreen/NewItemCategory';
import NewItem from './src/ExtraScreen/NewItem';
import NewPartyScreen from './src/ExtraScreen/NewPartyScreen';
import NewMoneyIn from './src/ExtraScreen/NewMoneyIn';
import NewMoneyOut from './src/ExtraScreen/NewMoneyOut';
import SelectPartyScreen from './src/ExtraScreen/SelectPartyScreen';
import SelectItemsScreen from './src/ExtraScreen/SelectItemsScreen';
import CustomerParcel from './src/ExtraScreen/CustomerParcel';
import ConnectPrinter from './src/printer/ConnectPrinter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StackComponent />
    </Provider>
  );
}

// Handle Stack Component
const StackComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerMenus">
        <Stack.Screen
          name="Welcome"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Authentication"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerMenus"
          component={DMenus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="New Item Category"
          component={NewItemCategory}
          options={{
            headerShown: true,
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
        <Stack.Screen
          name="New Item"
          component={NewItem}
          options={{
            headerShown: true,
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
        <Stack.Screen
          name="New Party"
          component={NewPartyScreen}
          options={{
            headerShown: true,
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
        <Stack.Screen
          name="New MoneyIn"
          component={NewMoneyIn}
          options={{
            headerShown: true,
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
        <Stack.Screen
          name="New MoneyOut"
          component={NewMoneyOut}
          options={{
            headerShown: true,
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
        <Stack.Screen
          name="Select Party"
          component={SelectPartyScreen}
          options={{
            headerShown: true,
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
         <Stack.Screen
          name="Select Items"
          component={SelectItemsScreen}
          options={{
            headerShown: true,
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
        <Stack.Screen
          name="Search Customer"
          component={CustomerParcel}
          options={{
            headerShown: true,
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
          <Stack.Screen
          name="Connect Printer"
          component={ConnectPrinter}
          options={{
            headerShown: true,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// Authentication Component
const Auth = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};
