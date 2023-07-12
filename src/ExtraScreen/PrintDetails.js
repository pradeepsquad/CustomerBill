import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Checkbox} from 'react-native-paper';

export default function PrintDetails({navigation}) {
  const [invoice, setInvoice] = useState('INV_001');
  const [billDate, setBillDate] = useState('');
  const [billingTerm, setBillingTerm] = useState('');
  const [partyName, setPartyName] = useState('');
  const [discountP, setDiscountP] = useState('');
  const [discountRs, setDiscountRs] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [amountReceived, setAmountReceived] = useState('');
  const [transactionNo, setTransactionNo] = useState();
  const [chequeNo, setChequeNo] = useState();
  const [checked, setChecked] = useState(false);
  const [transactionShow, setTransactionShow] = useState(false);
  const [chequeShow, setChequeShow] = useState(false);
  const [defaultUpi, setDefaultUpi] = useState(false);
  const [defaultCash, setDefaultCash] = useState(true);
  const [defaultCheque, setDefaultCheque] = useState(false);

  // handle Cash Button
  const handleSelectCash = () => {
    setDefaultCash(true);
    setDefaultCheque(false);
    setDefaultUpi(false);
    setChequeShow(false);
    setTransactionShow(false);
  };

  // handle Cheque Button
  const handleSelectCheque = () => {
    setDefaultCheque(true);
    setDefaultCash(false);
    setDefaultUpi(false);
    setTransactionShow(false);
  };

  // handle Upi Button
  const handleSelectUpi = () => {
    setDefaultUpi(true);
    setDefaultCash(false);
    setDefaultCheque(false);
    setChequeShow(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 50, marginHorizontal: 20}}>
          <TextInput
            style={styles.textInputF}
            placeholder="INV_001"
            placeholderTextColor="silver"
            value={invoice}
            onChangeText={invoice => setInvoice(invoice)}
          />

          <TextInput
            style={styles.textInputF}
            placeholder="Bill Date"
            placeholderTextColor="silver"
            value={billDate}
            onChangeText={billDate => setBillDate(billDate)}
          />
          <TextInput
            style={styles.textInputF}
            placeholder="Billing Term"
            placeholderTextColor="silver"
            value={billingTerm}
            onChangeText={billingTerm => setBillingTerm(billingTerm)}
          />
          <TextInput
            style={styles.textInputF}
            placeholder="Party Name"
            placeholderTextColor="silver"
            value={partyName}
            onChangeText={partyName => setPartyName(partyName)}
          />

          {/* SELECT DELIVERY STATE BUTTON */}
          <TouchableOpacity style={styles.buttonCenter}>
            <Text style={styles.buttonCenterText}>SELECT DELIVERY STATE</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 15}}>Bill Items</Text>
            <TouchableOpacity onPress={() => alert('clear item')}>
            <Text style={{color: 'red', fontWeight: 'bold', marginRight: 15}}>Clear Items</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 120, width: 'auto', backgroundColor: 'white', borderRadius: 5, marginTop: 5}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>item name</Text>
            <Text style={{color: 'red', fontWeight: 'bold', fontSize: 12}}>Stock: </Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>Sell Price:</Text>
          </View>

          {/* ITEM LIST */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.push('Select Items')}style={{borderWidth: 1, borderColor: '#008AD0', height: 40, width: 110, borderRadius: 5, marginTop: 20}}>
            <Text style={{color: '#008AD0', alignSelf: 'center', marginTop: 10, fontWeight: 'bold'}}>ITEM LIST</Text>
          </TouchableOpacity>
          <Text style={{color: 'black', marginTop: 30, marginRight: 20}}>20.0</Text>
          </View>
          {/* TRANSPORT DETAILS BUTTON */}
          <TouchableOpacity style={styles.buttonCenter}>
            <Text style={styles.buttonCenterText}>TRANSPORT DETAILS</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInputF}
            placeholder="Cash Discount (%)"
            placeholderTextColor="silver"
            value={discountP}
            onChangeText={discountP => setDiscountP(discountP)}
          />

          <TextInput
            style={styles.textInputF}
            placeholder="Cash Discount (Rs)"
            placeholderTextColor="silver"
            value={discountRs}
            onChangeText={discountRs => setDiscountRs(discountRs)}
          />
          <TextInput
            style={styles.textInputF}
            placeholder="Total Amount"
            placeholderTextColor="silver"
            value={totalAmount}
            onChangeText={totalAmount => setTotalAmount(totalAmount)}
          />
          <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.textInputF, {width: '90%'}]}
            placeholder="Amount Received"
            placeholderTextColor="silver"
            value={amountReceived}
            onChangeText={amountReceived => setAmountReceived(amountReceived)}
          />
          <View style={{marginTop: 10, }}> 
           <Checkbox
            color="#008Ad0"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          </View>
          </View>

       {!checked ? null :( <View style={{flexDirection: 'row', marginTop: 10}}>
         {/* Upi/Bank/POS */}
         <TouchableOpacity
            style={defaultUpi ? styles.buttonSelect : styles.buttonStyleCash}
            onPress={() => [
              handleSelectUpi(),
              setTransactionShow(!transactionShow),
            ]}>
            <Text style={defaultUpi ? styles.textSelect : styles.textColor}>
              Upi/Bank/POS
            </Text>
          </TouchableOpacity>  

            {/* Cash */}
          <TouchableOpacity
            style={defaultCash ? styles.buttonSelect : styles.buttonStyleCash}
            onPress={() => handleSelectCash()}>
            <Text style={defaultCash ? styles.textSelect : styles.textColor}>
              Cash
            </Text>
          </TouchableOpacity>
          
          {/* Cheque */}
          <TouchableOpacity
            style={defaultCheque ? styles.buttonSelect : styles.buttonStyleCash}
            onPress={() => [handleSelectCheque(), setChequeShow(!chequeShow)]}>
            <Text style={defaultCheque ? styles.textSelect : styles.textColor}>
              Cheque
            </Text>
          </TouchableOpacity>

        </View>)}
        
        {/* Transaction Number */}
       {!transactionShow ? null :( <View>
          <TextInput
            style={styles.textInputF}
            placeholder="Transaction Number"
            placeholderTextColor="silver"
            value={transactionNo}
            onChangeText={transactionNo => setTransactionNo(transactionNo)}
          />
        </View>)}
  

      {/* Cheque Number */}
        {!chequeShow ? null:(<View>
          <TextInput
            style={styles.textInputF}
            placeholder="Cheque Number"
            placeholderTextColor="silver"
            value={chequeNo}
            onChangeText={chequeNo => setChequeNo(chequeNo)}
          />
        </View>)}
      
          {/* NOTE BUTTON */}
          <TouchableOpacity style={[styles.buttonCenter, {marginBottom: 150}]}>
            <Text style={styles.buttonCenterText}>NOTE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Top View and Button ============================================*/}
      <View style={styles.topView}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>+ Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Hold</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Parcel</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom View ================================================*/}
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', marginTop: 7}}>Total: 0</Text>
        <View style={{flexDirection: 'row'}}>
          <Checkbox
            color="#008Ad0"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <Text style={{color: 'black', marginTop: 7}}>Amt. Received: 0</Text>
          <TouchableOpacity
            style={styles.printerView}
            onPress={() => navigation.navigate('Connect Printer')}>
            <Text style={styles.redText}>CONNECT TO PRINTER</Text>
            <Text style={styles.greenText}>PERMISSION | BT | LOC</Text>
          </TouchableOpacity>
        </View>
      </View>

      {!checked ? null : (
        <View style={{flexDirection: 'row'}}>
          {/* Upi/Bank/POS */}
          <TouchableOpacity
            style={defaultUpi ? styles.buttonSelect : styles.buttonStyleCash}
            onPress={() => [
              handleSelectUpi(),
              setTransactionShow(!transactionShow),
            ]}>
            <Text style={defaultUpi ? styles.textSelect : styles.textColor}>
              Upi/Bank/POS
            </Text>
          </TouchableOpacity>

          {/* Cash */}
          <TouchableOpacity
            style={defaultCash ? styles.buttonSelect : styles.buttonStyleCash}
            onPress={() => handleSelectCash()}>
            <Text style={defaultCash ? styles.textSelect : styles.textColor}>
              Cash
            </Text>
          </TouchableOpacity>

          {/* Cheque */}
          <TouchableOpacity
            style={defaultCheque ? styles.buttonSelect : styles.buttonStyleCash}
            onPress={() => [handleSelectCheque(), setChequeShow(!chequeShow)]}>
            <Text style={defaultCheque ? styles.textSelect : styles.textColor}>
              Cheque
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Transaction Number */}
      {!transactionShow ? null : (
        <View style={{marginHorizontal: 20}}>
          <TextInput
            style={styles.textInput}
            placeholder="Transaction Number"
            placeholderTextColor='silver'
            value={transactionNo}
            onChangeText={transactionNo => setTransactionNo(transactionNo)}
          />
        </View>
      )}

      {/* Cheque Number */}
      {!chequeShow ? null : (
        <View style={{marginHorizontal: 20}}>
          <TextInput
            style={styles.textInput}
            placeholder="Cheque Number"
            placeholderTextColor='silver'
            value={chequeNo}
            onChangeText={chequeNo => setChequeNo(chequeNo)}
          />
        </View>
      )}

      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TouchableOpacity
          style={styles.cashStyle}
          onPress={() => navigation.push('New Sale')}>
          <Text style={styles.cashText}>DETAILS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cashStyle}
          onPress={() => alert('OK KOT')}>
          <Text style={styles.cashText}>KOT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cashSave}
          onPress={() => handleSaveItem()}>
          <Text style={styles.cashSaveText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    margin: 10,
    position: 'absolute',
    right: 0,
    backgroundColor: 'auto'
  },
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
    marginTop: 6.5,
  },
  buttonCenter: {
    height: 35,
    borderWidth: 1,
    borderColor: '#008AD0',
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  buttonCenterText: {
    color: '#008AD0',
    fontWeight: 'bold',
    marginTop: 7,
    textAlign: 'center',
  },
  textInputF: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 15,
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  printerView: {
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    position: 'absolute',
    marginLeft: 220,
  },
  greenText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 8,
    alignSelf: 'center',
  },
  redText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 10,
  },
  buttonSelect: {
    borderWidth: 1,
    borderColor: '#008AD0',
    backgroundColor: '#008AD0',
    borderRadius: 15,
    marginLeft: 6,
  },
  buttonStyleCash: {
    borderWidth: 1,
    borderColor: '#008AD0',
    borderRadius: 15,
    marginLeft: 6,
  },
  textSelect: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textColor: {
    color: '#008AD0',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,                    
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'silver',
    paddingLeft: 15,
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
});
