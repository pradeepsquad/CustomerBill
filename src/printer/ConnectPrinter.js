import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  DeviceEventEmitter,
  NativeEventEmitter,
  Switch,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  SafeAreaView,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import {
//   BluetoothManager,
//   BluetoothEscposPrinter,
//   BluetoothTscPrinter,
// } from 'react-native-bluetooth-escpos-printer';

export default function ConnectPrinter() {
  const [devices, setDevices] = useState(null);
  const [pairedDs, setPairedDs] = useState([]);
  const [foundDs, setFoundDs] = useState([]);
  const [bleOpened, setBleOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const [boundAddress, setBoundAddress] = useState('');
  const [debugMsg, setDebugMsg] = useState('');
  const [connection, setConnection] = useState([''])
  const [newDevice, setNewDevice] = useState(false);

  const listeners = [];

  // useEffect(() => {
  //   BluetoothManager.isBluetoothEnabled().then((enabled) => {
  //     setBleOpened(enabled),
  //     setLoading(false)
  //   }, (err) => {
  //     console.log(err)
  //   })

  //   // PlateFrom
  //   // if(Platform.OS === 'android'){
  //     let bluetoothManagerEmitter = new NativeEventEmitter(BluetoothManager);
  //     listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager, EVENT_DEVICE_ALREADY_PAIRED,
  //       (rsp)=> {
  //         deviceAlreadyPaired(rsp)
  //       }));

  //       listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_DEVICE_FOUND,
  //         (rsp) => {
  //           deviceFoundEvent(rsp)
  //         }));

  //         listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_CONNECTION_LOST,
  //           () => {
  //             name: ''
  //             boundAddress: ''
  //           }))
  //   // }
  //   listeners.push(DeviceEventEmitter.addListener(BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT,() => {
  //     ToastAndroid.show("Device Not Support Bluetooth !", ToastAndroid.LONG);
  //   }))
  // },[]);

  // already Paired Device
  deviceAlreadyPaired = rsp => {
    var ds = null;
    if (typeof rsp.devices == 'object') {
      ds = rsp.devices;
    } else {
      try {
        ds = JSON.parse(rsp.devices);
      } catch (e) {
        console.log(e);
      }
    }

    if (ds && ds.length) {
      let pared = pairedDs;
      pared = pared.concat(ds || []);
      setPairedDs(pared);
    }
  };

  // Device found Event
  deviceFoundEvent = rsp => {
    var r = null;
    try {
      if (typeof rsp.device == 'object') {
        r = rsp.device;
      } else {
        r = JSON.parse(rsp.device);
      }
    } catch (e) {
      console.log(e);
    }

    //
    if (r) {
      let found = foundDs || [];
      if (found.findIndex) {
        let duplicated = found.findIndex(function (x) {
          return (x.address = r.address);
        });
        if (duplicated == -1) {
          found.push(r);
          setFoundDs(found);
        }
      }
    }
  };

  // Search Device
  const searchDevice = async () => {
    // setNewDevice(!newDevice)
    // BluetoothManager.scanDevices().then(
    //   s => {
    //     var ss = s;
    //     var found = ss.found;
    //     try {
    //       found = JSON.parse(found);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //     var fds = foundDs;
    //     if (found && found.length) {
    //       fds = found;
    //       setFoundDs(fds);
    //     }
    //   },
    //   er => {
    //     console.log('error' + JSON.stringify(er));
    //   },
    // );

    try{
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,{
        title: 'connect device bluetooth permission',
        message: 'Access your bluetooth device'+ 'connect your devices',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if(granted === PermissionsAndroid.RESULTS.GRANTED){
        console.log('You can use the Bluetooth');
      }else{
        console.log('Bluetooth permission denied');
      }
    }catch(err) {
      console.log(err)
    }
  };

  // Print Test
  const printTest = async () => {
    BluetoothEscposPrinter.selfTest(() => {});
  };

  // previously connected Devices
  const handlePreviousConnection = () => {
    setConnection(!connection);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.connectText}>Connected devices</Text>
      <Switch 
        style={{marginLeft: 80}}
      />
      </View>
        

        {/* pair new Devices */}
        <TouchableOpacity style={styles.newPair} onPress={() => searchDevice()}>
          <Text style={styles.plusText}>+</Text>
          <Text style={styles.pairText}>Pair new devices</Text>
        </TouchableOpacity>

        {/* searching Device List */}
        {/* {!newDevice ? null : <View>
          <ActivityIndicator size='large'/>
        </View>} */}

        <Text style={styles.preText}>Previously connected devices</Text>
        <View style={{marginTop: 20}}>
        <TouchableOpacity style={styles.listView} >
          <Image source={require('../assets/pack.jpeg')} style={styles.image}/>
          <Text style={styles.nameText}>Recept printer</Text>
          {!connection ? <Text style={styles.connect}>Connected</Text>:
          <Text style={styles.connect}>Not Connected</Text>}
        </TouchableOpacity>
        </View>

        {/* self Test Button */}
        <TouchableOpacity
          style={styles.touchButton}
          onPress={() => printTest()}>
          <Text style={styles.touchText}>Self Test</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 5,
    marginTop: 450,
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
    marginTop: 25,
    marginBottom: 20,
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
    marginTop: 10,
  },
  listView: {
    flexDirection: 'row',
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 10,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 45/2,
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    margin: 13,
  },
  connect: {
    color:'black',
    marginTop: 12,
    marginLeft: 90,
    fontWeight: 'bold',
  }
});

// import React, {Component} from 'react';
// import {
//   ActivityIndicator,
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   ScrollView,
//   DeviceEventEmitter,
//   NativeEventEmitter,
//   Switch,
//   TouchableOpacity,
//   Dimensions,
//   ToastAndroid,
// } from 'react-native';
// import {
//   BluetoothEscposPrinter,
//   BluetoothManager,
//   BluetoothTscPrinter,
// } from 'react-native-bluetooth-escpos-printer';

// var {height, width} = Dimensions.get('window');
// export default class ConnectPrinter extends Component {
//   _listeners = [];

//   constructor(props) {
//     super(props);
//     this.state = {
//       devices: null,
//       pairedDs: [],
//       foundDs: [],
//       bleOpend: false,
//       loading: true,
//       boundAddress: '',
//       debugMsg: '',
//     };
//   }

//   componentDidMount() {
//     //alert(BluetoothManager)
//     BluetoothManager.isBluetoothEnabled().then(
//       enabled => {
//         this.setState({
//           bleOpend: Boolean(enabled),
//           loading: false,
//         });
//       },
//       err => {
//         err;
//       },
//     );

//     if (Platform.OS === 'ios') {
//       let bluetoothManagerEmitter = new NativeEventEmitter(BluetoothManager);
//       this._listeners.push(
//         bluetoothManagerEmitter.addListener(
//           BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
//           rsp => {
//             this._deviceAlreadPaired(rsp);
//           },
//         ),
//       );
//       this._listeners.push(
//         bluetoothManagerEmitter.addListener(
//           BluetoothManager.EVENT_DEVICE_FOUND,
//           rsp => {
//             this._deviceFoundEvent(rsp);
//           },
//         ),
//       );
//       this._listeners.push(
//         bluetoothManagerEmitter.addListener(
//           BluetoothManager.EVENT_CONNECTION_LOST,
//           () => {
//             this.setState({
//               name: '',
//               boundAddress: '',
//             });
//           },
//         ),
//       );
//     } else if (Platform.OS === 'android') {
//       this._listeners.push(
//         DeviceEventEmitter.addListener(
//           BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
//           rsp => {
//             this._deviceAlreadPaired(rsp);
//           },
//         ),
//       );
//       this._listeners.push(
//         DeviceEventEmitter.addListener(
//           BluetoothManager.EVENT_DEVICE_FOUND,
//           rsp => {
//             this._deviceFoundEvent(rsp);
//           },
//         ),
//       );
//       this._listeners.push(
//         DeviceEventEmitter.addListener(
//           BluetoothManager.EVENT_CONNECTION_LOST,
//           () => {
//             this.setState({
//               name: '',
//               boundAddress: '',
//             });
//           },
//         ),
//       );
//       this._listeners.push(
//         DeviceEventEmitter.addListener(
//           BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT,
//           () => {
//             ToastAndroid.show(
//               'Device Not Support Bluetooth !',
//               ToastAndroid.LONG,
//             );
//           },
//         ),
//       );
//     }
//   }

//   componentWillUnmount() {
//     //for (let ls in this._listeners) {
//     //    this._listeners[ls].remove();
//     //}
//   }

//   _deviceAlreadPaired(rsp) {
//     var ds = null;
//     if (typeof rsp.devices == 'object') {
//       ds = rsp.devices;
//     } else {
//       try {
//         ds = JSON.parse(rsp.devices);
//       } catch (e) {}
//     }
//     if (ds && ds.length) {
//       let pared = this.state.pairedDs;
//       pared = pared.concat(ds || []);
//       this.setState({
//         pairedDs: pared,
//       });
//     }
//   }

//   _deviceFoundEvent(rsp) {
//     //alert(JSON.stringify(rsp))
//     var r = null;
//     try {
//       if (typeof rsp.device == 'object') {
//         r = rsp.device;
//       } else {
//         r = JSON.parse(rsp.device);
//       }
//     } catch (e) {
//       //alert(e.message);
//       //ignore
//     }
//     //alert('f')
//     if (r) {
//       let found = this.state.foundDs || [];
//       if (found.findIndex) {
//         let duplicated = found.findIndex(function (x) {
//           return x.address == r.address;
//         });
//         //CHECK DEPLICATED HERE...
//         if (duplicated == -1) {
//           found.push(r);
//           this.setState({
//             foundDs: found,
//           });
//         }
//       }
//     }
//   }

//   _renderRow(rows) {
//     let items = [];
//     for (let i in rows) {
//       let row = rows[i];
//       if (row.address) {
//         items.push(
//           <TouchableOpacity
//             key={new Date().getTime() + i}
//             style={styles.wtf}
//             onPress={() => {
//               this.setState({
//                 loading: true,
//               });
//               BluetoothManager.connect(row.address).then(
//                 s => {
//                   this.setState({
//                     loading: false,
//                     boundAddress: row.address,
//                     name: row.name || 'UNKNOWN',
//                   });
//                 },
//                 e => {
//                   this.setState({
//                     loading: false,
//                   });
//                   alert(e);
//                 },
//               );
//             }}>
//             <Text style={styles.name}>{row.name || 'UNKNOWN'}</Text>
//             <Text style={styles.address}>{row.address}</Text>
//           </TouchableOpacity>,
//         );
//       }
//     }
//     return items;
//   }

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <Text>{this.state.debugMsg}</Text>
//         <Text style={styles.title}>
//           Blutooth Opended:{this.state.bleOpend ? 'true' : 'false'}{' '}
//           <Text>Open BLE Before Scanning</Text>{' '}
//         </Text>
//         <View>
//           <Switch
//             value={this.state.bleOpend}
//             onValueChange={v => {
//               this.setState({
//                 loading: true,
//               });
//               if (!v) {
//                 BluetoothManager.disableBluetooth().then(
//                   () => {
//                     this.setState({
//                       bleOpend: false,
//                       loading: false,
//                       foundDs: [],
//                       pairedDs: [],
//                     });
//                   },
//                   err => {
//                     alert(err);
//                   },
//                 );
//               } else {
//                 BluetoothManager.enableBluetooth().then(
//                   r => {
//                     var paired = [];
//                     if (r && r.length > 0) {
//                       for (var i = 0; i < r.length; i++) {
//                         try {
//                           paired.push(JSON.parse(r[i]));
//                         } catch (e) {
//                           //ignore
//                         }
//                       }
//                     }
//                     this.setState({
//                       bleOpend: true,
//                       loading: false,
//                       pairedDs: paired,
//                     });
//                   },
//                   err => {
//                     this.setState({
//                       loading: false,
//                     });
//                     alert(err);
//                   },
//                 );
//               }
//             }}
//           />
//           <Button
//             disabled={this.state.loading || !this.state.bleOpend}
//             onPress={() => {
//               this._scan();
//             }}
//             title="Scan"
//           />
//         </View>
//         <Text style={styles.title}>
//           Connected:
//           <Text style={{color: 'blue'}}>
//             {!this.state.name ? 'No Devices' : this.state.name}
//           </Text>
//         </Text>
//         <Text style={styles.title}>Found(tap to connect):</Text>
//         {this.state.loading ? <ActivityIndicator animating={true} /> : null}
//         <View style={{flex: 1, flexDirection: 'column'}}>
//           {this._renderRow(this.state.foundDs)}
//         </View>
//         <Text style={styles.title}>Paired:</Text>
//         {this.state.loading ? <ActivityIndicator animating={true} /> : null}
//         <View style={{flex: 1, flexDirection: 'column'}}>
//           {this._renderRow(this.state.pairedDs)}
//         </View>

//         {/* <View style={{flexDirection:"row",justifyContent:"space-around",paddingVertical:30}}>
//                 <Button disabled={this.state.loading || !(this.state.bleOpend && this.state.boundAddress.length > 0 )}
//                         title="ESC/POS" onPress={()=>{
//                     this.props.navigator.push({
//                         component:EscPos,
//                         passProps:{
//                             name:this.state.name,
//                             boundAddress:this.state.boundAddress
//                         }
//                     })
//                 }}/>
//                 <Button disabled={this.state.loading|| !(this.state.bleOpend && this.state.boundAddress.length > 0) }
//                         title="TSC" onPress={()=>{
//                    this.props.navigator.push({
//                        component:Tsc,
//                        passProps:{
//                            name:this.state.name,
//                            boundAddress:this.state.boundAddress
//                        }
//                    })
//                 }
//                 }/>
//                 </View> */}
//       </ScrollView>
//     );
//   }

//   // _selfTest() {
//   //     this.setState({
//   //         loading: true
//   //     }, ()=> {
//   //         BluetoothEscposPrinter.selfTest(()=> {
//   //         });

//   //         this.setState({
//   //             loading: false
//   //         })
//   //     })
//   // }

//   _scan() {
//     this.setState({
//       loading: true,
//     });
//     BluetoothManager.scanDevices().then(
//       s => {
//         var ss = s;
//         var found = ss.found;
//         try {
//           found = JSON.parse(found); //@FIX_it: the parse action too weired..
//         } catch (e) {
//           //ignore
//         }
//         var fds = this.state.foundDs;
//         if (found && found.length) {
//           fds = found;
//         }
//         this.setState({
//           foundDs: fds,
//           loading: false,
//         });
//       },
//       er => {
//         this.setState({
//           loading: false,
//         });
//         console.log('error' + JSON.stringify(er));
//         alert('error' + JSON.stringify(er));
//       },
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },

//   title: {
//     width: width,
//     backgroundColor: '#eee',
//     color: '#232323',
//     paddingLeft: 8,
//     paddingVertical: 4,
//     textAlign: 'left',
//   },
//   wtf: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   name: {
//     flex: 1,
//     textAlign: 'left',
//   },
//   address: {
//     flex: 1,
//     textAlign: 'right',
//   },
// });
