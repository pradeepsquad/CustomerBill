import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';

export default function DashBoardScreen({navigation}) {
  const [switchValue, setSwitchValue] = useState(false);
  const [filePath, setFilePath] = useState({});

  // Handle Upload Image
  const handleUploadImage = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        console.log('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        console.log('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        console.log(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  // switch button
  const switchButton = value => {
    setSwitchValue(value);
  };

  // Handle Show Print
  const handleShowPrint = () => {
    alert('kk');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <View style={{flexDirection: 'row'}}>
            {/* Upload Image */}
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => handleUploadImage('photo')}>
              <Text style={styles.imageText}> ADD LUCKY IMAGE </Text>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 7,
                fontWeight: '600',
                marginLeft: 100,
                color: 'black',
              }}>
              {switchValue ? 'Privacy ON' : 'Privacy OFF'}
            </Text>
            <Switch value={switchValue} onValueChange={switchButton} />
          </View>

          {/*  First List */}
          {switchValue ? null : (
            <View style={{marginTop: 10}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={styles.saleButton}
                  onPress={() => navigation.navigate('Sale List')}>
                  <Icon
                    name="bar-chart"
                    size={30}
                    color="#E8A317"
                    style={styles.imageStyle}
                  />
                  <View style={styles.textViewStyle}>
                    <Text style={styles.saleButtonText}>Sale (Today)</Text>
                    <Text style={styles.currencyColor}>₹ 0</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.saleButton}
                  onPress={() => navigation.navigate('Money In List')}>
                  <Text style={styles.currencyText}>₹</Text>
                  <View style={styles.textViewStyle}>
                    <Text style={styles.saleButtonText}>MoneyIn (Today)</Text>
                    <Text style={styles.currencyColor}>₹ 0</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.saleButton}>
                  <Text style={styles.currencyText}>₹</Text>
                  <View style={styles.textViewStyle}>
                    <Text style={styles.saleButtonText}>
                      MoneyIn | Bank (Today)
                    </Text>
                    <Text style={styles.currencyColor}>₹ 0</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.saleButton}>
                  <Text style={styles.currencyText}>₹</Text>
                  <View style={styles.textViewStyle}>
                    <Text style={styles.saleButtonText}>
                      MoneyIn | Cash (Today)
                    </Text>
                    <Text style={styles.currencyColor}>₹ 0</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.saleButton}>
                  <Text style={styles.currencyText}>₹</Text>
                  <View style={styles.textViewStyle}>
                    <Text style={styles.saleButtonText}>
                      MoneyIn | Cheque (Today)
                    </Text>
                    <Text style={styles.currencyColor}>₹ 0</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          
          {/*  Second List */}
          {switchValue ? null : (
            <View style={{marginTop: 3}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  style={styles.saleButton}
                  onPress={() => navigation.navigate('Reports')}>
                  <Icon
                    name="bar-chart"
                    size={30}
                    color="#E8A317"
                    style={styles.imageStyle}
                  />
                  <View style={styles.textViewStyle}>
                    <Text style={styles.saleButtonText}>Reports</Text>
                    <Text style={styles.reportColor}>Check Reports</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.saleButton}
                  onPress={() => navigation.navigate('Reports')}>
                  <Text style={styles.currencyText}>₹</Text>
                  <View style={styles.textViewStyle}>
                    <Text style={styles.saleButtonText}>Receivable</Text>
                    <Text style={styles.reportColor}>Check Reports</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.saleButton}
                  onPress={() => navigation.navigate('Reports')}>
                  <Text style={styles.currencyText}>₹</Text>
                  <View style={styles.textViewStyle}>
                    <Text style={styles.saleButtonText}>Payable</Text>
                    <Text style={styles.reportColor}>Check Reports</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          <Text style={styles.transaction}>RECENT TRANSACTION</Text>

          {/* Show Recent Transaction */}
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: '100%'}}>
            <TouchableOpacity style={styles.transactionView} onPress={() => handleShowPrint()}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', marginLeft: 10, marginTop: 5}}>Cash Sale</Text>
            <Text style={{color: 'black', marginLeft: 190, marginTop: 5}}>2 | 06/03/2023</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#008AD0', marginLeft: 10}}>Sale: $20.0</Text>
            <Text style={{color: 'green', marginLeft: 180}}>MoneyIn: 20.0</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 4}}>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>UPI/BANK</Text>
                </View>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>CASH</Text>
                </View>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>CHEQUE</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.transactionView} onPress={() => handleShowPrint()}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', marginLeft: 10, marginTop: 5}}>Cash Sale</Text>
            <Text style={{color: 'black', marginLeft: 190, marginTop: 5}}>2 | 06/03/2023</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#008AD0', marginLeft: 10}}>Sale: $20.0</Text>
            <Text style={{color: 'green', marginLeft: 180}}>MoneyIn: 20.0</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 4}}>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>UPI/BANK</Text>
                </View>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>CASH</Text>
                </View>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>CHEQUE</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.transactionView} onPress={() => handleShowPrint()}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', marginLeft: 10, marginTop: 5}}>Cash Sale</Text>
            <Text style={{color: 'black', marginLeft: 190, marginTop: 5}}>2 | 06/03/2023</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#008AD0', marginLeft: 10}}>Sale: $250.0</Text>
            <Text style={{color: 'green', marginLeft: 180}}>MoneyIn: 250.0</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 4}}>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>UPI/BANK</Text>
                </View>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>CASH</Text>
                </View>
                <View style={styles.paymentStyle}>
                   <Text style={styles.paymentText}>CHEQUE</Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
     
      <View style={{position: 'absolute', alignSelf: 'center', marginTop: '145%', marginBottom: 20}}>
      <TouchableOpacity
        style={styles.printerButton}
        onPress={() => navigation.navigate('Connect Printer')}>
        <Text
          style={styles.printerText}>
          {' '}
          CONNECT TO PRINTER{' '}
        </Text>
        <Text style={styles.permissionText}>
          {' '}
          PERMISSION | BLUETOOTH | LOCATION{' '}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.billButton}
        onPress={() => navigation.navigate('Select Items')}>
        <Text style={styles.billText}> + BILL/INVOICE</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    height: 35,
    borderColor: '#008AD0',
    borderRadius: 5,
    borderWidth: 1,
    width: 150,
    paddingTop: 7,
    backgroundColor: 'white',
  },
  imageText: {
    color: '#008AD0',
    fontWeight: '600',
    alignSelf: 'center',
  },
  textViewStyle: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 5,
  },
  imageStyle: {
    marginTop: 13,
  },
  saleButton: {
    backgroundColor: 'white',
    height: 60,
    width: 230,
    marginTop: 8,
    paddingLeft: 10,
    marginLeft: 10,
    flexDirection: 'row',
  },
  currencyText: {
    fontWeight: '600',
    fontSize: 45,
    color: '#E8A317',
  },
  saleButtonText: {
    color: 'black',
    marginTop: 7,
  },
  currencyColor: {
    color: '#008AD0',
  },
  reportColor: {
    color: 'red',
  },
  billButton: {
    backgroundColor: '#008AD0',
    height: 40,
    width: 200,
    paddingTop: 6,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'center',
  },
  billText: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    fontSize: 20,
  },
  transaction: {
    color: 'brown',
    fontWeight: 'bold',
    marginTop: 10,
  },
  transactionView: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 75,
    marginTop: 7,
  },
  paymentStyle: {
    borderColor: 'silver',
     borderWidth: 1, 
     borderRadius: 5,
     width: 110,
     marginLeft: 3,
     marginRight: 3,
  },
  paymentText: {
    color: 'silver',
    alignSelf: 'center',
  },
  printerButton: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 10,
    padding: 6,
    borderColor: 'green',
    borderRadius: 5,
    borderWidth: 1,
  },
  printerText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  permissionText: {
    color: 'green', 
    fontWeight: '600', 
    alignSelf: 'center',
  },
});
