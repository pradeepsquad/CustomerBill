import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

export default function SelectPartyScreen({navigation}) {
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
          <TouchableOpacity style={styles.listView}>
            <Text style={styles.textOne}>Cash Sale</Text>
            <Text style={styles.textTwo}>Phone Number</Text>
            <Text style={styles.textThree}>Billing Type: REGULAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listView}>
            <Text style={styles.textOne}>Demo Customer 1</Text>
            <Text style={styles.textTwo}>2123123113</Text>
            <Text style={styles.textThree}>Billing Type: REGULAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listView}>
            <Text style={styles.textOne}>Demo Customer 2</Text>
            <Text style={styles.textTwo}>1234567890</Text>
            <Text style={styles.textThree}>Billing Type: REGULAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listView}>
            <Text style={styles.textOne}>Demo Customer 3</Text>
            <Text style={styles.textTwo}>1213213123</Text>
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
    // color: 'silver',
    fontSize: 11,
    fontWeight: '600',
  },
  textThree: {
    // color: 'silver',
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
