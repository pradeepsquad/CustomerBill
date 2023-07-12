import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
import EditProfile from './src/Profile/EditProfile';
import ChatScreen from './src/chat/ChatScreen';
import ModifyStock from './src/ExtraScreen/ModifyStock';
import Profile from './src/ExtraScreen/Profile';
import PrintDetails from './src/ExtraScreen/PrintDetails';


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
      <Stack.Navigator initialRouteName="Welcome">
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
            headerTintColor: 'white',
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
            headerTintColor: 'white',
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
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="New Money In"
          component={NewMoneyIn}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#008AD0',
            },
            headerTintColor: 'white',
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
            headerTintColor: 'white',
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
            headerTintColor: 'white',
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
            headerTintColor: 'white',
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
            headerTintColor: 'white',
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
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />

        <Stack.Screen
          name="Profile"
          component={EditProfile}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#008AD0',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />

        <Stack.Screen
          name="Chats"
          component={ChatScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#008AD0',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />

        <Stack.Screen
          name="Modify Item Stock"
          component={ModifyStock}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#008AD0',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="Edit Profile"
          component={Profile}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#008AD0',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
            <Stack.Screen
          name="New Sale"
          component={PrintDetails}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#008AD0',
            },
            headerTintColor: 'white',
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
const Auth = ({navigation}) => {
const [phone, setPhone] = useState();
const [confirmation, setConfirmation] = useState(null)


// Handle Submit Button
  const handleSubmitButton = () => {
    navigation.replace('DrawerMenus')
  };

  const handleConfirmation = () => {
    navigation.replace('DrawerMenus')
  }

if(confirmation){return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          {/* Phone Number */}
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            placeholderTextColor="silver"
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>
        {/* Submit Button */}
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <TouchableOpacity
            style={styles.buttonSubmitView}
            onPress={() => handleSubmitButton()}>
            <Text style={styles.buttonSubmitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );}
  return(
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{marginTop: 250, marginHorizontal: 20}}>
          <Text>Otp Screen</Text>
        </View>
        <TouchableOpacity style={styles.buttonSubmitView} onPress={() => handleConfirmation()}>
          <Text style={styles.buttonSubmitText}>CONFIRM</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    marginTop: 250,
    marginHorizontal: 20,
  },
  textInput: {
    height: 50,
    borderColor: 'silver',
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    marginTop: 15,
  },
  buttonSubmitView: {
    height: 50,
    backgroundColor: '#008AD0',
    width: 250,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonSubmitText: {
    marginTop: 15,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
