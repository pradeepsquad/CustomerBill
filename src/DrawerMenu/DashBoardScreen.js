import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Switch } from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

export default function DashBoardScreen({navigation}) {
  const [switchValue, setSwitchValue] = useState(false);

  // switch button
  const switchButton = (value) => {
    setSwitchValue(value)
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View style={{marginHorizontal: 20, marginTop: 15}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.imageButton}>
            <Text style={styles.imageText}> ADD LUCKY IMAGE </Text>
          </TouchableOpacity>
          <Text style={{marginTop: 7, fontWeight: '600', marginLeft: 100}}>{switchValue ? "Privacy ON" : "Privacy OFF"}</Text>
          <Switch 
            value={switchValue}
            onValueChange={switchButton}
          />
        </View>


        {/*  First List */}
       { switchValue ? null : <View style={{marginTop: 10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.saleButton} onPress={() => navigation.navigate('Sale List')}>
            <Icon name='bar-chart' size={30} color= '#E8A317' style={styles.imageStyle}/>
            <View style={styles.textViewStyle}>
            <Text style={styles.saleButtonText}>Sale (Today)</Text>
            <Text style={styles.currencyColor}>₹ 0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saleButton} onPress={() => navigation.navigate('MoneyIn List')}>
            <Text style={styles.currencyText}>₹</Text>
            <View style={styles.textViewStyle}>
            <Text style={styles.saleButtonText}>MoneyIn (Today)</Text>
            <Text style={styles.currencyColor}>₹ 0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saleButton} >
            <Text style={styles.currencyText}>₹</Text>
            <View style={styles.textViewStyle}>
            <Text style={styles.saleButtonText}>MoneyIn | Bank (Today)</Text>
            <Text style={styles.currencyColor}>₹ 0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saleButton}>
            <Text style={styles.currencyText}>₹</Text>
            <View style={styles.textViewStyle}>
            <Text style={styles.saleButtonText}>MoneyIn | Cash (Today)</Text>
            <Text style={styles.currencyColor}>₹ 0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saleButton}>
          <Text style={styles.currencyText}>₹</Text>
            <View style={styles.textViewStyle}>
            <Text style={styles.saleButtonText}>MoneyIn | Cheque (Today)</Text>
            <Text style={styles.currencyColor}>₹ 0</Text>
            </View>
          </TouchableOpacity> 
          </ScrollView>
          </View>
       }
        {/*  Second List */}
      {switchValue ? null :  <View style={{marginTop: 3}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.saleButton} onPress={() => navigation.navigate('Reports')}>
          <Icon name='bar-chart' size={30} color= '#E8A317' style={styles.imageStyle}/>
            <View style={styles.textViewStyle}>
            <Text style={styles.saleButtonText}>Reports</Text>
            <Text style={styles.reportColor}>Check Reports</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saleButton} onPress={() => navigation.navigate('Reports')}>
          <Text style={styles.currencyText}>₹</Text>
            <View style={styles.textViewStyle}>
            <Text style={styles.saleButtonText}>Receivable</Text>
            <Text style={styles.reportColor}>Check Reports</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saleButton} onPress={() => navigation.navigate('Reports')}>
          <Text style={styles.currencyText}>₹</Text>
            <View style={styles.textViewStyle}>
            <Text style={styles.saleButtonText}>Payable</Text>
            <Text style={styles.reportColor}>Check Reports</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        </View>}

      </View>
      </ScrollView>
      

      <TouchableOpacity style={{backgroundColor: 'white', alignSelf: 'center', marginBottom: 10,
                       padding: 6, borderColor: 'green', borderRadius: 5, borderWidth: 1}}
                       onPress={() => navigation.navigate('Connect Printer')}>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}> CONNECT TO PRINTER </Text>
        <Text style={{color: 'green', fontWeight: '600', alignSelf: 'center'}}> PERMISSION | BLUETOOTH | LOCATION </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.billButton} onPress={() => navigation.navigate('Select Items')}>
        <Text style={styles.billText}> + BILL/INVOICE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
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
})