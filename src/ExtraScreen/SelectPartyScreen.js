import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {newSupplier} from '../Redux/reducerSlice/NewSupplierSlice';
import {newCustomer} from '../Redux/reducerSlice/NewCustomerSlice';

export default function SelectPartyScreen({navigation}) {
  const showCustomer = useSelector(newCustomer);
  const customerData = showCustomer.payload.newCustomerSlice;
  const showSupplier = useSelector(newSupplier);
  const supplierData = showSupplier.payload.newSupplierSlice;
  console.log(customerData)
  console.log(supplierData)

  // RENDER LIST
  const renderList = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.listView}
        onPress={() => navigation.navigate('Select Items')}>
        <Text style={styles.textOne}>{item.name}</Text>
        <Text style={styles.textTwo}>{item.phone}</Text>
        <Text style={styles.textThree}>Billing Type: {item.type}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          {/* add New Party Button */}
          <TouchableOpacity
            style={styles.addPartyButton}
            onPress={() => navigation.navigate('New Party')}>
            <Text style={styles.addPartyText}>NEW PARTY +</Text>
          </TouchableOpacity>
          {/* Search Bar */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search Party by phone"
            keyboardType="numeric"
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <FlatList
            data={listData}
            renderItem={renderList}
            scrollEnabled={true}
            keyExtractor={item => item.id}
          />
          <TouchableOpacity
            style={styles.listView}
            onPress={() => navigation.navigate('Select Items')}>
            <Text style={styles.textOne}>{supplierData.supplierName}</Text>
            <Text style={styles.textTwo}>{customerData.phoneNumber}</Text>
            <Text style={styles.textThree}>Billing Type: REGULAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 7,
    marginTop: 8,
  },
  textOne: {
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
  },
  textTwo: {
    color: 'gray',
    fontSize: 11,
    fontWeight: '600',
  },
  textThree: {
    color: 'gray',
    fontSize: 11,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 190,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  addButtonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 7,
  },
  addPartyButton: {
    borderColor: '#008AD0',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 10,
  },
  addPartyText: {
    color: '#008Ad0',
    marginTop: 10,
    fontWeight: '500',
  },
  searchInput: {
    borderColor: '#008AD0',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    marginLeft: 8,
    width: '65%',
    paddingLeft: 15,
  },
});

const listData = [
  {
    name: 'Cash Sale',
    phone: 'Phone Number',
    type: 'REGULAR',
  },
  {
    name: 'Demo Customer 1',
    phone: '1234567890',
    type: 'REGULAR',
  },
  {
    name: 'Demo Customer 2',
    phone: 'Phone Number',
    type: 'REGULAR',
  },
  {
    name: 'Demo Customer 3',
    phone: 'Phone Number',
    type: 'REGULAR',
  },
  {
    name: 'Demo Customer 4',
    phone: 'Phone Number',
    type: 'REGULAR',
  },
];
