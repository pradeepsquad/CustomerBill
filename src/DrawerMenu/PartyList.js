import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import call from 'react-native-phone-call';
import { useSelector } from 'react-redux';
import { newCustomer } from '../Redux/reducerSlice/NewCustomerSlice';
import { newSupplier } from '../Redux/reducerSlice/NewSupplierSlice';

export default function PartyList({navigation}) {
  const [showIcon, setShowIcon] = useState(false);

  // HANDLE USE_SELECTOR
  const showCustomer = useSelector(newCustomer);
  const customerData = showCustomer.payload.newCustomerSlice;
  const showSupplier = useSelector(newSupplier);
  const supplierData = showSupplier.payload.newSupplierSlice;
  console.log(customerData)
  console.log(supplierData)

  // HANDLE LIST CALL
  const handleCall = () => {
    const args = {
      number: '9093900003',
      prompt: true,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };

  // RENDER CUSTOMER LIST
  const renderCustomer = ({item}) => {
    return (
      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity style={styles.listView}>
          <View>
            <Text style={styles.textOne}>{item.name}</Text>
            <Text style={styles.textTwo}>{item.phone}</Text>
            <Text style={styles.textThree}>Billing Type: {item.type}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => handleCall()}>
              {/* CALL */}
              <Icon
                name="call"
                size={25}
                color="#E8A317"
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            {/* WHATSAPP */}
            <TouchableOpacity onPress={() => alert('whatsapp')}>
              <Icon
                name="logo-whatsapp"
                size={25}
                color="green"
                style={styles.whatsappIcon}
              />
            </TouchableOpacity>
            {/* FAVORITE */}
            <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
              <Icon
                name={showIcon ? 'star' : 'star-outline'}
                size={25}
                color="#E8A317"
                style={styles.whatsappIcon}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList data={customerList} renderItem={renderCustomer} keyExtractor={item => item.id}/>
      <View style={{marginHorizontal: 20}}>
      <TouchableOpacity style={styles.listView}>
          <View>
            <Text style={styles.textOne}>{supplierData.supplierName}</Text>
            <Text style={styles.textTwo}>{customerData.phoneNumber}</Text>
            <Text style={styles.textThree}>Billing Type: REGULAR</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => handleCall()}>
              {/* CALL */}
              <Icon
                name="call"
                size={25}
                color="#E8A317"
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            {/* WHATSAPP */}
            <TouchableOpacity onPress={() => alert('whatsapp')}>
              <Icon
                name="logo-whatsapp"
                size={25}
                color="green"
                style={styles.whatsappIcon}
              />
            </TouchableOpacity>
            {/* FAVORITE */}
            <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
              <Icon
                name={showIcon ? 'star' : 'star-outline'}
                size={25}
                color="#E8A317"
                style={styles.whatsappIcon}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listView}>
          <View>
            <Text style={styles.textOne}>{customerData.customerName}</Text>
            <Text style={styles.textTwo}>{customerData.phoneNumber}</Text>
            <Text style={styles.textThree}>Billing Type: REGULAR</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => handleCall()}>
              {/* CALL */}
              <Icon
                name="call"
                size={25}
                color="#E8A317"
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            {/* WHATSAPP */}
            <TouchableOpacity onPress={() => alert('whatsapp')}>
              <Icon
                name="logo-whatsapp"
                size={25}
                color="green"
                style={styles.whatsappIcon}
              />
            </TouchableOpacity>
            {/* FAVORITE */}
            <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
              <Icon
                name={showIcon ? 'star' : 'star-outline'}
                size={25}
                color="#E8A317"
                style={styles.whatsappIcon}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('New Party')}>
        <Text style={styles.addButtonText}> ADD CUSTOMER/PARTY </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 7,
    marginTop: 8,
    flexDirection: 'row',
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
  iconStyle: {
    marginLeft: 120,
    marginTop: 10,
  },
  whatsappIcon: {
    marginTop: 10,
    marginLeft: 15,
  },
});

const customerList = [
  {
    name: 'Cash Sale',
    phone: 'Phone Number',
    type: 'REGULAR',
  },
  {
    name: 'Demo customer 1',
    phone: '1234567890',
    type: 'REGULAR',
  },
  {
    name: 'Demo customer 2',
    phone: '5646566232',
    type: 'REGULAR',
  },
  {
    name: 'Demo customer 3',
    phone: '4545656521',
    type: 'REGULAR',
  },
];
