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
import {Checkbox} from 'react-native-paper';

export default function SelectItemsScreen({navigation}) {
  const [transactionNo, setTransactionNo] = useState();
  const [chequeNo, setChequeNo] = useState();
  const [transactionShow, setTransactionShow] = useState(false);
  const [chequeShow, setChequeShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [defaultCash, setDefaultCash] = useState(true);
  const [defaultUpi, setDefaultUpi] = useState(false);
  const [defaultCheque, setDefaultCheque] = useState(false);
  const [showCategories, setShowCategories] = useState(true)
  const [showCategoriesTwo, setShowCategoriesTwo] = useState(false)
  const [showCategoriesThree, setShowCategoriesThree] = useState(false)

      // handle Cash Button
 const handleSelectCash = () => {
  setDefaultCash(true)
   setDefaultCheque(false)
   setDefaultUpi(false)  
   setChequeShow(false)
   setTransactionShow(false)  
 }
// handle Cheque Button
 const handleSelectCheque = () => {
  setDefaultCheque(true)
  setDefaultCash(false)
  setDefaultUpi(false)
  setTransactionShow(false)
 }
// handle Upi Button
 const handleSelectUpi = () => {
  setDefaultUpi(true)
  setDefaultCash(false)
  setDefaultCheque(false)
  setChequeShow(false)
 }

//  Handle Categories One
const handleCategories = () => {
  setShowCategories(true)
  setShowCategoriesTwo(false)
  setShowCategoriesThree(false)
}
//  Handle Categories Two
const handleCategoriesTwo = () => {
  setShowCategories(false)
  setShowCategoriesTwo(true)
  setShowCategoriesThree(false)

}
//  Handle Categories Three
const handleCategoriesThree = () => {
  setShowCategories(false)
  setShowCategoriesTwo(false)
  setShowCategoriesThree(true)
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
      <Text style={{color: '#008AD0', fontWeight: 'bold', alignSelf: 'center'}}>
        ______________________________________________________________
      </Text>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'green',
              width: 80,
              marginLeft: 3,
              height: 610,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'yellow',
                height: 40,
                paddingTop: 10,
                marginTop: 5,
              }}
              onPress={() => handleCategories()}>
              <Text style={{alignSelf: 'center'}}>Category 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'yellow',
                height: 40,
                paddingTop: 10,
                marginTop: 5,
              }}
              onPress={() => handleCategoriesTwo()}>
              <Text style={{alignSelf: 'center'}}>Category 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'yellow',
                height: 40,
                paddingTop: 10,
                marginTop: 5,
              }}
              onPress={() => handleCategoriesThree()}>
              <Text style={{alignSelf: 'center'}}>Category 3</Text>
            </TouchableOpacity>
          </View>

          { !showCategories ? null :<View
            style={{
              // backgroundColor: 'red',
              marginLeft: 3,
              width: 315,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
          </View>}

          { !showCategoriesTwo ? null :<View
            style={{
              // backgroundColor: 'yellow',
              marginLeft: 3,
              width: 315,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
          </View>}

          { !showCategoriesThree? null :<View
            style={{
              // backgroundColor: 'red',
              marginLeft: 3,
              width: 315,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 120,
                width: 95,
                backgroundColor: 'white',
                margin: 5,
              }}>
              <Text style={{color: 'green'}}>No Image</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </ScrollView>

      
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
            onPress={() => [handleSelectUpi(), setTransactionShow(!transactionShow)]}>
            <Text style={defaultUpi ? styles.textSelect : styles.textColor}>Upi/Bank/POS</Text>
          </TouchableOpacity>
          {/* Cash */}
          <TouchableOpacity style={defaultCash ? styles.buttonSelect : styles.buttonStyleCash} 
            onPress={() => handleSelectCash()}>
            <Text style={defaultCash ? styles.textSelect : styles.textColor}>Cash</Text>
          </TouchableOpacity>
          {/* Cheque */}
          <TouchableOpacity
            style={defaultCheque ? styles.buttonSelect : styles.buttonStyleCash}
            onPress={() => [handleSelectCheque(), setChequeShow(!chequeShow)]}>
            <Text style={defaultCheque ? styles.textSelect : styles.textColor}>Cheque</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Transaction Number */}
      {!transactionShow ? null : (
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Transaction Number"
            value={transactionNo}
            onChangeText={transactionNo => setTransactionNo(transactionNo)}
          />
        </View>
      )}
      {/* Cheque Number */}
      {!chequeShow ? null : (
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Cheque Number"
            value={chequeNo}
            onChangeText={chequeNo => setChequeNo(chequeNo)}
          />
        </View>
      )}
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TouchableOpacity style={styles.cashStyle}>
          <Text style={styles.cashText}>DETAILS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cashStyle}>
          <Text style={styles.cashText}>KOT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cashSave}>
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
  bankButton: {
    borderColor: '#008AD0',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 6,
    paddingRight: 6,
    marginLeft: 6,
  },
  bankText: {
    color: '#008AD0',
    paddingBottom: 3,
  },
  bankButtonPress: {
    borderColor: '#008AD0',
    backgroundColor: '#008AD0',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 6,
    paddingRight: 6,
    marginLeft: 6,
  },
  buttonStyleCash: {
    borderWidth: 1,
    borderColor: '#008AD0',
    borderRadius: 15,
    marginLeft: 6,
  },
  bankTextPress: {
    color: 'white',
    paddingBottom: 3,
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
  buttonSelect: {
    borderWidth: 1,
    borderColor: '#008AD0',
    backgroundColor: '#008AD0',
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
  textInput: {
    backgroundColor: 'white',
    height: 40,
    marginHorizontal: 20,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'silver',
  },
  printerView: {
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    position: 'absolute',
    marginLeft: 235,
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
});
