import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

export default function CustomerParcel({navigation}) {
  const [searchPhone, setSearchPhone] = useState();
  const [customerName, setCustomerName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const dispatch = useDispatch();

//   Handle Save Button 
  const handleSaveButton = () => {
        dispatch()
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'flex-end',
        }}>
        {/* Item */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('New Item')}>
          <Text style={styles.buttonText}>Item +</Text>
        </TouchableOpacity>
        {/* Hold */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Select Items')}>
          <Text style={styles.buttonText}>Hold</Text>
        </TouchableOpacity>
        {/* Customer/Parcel */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Search Customer')}>
          <Text style={styles.buttonText}>Customer/Parcel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <TextInput
            style={styles.textInput}
            placeholder="Search Party by Phone"
            keyboardType='decimal-pad'
            value={searchPhone}
            onChangeText={searchPhone => setSearchPhone(searchPhone)}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchText}>SEARCH</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Customer Name / Contact Person Name"
            keyboardType='default'
            value={customerName}
            onChangeText={customerName => setCustomerName(customerName)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Billing Address"
            keyboardType='default'
            value={billingAddress}
            onChangeText={billingAddress => setBillingAddress(billingAddress)}
          />
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TouchableOpacity style={styles.cashStyle}>
          <Text style={styles.cashText}>DETAILS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cashStyle}>
          <Text style={styles.cashText}>KOT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cashSave} onPress={() => handleSaveButton()}>
          <Text style={styles.cashSaveText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: '#008AD0',
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    marginRight: 6,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#008AD0',
    fontWeight: '500',
    marginTop: 6,
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    marginTop: 8,
    paddingLeft: 20,
    borderRadius: 5,
  },
  cashStyle: {
    borderColor: '#008AD0',
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    width: 100,
    marginRight: 6,
    marginLeft: 4,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  cashText: {
    color: '#008AD0',
    fontWeight: '500',
    marginTop: 6,
    alignSelf: 'center',
  },
  cashSave: {
    height: 35,
    width: 188,
    backgroundColor: '#008AD0',
    marginBottom: 5,
    borderRadius: 5,
  },
  cashSaveText: {
    color: 'white',
    fontWeight: '500',
    marginTop: 9,
    alignSelf: 'center',
  },
  searchButton: {
    backgroundColor: '#008AD0',
    height: 40,
    width: 180,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  searchText: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
});
