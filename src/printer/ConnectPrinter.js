import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function ConnectPrinter() {
useEffect(() => { 
        handleLocation();      
        // handleBluetooth();
            
 }, []);

 // BLUETOOTH PERMISSION
 const handleBluetooth = async () => {
        try{
                if(Platform.OS === 'android'){
                        const granted = await PermissionsAndroid.request(
                                PermissionsAndroid.PERMISSIONS.BLUETOOTH,
                                {
                                        title: 'Location Permission for bluetooth scanning',
                                        message: '',
                                        buttonNeutral: 'Ask Me Later',
                                        buttonNegative: 'Cancel',
                                        buttonPositive: 'OK'
                                },
                        );
                        if(granted === PermissionsAndroid.RESULTS.GRANTED){
                                alert('Location permission for bluetooth scanning granted');
                                return true;
                        }else{
                                console.log('Location permission for bluetooth scanning revoked');
                                return false;
                        }
                }else{
                    alert('platform error');    
                }
              
        }catch(error) {
                alert(error)
        }

 }

 // LOCATION PERMISSION
 const handleLocation = async () => {
        try{
                if(Platform.OS === 'android'){
                        const granted = await PermissionsAndroid.request(
                                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                                {
                                        title: 'Location Permission for bluetooth scanning',
                                        message: '',
                                        buttonNeutral: 'Ask Me Later',
                                        buttonNegative: 'Cancel',
                                        buttonPositive: 'OK'
                                },
                        );
                        if(granted === PermissionsAndroid.RESULTS.GRANTED){
                                alert('Location permission for bluetooth scanning granted');
                                return true;
                        }else{
                                console.log('Location permission for bluetooth scanning revoked');
                                return false;
                        }
                }else{
                    alert('platform error');    
                }
              
        }catch(error) {
                alert(error)
        }
 }
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={{marginTop: 15}}>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 22, alignSelf: 'center'}}>CONNECTED</Text>
    </View> */}

      <View style={{marginTop: 15}}>
        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: 22,
            alignSelf: 'center',
          }}>
          NOT CONNECTED
        </Text>
      </View>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
        ______________________________________________________________
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
