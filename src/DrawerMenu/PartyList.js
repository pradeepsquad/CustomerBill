import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

export default function PartyList({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
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
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('New Party')}>
        <Text style={styles.addButtonText}> ADD CUSTOMER/PARTY </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
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
})