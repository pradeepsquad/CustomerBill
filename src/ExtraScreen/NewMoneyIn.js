import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { newMoney } from '../Redux/reducerSlice/NewMoneyInSlice';

export default function NewMoneyIn() {
  const [receiptNo, setReceiptNo] = useState();
  const [moneyInDate, setMoneyInDate] = useState(null);
  const [personName, setPersonName] = useState();
  const [receivedAmount, setReceivedAmount] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    let today = new Date();
    let date = today.getDate() + '/' + today.getMonth() + 1 + '/' + today.getFullYear();
    setMoneyInDate(date);
    let recId = 'REC_' + (new Date()).getTime();
    setReceiptNo(recId)
  }, []);

  // Handle Save Button
  const handleSaveButton = () => {
        // console.log(receiptNo, moneyInDate, personName,receivedAmount)
        dispatch(newMoney({receiptNo, moneyInDate, personName, receivedAmount}));
  }
  return (
    <SafeAreaView style={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 20, marginTop: 25}}>
          {/* Receipt No. */}
          <TextInput
            style={styles.textInput}
        //     placeholder="REC_001"
        //     placeholderTextColor="black"
            value={receiptNo}
            onChangeText={receiptNo => setReceiptNo(receiptNo)}
          />
          {/* Money In Date */}
          <TextInput
            style={styles.textInput}
        //     placeholder="Date"
        //     placeholderTextColor="black"
            value={moneyInDate}
            onChangeText={moneyInDate => setMoneyInDate(moneyInDate)}
          />
          {/* Customer Name/Contact Person Name */}
          <TextInput
            style={styles.textInput}
            placeholder="Customer Name/Contact Person Name"
            placeholderTextColor="black"
            value={personName}
            onChangeText={personName => setPersonName(personName)}
          />
          {/* Amount Received */}
          <TextInput
            style={styles.textInput}
            placeholder="Amount Received"
            placeholderTextColor="black"
            value={receivedAmount}
            onChangeText={receivedAmount => setReceivedAmount(receivedAmount)}
          />
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20}}>
          {/* Upi Payment */}
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textColor}>Upi/Bank/Pos</Text>
          </TouchableOpacity>
          {/* Cash Payment */}
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textColor}>Cash</Text>
          </TouchableOpacity>
          {/* Cheque Payment */}
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textColor}>Cheque</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity style={styles.newButton} onPress={() => handleSaveButton()}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 5,
  },
  buttonStyle: {
        borderWidth: 1,
        borderColor: '#008AD0',
        borderRadius: 15,
        marginLeft: 6,
  },
  textColor: {
        color: '#008AD0',
        paddingLeft: 10,
        paddingRight: 10,
  },
  newButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 120,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 450,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 8,
  },
});
