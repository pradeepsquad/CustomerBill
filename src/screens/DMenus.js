import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, Alert, ToastAndroid} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  drawerIcon,
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {imageSupplier} from '../Redux/reducerSlice/ProfileImageSlice';
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
      drawerContent={props => <CustomDrawerContent {...props} />}>
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
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
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={Greetings}
        options={{
          headerShown: true,
          drawerIcon: ({focused}) => (
            <Ionicons
              name="chatbubbles"
              size={25}
              color={focused ? '#008AD0' : '#A9A9A9'}
            />
          ),
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
    </Drawer.Navigator>
  );
}

// CUSTOM DRAWER MENUS
function CustomDrawerContent(props, {navigation}) {
  const [filePath, setFilePath] = useState();
  const dispatch = useDispatch();

  // UPLOAD PROFILE
  const handleUploadImages = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        ToastAndroid.showWithGravityAndOffset(
          'User cancelled camera picker',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          100,
          100,
        );
        // console.log('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        ToastAndroid.showWithGravityAndOffset(
          'Camera not available on device',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          100,
          100,
        );
        // console.log('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        ToastAndroid.showWithGravityAndOffset(
          'Permission not satisfied',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          100,
          100,
        );
        // console.log('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        ToastAndroid.showWithGravityAndOffset(
          response.errorMessage,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          100,
          100,
        );
        // console.log(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.assets[0].base64);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].width);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      // console.log('fileName -> ', response.assets[0].fileName);
      setFilePath(response.assets[0].uri);
      dispatch(imageSupplier(response.assets[0].uri));
    });
    
    
  };
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      {/* User Profile */}
      <View style={{backgroundColor: '#008AD0', marginTop: -4}}>
        <Text style={styles.opText}>OP : 8193931712</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Edit Profile')}>
          {!filePath ?<Image style={styles.image} source={require('../assets/pack.jpeg')} />:
          <Image style={styles.image} source={{uri: filePath}} />}
        </TouchableOpacity>

        <Text style={styles.nameStyle}>ABC</Text>
        <Text style={styles.noStyle}>8193931712</Text>
        <TouchableOpacity
          style={styles.profileView}
          onPress={() => handleUploadImages('photo')}>
          <Text style={styles.profileText}>CHANGE PROFILE</Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => Alert.alert('Logout', 'Are you sure ?',[
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'Cancel',
          },
          {
            text: 'Ok', onPress: () => console.log('OK Pressed')
          }
        ])}>
        <Ionicons
          name="log-out"
          size={35}
          color="white"
          style={{marginLeft: 15}}
        />
        <Text
          style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  opText: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  noStyle: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 12,
  },
  nameStyle: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 12,
  },
  profileView: {
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: 150,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  profileText: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#008AD0',
    marginBottom: 3,
    width: 270,
    alignSelf: 'center',
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 10,
  },
});
