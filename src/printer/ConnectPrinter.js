import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  PermissionsAndroid,
  FlatList,
  LogBox,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  BluetoothManager,
  BluetoothEscposPrinter,
} from 'react-native-bluetooth-escpos-printer';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

export default function ConnectPrinter() {
  const [oldDevice, setOldDevice] = useState([]);
  const [connectDs, setConnectDs] = useState();
  const [newDevice, setNewDevice] = useState([]);
  const [saveData, setSavedData] = useState();
  const [loading, setLoading] = useState(true);
  const paired = [];

  useEffect(() => {
    // Android Platform Permission
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]).then(result => {
        if (result) {
          console.log('User accept');
        } else {
          console.log('User refuse');
        }
      });
    }

    // Enable Bluetooth and turn ON Bluetooth if OFF
    BluetoothManager.enableBluetooth().then(
      r => {
        if (r && r.length > 0) {
          for (var i = 0; i < r.length; i++) {
            try {
              paired.push(JSON.parse(r[i]));
              setOldDevice(paired);
            } catch (e) {
              // console.log('error=========>', e);
              ToastAndroid.showWithGravityAndOffset(
                e,
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                100,
                100,
              );
            }
          }
        }
        // console.log('this is the device======>', JSON.stringify(oldDevice));
      },
      err => {
        // alert('external error========>', err);
        ToastAndroid.showWithGravityAndOffset(
          err,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          100,
          100,
        );
      },
    );
  }, []);

  // CONNECT PRINTER AND PRINT TEST
  const printTest = async () => {
    if (!connectDs == []) {
      await BluetoothManager.connect(connectDs)
        .then(s => {
          ToastAndroid.showWithGravityAndOffset(
            s,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            100,
            100,
          );
        })
        .catch(err => {
          console.log('connect Error', err);
          ToastAndroid.showWithGravityAndOffset(
            err,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            100,
            100,
          );
        });
      await BluetoothEscposPrinter.printerInit();
      await BluetoothEscposPrinter.printerAlign(
        BluetoothEscposPrinter.ALIGN.CENTER,
      );
      await BluetoothEscposPrinter.printQRCode(
        'Test Printer',
        280,
        BluetoothEscposPrinter.ERROR_CORRECTION.L,
      );
      await BluetoothEscposPrinter.printText('Test Printer', {});
      await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Device is not connected please select Device first',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        100,
        100,
      );
    }
  };

  useEffect(async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(connectDs));
      console.log('setData', JSON.stringify(connectDs));
    } catch (error) {
      console.log(error);
    }

    try {
      const savedUser = await AsyncStorage.getItem('user');
      const currentUser = JSON.parse(savedUser);
      setSavedData(currentUser);
    } catch (error) {
      console.log(error);
    }
  }, []);


  // START SCAN BLUETOOTH DEVICE
  const startScan = async () => {
    await BluetoothManager.scanDevices().then(s => {
      var ss = JSON.parse(s);
      console.log('====================>', ss);
      setNewDevice(ss);
    }),
      er => {
        // console.log('<====================>', er);
        ToastAndroid.showWithGravityAndOffset(
          er,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          100,
          100,
        );
      };
  };

  // RENDER PRINTER LIST
  const renderDeviceList = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setConnectDs(item.address)}
        style={{backgroundColor: 'silver', marginTop: 5, borderRadius: 5}}>
        <View style={styles.listView}>
          <Image
            source={require('../assets/bluetooth.png')}
            style={styles.image}
          />
          <Text style={styles.listItem}>{item.name || 'UNKNOWN'}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // REMOVE DEVICE FROM SAVE LIST
  const handleRemoveItem = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.connectText}>Connected devices</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{color: 'black', fontSize: 17}}>
              connected Device: {connectDs}
            </Text>
            <Text style={{color: 'black', fontSize: 17}}>
              Saved Device: {saveData}
            </Text>
          </View>

          {/* REMOVE SAVED DEVICE BUTTON */}
          <TouchableOpacity
            onPress={() => handleRemoveItem()}
            style={styles.removeButton}>
            <Text style={styles.removeText}>CLEAN</Text>
          </TouchableOpacity>
        </View>

        {/* Show perviously connected Device which is already paired in mobile bluetooth List */}
        <Text style={styles.preText}>
          Previously connected and Paired devices
        </Text>
        <View style={{height: 160, backgroundColor: 'silver', marginTop: 10}}>
          {oldDevice.length === 0 ? (
            <ActivityIndicator
              size="large"
              color="#008AD0"
              style={{marginTop: 60}}
            />
          ) : (
            <FlatList
              data={oldDevice}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={renderDeviceList}
              keyExtractor={item => item.id}
            />
          )}
        </View>

        {/* SEARCH NEW DEVICES */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.newPair}
            onPress={() => [startScan(), setLoading(!loading)]}>
            <Text style={styles.plusText}>+</Text>
            <Text style={styles.pairText}>Pair new devices</Text>
          </TouchableOpacity>
          {loading ? null : (
            <ActivityIndicator
              size="small"
              color="#008AD0"
              style={{marginLeft: 20, marginTop: 5}}
            />
          )}
        </View>
        <View style={{height: 400, backgroundColor: 'silver'}}>
          {newDevice.length === 0 ? (
            <Text
              style={{
                color: 'black',
                marginTop: 200,
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              No Device available
            </Text>
          ) : (
            <FlatList
              data={newDevice.found}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={renderDeviceList}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </View>
      {/* PRINTER TEST PRINT */}
      <TouchableOpacity style={styles.touchButton} onPress={() => printTest()}>
        <Text style={styles.touchText}>TEST PRINTER</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  connectText: {
    fontSize: 28,
    color: 'gray',
    fontWeight: 'bold',
  },
  touchButton: {
    backgroundColor: 'green',
    height: 45,
    width: '90%',
    borderRadius: 5,
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  touchText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 10,
  },
  newPair: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  plusText: {
    fontSize: 30,
    color: 'black',
  },
  pairText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 8,
  },
  preText: {
    color: '#008AD0',
    fontWeight: 'bold',
    marginTop: 15,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 45 / 2,
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: 20,
  },
  listItem: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 20,
  },
  removeButton: {
    backgroundColor: 'green',
    height: 40,
    width: 80,
    borderRadius: 5,
    position: 'absolute',
    right: 20,
  },
  removeText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
