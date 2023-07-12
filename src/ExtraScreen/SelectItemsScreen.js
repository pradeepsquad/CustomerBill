import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Checkbox} from 'react-native-paper';
import {
  BluetoothManager,
  BluetoothEscposPrinter,
} from 'react-native-bluetooth-escpos-printer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SelectItemsScreen({navigation}) {
  const [transactionNo, setTransactionNo] = useState();
  const [chequeNo, setChequeNo] = useState();
  const [transactionShow, setTransactionShow] = useState(false);
  const [chequeShow, setChequeShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [defaultCash, setDefaultCash] = useState(true);
  const [defaultUpi, setDefaultUpi] = useState(false);
  const [defaultCheque, setDefaultCheque] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [showCategoriesTwo, setShowCategoriesTwo] = useState(false);
  const [showCategoriesThree, setShowCategoriesThree] = useState(false);
  const [showCategoriesSweet, setShowCategoriesSweet] = useState(false);
  const [showCategoriesIce, setShowCategoriesIce] = useState(false);
  const [saveDevice, setSaveDevice] = useState();
  const [drinkShow, setDrinkShow] = useState(true);
  const [snackShow, setSnackShow] = useState(false);
  const [foodShow, setFoodShow] = useState(false);
  const [sweetShow, setSweetShow] = useState(false);
  const [ice_CreamShow, setIce_CreamShow] = useState(false);

  const [systemDate, setSystemDate] = useState();
  const [systemTime, setSystemTime] = useState();
  const [selectItem, setSelectItem] = useState([]);
  const [newPrice, setNewPrice] = useState([])
  const [newItem, setNewItem] = useState([])

  // DATE AND TIME
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

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

  //  Handle Categories One
  const handleCategories = () => {
    setShowCategories(true);
    setShowCategoriesTwo(false);
    setShowCategoriesThree(false);
    setDrinkShow(true);
    setSnackShow(false);
    setFoodShow(false);
    setSweetShow(false);
    setIce_CreamShow(false);
  };

  //  Handle Categories Two
  const handleCategoriesTwo = () => {
    setShowCategories(false);
    setShowCategoriesTwo(true);
    setShowCategoriesThree(false);
    setDrinkShow(false);
    setSnackShow(true);
    setFoodShow(false);
    setSweetShow(false);
    setIce_CreamShow(false);
  };

  //  Handle Categories Three
  const handleCategoriesThree = () => {
    setShowCategories(false);
    setShowCategoriesTwo(false);
    setShowCategoriesThree(true);
    setDrinkShow(false);
    setSnackShow(false);
    setFoodShow(true);
    setSweetShow(false);
    setIce_CreamShow(false);
  };

  //  Handle Categories Sweet
  const handleCategoriesSweet = () => {
    setShowCategories(false);
    setShowCategoriesTwo(false);
    setShowCategoriesThree(false);
    setShowCategoriesIce(false);
    setShowCategoriesSweet(true);
    setDrinkShow(false);
    setSnackShow(false);
    setFoodShow(false);
    setSweetShow(true);
    setIce_CreamShow(false);
  };

  //  Handle Categories Ice-Creams
  const handleCategoriesIce = () => {
    setShowCategories(false);
    setShowCategoriesTwo(false);
    setShowCategoriesThree(false);
    setShowCategoriesSweet(false);
    setShowCategoriesIce(true);
    setDrinkShow(false);
    setSnackShow(false);
    setFoodShow(false);
    setSweetShow(false);
    setIce_CreamShow(true);
  };

  // GET PRINTER FORM ASYNC STORAGE
  useEffect(async () => {
    try {
      const savedUser = await AsyncStorage.getItem('user');
      const currentUser = JSON.parse(savedUser);
      setSaveDevice(currentUser);
    } catch (error) {
      // console.log(error);
      // alert(error)
      ToastAndroid.showWithGravityAndOffset(
        error,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        100,
        100,
      );
    }

    setSystemDate(formattedDate);
    setSystemTime(formattedTime);
  }, []);

  // HANDLE SAVE AND PRINT DATA
  const handleSaveItem = async () => {
    if (!saveDevice == []) {
      await BluetoothManager.connect(saveDevice)
        .then(s => {
          ToastAndroid.showWithGravityAndOffset(
            s,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            100,
            100,
          );
        })
        .catch(err => {
          console.log('connect Error', err);
          ToastAndroid.showWithGravityAndOffset(
            err,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            100,
            100,
          );
        });
      await BluetoothEscposPrinter.printerInit();
      await BluetoothEscposPrinter.printerAlign(
        BluetoothEscposPrinter.ALIGN.CENTER,
      );
      await BluetoothEscposPrinter.printText('SHOP NAME\n', {});
      await BluetoothEscposPrinter.printText('Bill No: INV_001 \n', {});
      await BluetoothEscposPrinter.printText('Date:  ', {});
      await BluetoothEscposPrinter.printText(systemDate + ' ' + systemTime + '\n',
        {},);
      await BluetoothEscposPrinter.printText('Bill To: Cash Sale \n', {});
      await BluetoothEscposPrinter.printText(
        '--------------------------------\r\n',
        {},
      );
      await BluetoothEscposPrinter.printerAlign(
        BluetoothEscposPrinter.ALIGN.LEFT,
      );
      await BluetoothEscposPrinter.printText(
        'Item Name    Qty   Rate   Total \n',
        {},
      );
      await BluetoothEscposPrinter.printText(selectItem+'\n', {})
      await BluetoothEscposPrinter.printText(
        '--------------------------------\r\n',
        {},
      );
      await BluetoothEscposPrinter.printText('Total Items:  (Qty) \n', {}); // Total items
      await BluetoothEscposPrinter.printText('Total Quantity:  (price) \n', {}); // Total quantity
      await BluetoothEscposPrinter.printerAlign(
        BluetoothEscposPrinter.ALIGN.CENTER,
      );
      await BluetoothEscposPrinter.printText('Sub Total:  (total)` \n', {}); // sub total
      await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Device is not connected please select Device first',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        100,
        100,
      );
    }
  };

  // HANDLE KOT PRINT RECEIPT
  const HandleKOT = async () => {
    if (!saveDevice == []) {
      await BluetoothManager.connect(saveDevice)
        .then(s => {
          ToastAndroid.showWithGravityAndOffset(
            s,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            100,
            100,
          );
        })
        .catch(err => {
          console.log('connect Error', err);
          ToastAndroid.showWithGravityAndOffset(
            err,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            100,
            100,
          );
        });
      await BluetoothEscposPrinter.printerInit();
      await BluetoothEscposPrinter.printerAlign(
        BluetoothEscposPrinter.ALIGN.LEFT,
      );
      await BluetoothEscposPrinter.printText('KOT: 1 \n', {});
      await BluetoothEscposPrinter.printText('Date:  ', {});
      await BluetoothEscposPrinter.printText(
        systemDate + ' ' + systemTime + '\n',
        {},
      );
      await BluetoothEscposPrinter.printText('Bill No: INV_001 \n', {});
      await BluetoothEscposPrinter.printText('Table: Cash Sale \n', {});
      await BluetoothEscposPrinter.printText(newItem+'           '+newPrice+'\n', {});
      await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Device is not connected please select Device first',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        100,
        100,
      );
    }
  };

// RENDER DRINKS
  const AllDrinks = ({item}) => {
    return(
      <TouchableOpacity style={styles.imageSize} onPress={()=> SelectedItems(item)}>
      {/* <Image source={require('../assets/test.jpeg')} style={{height: 80, width: 92, borderRadius: 3, alignSelf: 'center'}}/> */}
      <Text style={styles.imageText}>{item.name}</Text>
      <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>{item.price}</Text>
      </TouchableOpacity>
    );
  }
// RENDER SNKS
  const AllSnks = ({item}) => {
    return(
      <TouchableOpacity style={styles.imageSize} onPress={()=> SelectedItems(item)}>
      {/* <Image source={require('../assets/test.jpeg')} style={{height: 80, width: 92, borderRadius: 3, alignSelf: 'center'}}/> */}
      <Text style={styles.imageText}>{item.name}</Text>
      <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>{item.price}</Text>
      </TouchableOpacity>
    );
  }

  // RENDER FOODS
  const AllFoods = ({item}) => {
    return(
      <TouchableOpacity style={styles.imageSize} onPress={()=> SelectedItems(item)}>
      {/* <Image source={require('../assets/test.jpeg')} style={{height: 80, width: 92, borderRadius: 3, alignSelf: 'center'}}/> */}
      <Text style={styles.imageText}>{item.name}</Text>
      <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>{item.price}</Text>
      </TouchableOpacity>
    );
  }

  // RENDER SWEETS
  const AllSweets = ({item}) => {
    return(
      <TouchableOpacity style={styles.imageSize} onPress={()=> SelectedItems(item)}>
      {/* <Image source={require('../assets/test.jpeg')} style={{height: 80, width: 92, borderRadius: 3, alignSelf: 'center'}}/> */}
      <Text style={styles.imageText}>{item.name}</Text>
      <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>{item.price}</Text>
      </TouchableOpacity>
    );
  }

  // RENDER ICE_CREAM
  const AllIceCream = ({item}) => {
    return(
      <TouchableOpacity style={styles.imageSize} onPress={()=> SelectedItems(item)}>
      {/* <Image source={require('../assets/test.jpeg')} style={{height: 80, width: 92, borderRadius: 3, alignSelf: 'center'}}/> */}
      <Text style={styles.imageText}>{item.name}</Text>
      <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>{item.price}</Text>
      </TouchableOpacity>
    );
  }

  // SELECT ITEM FROM LIST
  const SelectedItems = (item) => {
    setChecked(true)
    let oldStateSelectedItems = selectItem || [];
    oldStateSelectedItems.push(item);
    setSelectItem([...oldStateSelectedItems]);
  }
// console.log('========================>', selectItem)
useEffect(() => {
  selectItem.forEach((i) => {
    setNewItem(i.name)
    setNewPrice(i.price)
    console.log(i.name, i.price)
    
  })
})
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
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.categoryView}>
            {/* SHOW DRINKS */}
            <TouchableOpacity
              style={
                drinkShow ? styles.categoryStyle : styles.categoryStyleSelect
              }
              onPress={() => [handleCategories()]}>
              <Text
                style={
                  drinkShow ? styles.categoryText : styles.categoryTextSelect
                }>
                Drink's
              </Text>
            </TouchableOpacity>
            {/* SHOW SNACK */}
            <TouchableOpacity
              style={
                snackShow ? styles.categoryStyle : styles.categoryStyleSelect
              }
              onPress={() => [handleCategoriesTwo(), setSnackShow(!snackShow)]}>
              <Text
                style={
                  snackShow ? styles.categoryText : styles.categoryTextSelect
                }>
                Snack's
              </Text>
            </TouchableOpacity>
            {/* SHOW FOOD */}
            <TouchableOpacity
              style={
                foodShow ? styles.categoryStyle : styles.categoryStyleSelect
              }
              onPress={() => [handleCategoriesThree(), setFoodShow(!foodShow)]}>
              <Text
                style={
                  foodShow ? styles.categoryText : styles.categoryTextSelect
                }>
                Food's
              </Text>
            </TouchableOpacity>
            {/* SHOW SWEETS */}
            <TouchableOpacity
              style={
                sweetShow ? styles.categoryStyle : styles.categoryStyleSelect
              }
              onPress={() => [
                handleCategoriesSweet(),
                setSweetShow(!sweetShow),
              ]}>
              <Text
                style={
                  sweetShow ? styles.categoryText : styles.categoryTextSelect
                }>
                Sweet's
              </Text>
            </TouchableOpacity>
            {/* SHOW ICE_CREAM */}
            <TouchableOpacity
              style={
                ice_CreamShow
                  ? styles.categoryStyle
                  : styles.categoryStyleSelect
              }
              onPress={() => [
                handleCategoriesIce(),
                setIce_CreamShow(!ice_CreamShow),
              ]}>
              <Text
                style={
                  ice_CreamShow
                    ? styles.categoryText
                    : styles.categoryTextSelect
                }>
                Ice-Cream's
              </Text>
            </TouchableOpacity>
          </View>

          {/* Show Category One */}
          {!showCategories ? null : (
            <View style={styles.listView}>
              <FlatList 
                data={myDrinks}
                numColumns={3}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={AllDrinks}
                keyExtractor={item => item.id}
              />
            </View>
          )}

          {/* Show Category Two */}
          {!showCategoriesTwo ? null : (
            <View style={styles.listView}>
            <FlatList 
                data={mySnks}
                numColumns={3}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={AllSnks}
                keyExtractor={item => item.id}
              />
            </View>
          )}

          {/* Show Category Three */}
          {!showCategoriesThree ? null : (
            <View style={styles.listView}>
              <FlatList 
                data={myFood}
                numColumns={3}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={AllFoods}
                keyExtractor={item => item.id}
              />
            </View>
          )}

          {/* Show Category Sweet */}
          {!showCategoriesSweet ? null : (
            <View style={styles.listView}>
              <FlatList 
                data={mySweets}
                numColumns={3}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={AllSweets}
                keyExtractor={item => item.id}
              />
            </View>
          )}

          {/* Show Category Ice-Cream */}
          {!showCategoriesIce ? null : (
            <View style={styles.listView}>
              <FlatList 
                data={myIceCream}
                numColumns={3}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={AllIceCream}
                keyExtractor={item => item.id}
              />
            </View>
          )}
        </View>
      </ScrollView>

      <View style={{flexDirection: 'row', marginLeft: 20}}>
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
            {saveDevice ? (
              <Text style={[styles.redText, {color: 'green'}]}>
                {saveDevice}
              </Text>
            ) : (
              <Text style={styles.redText}>CONNECT TO PRINTER</Text>
            )}
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
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Transaction Number"
            placeholderTextColor="silver"
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
            placeholderTextColor="silver"
            value={chequeNo}
            onChangeText={chequeNo => setChequeNo(chequeNo)}
          />
        </View>
      )}
      <View style={{flexDirection: 'row', marginTop: 5, alignSelf: 'center'}}>
        <TouchableOpacity
          style={styles.cashStyle}
          onPress={() => navigation.push('New Sale')}>
          <Text style={styles.cashText}>DETAILS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cashStyle} onPress={() => HandleKOT()}>
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
  buttonStyle: {
    borderColor: '#008AD0',
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    marginRight: 6,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'silver',
  },
  buttonText: {
    color: '#008AD0',
    fontWeight: '500',
    marginTop: 6.5,
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
    backgroundColor: 'silver',
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
    marginTop: 8,
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
    paddingLeft: 15,
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
  categoryStyle: {
    backgroundColor: 'yellow',
    borderColor: 'silver',
    borderWidth: 2,
    height: 40,
    paddingTop: 10,
    marginTop: 5,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  categoryStyleSelect: {
    backgroundColor: 'silver',
    borderColor: 'silver',
    borderWidth: 2,
    height: 40,
    paddingTop: 10,
    marginTop: 5,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  imageSize: {
    height: 120,
    width: 95,
    // backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
    borderRadius: 5,
  },
  imageText: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: '800',
  },
  categoryView: {
    backgroundColor: 'gray',
    width: 90,
    marginLeft: 3,
    height: 610,
    borderRadius: 5,
  },
  categoryText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 7,
  },
  categoryTextSelect: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 7,
  },
  listView: {
    marginLeft: 3,
    width: 315,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
});

const myDrinks = [
  {
    id: 1,
    name: 'Coke',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 2,
    name: 'pepsi',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 3,
    name: 'paani bottal',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 4,
    name: 'limca',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 5,
    name: 'maza',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 6,
    name: 'verka lassi',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 7,
    name: 'mango shake',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 8,
    name: 'milk shake',
    price: 50,
    expDate: '10/2/22',
  },
  {
    id: 9,
    name: 'oreo shake',
    price: 50,
    expDate: '10/2/22',
  },
  {
    id: 10,
    name: 'mix fruit',
    price: 100,
    expDate: '10/2/22',
  },
  {
    id: 11,
    name: 'banana shake',
    price: 50,
    expDate: '10/2/22',
  },
  
];

const mySnks = [
  {
    id: 1,
    name: 'chips',
    price: 10,
    expDate: '10/2/22',
  },
  {
    id: 2,
    name: 'kurkure',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 3,
    name: 'laze',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 4,
    name: 'aloo bhuzia',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 5,
    name: 'khtaata meetha',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 6,
    name: 'banana chips',
    price: 30,
    expDate: '10/2/22',
  },
];

const myFood = [
  {
    id: 1,
    name: 'Plate_1',
    price: 10,
    expDate: '10/2/22',
  },
  {
    id: 2,
    name: 'Plate_2',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 3,
    name: 'Plate_3',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 4,
    name: 'Plate_4',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 5,
    name: 'Plate_5',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 6,
    name: 'Plate_6',
    price: 30,
    expDate: '10/2/22',
  },
];

const mySweets = [
  {
    id: 1,
    name: 'sweets_1',
    price: 10,
    expDate: '10/2/22',
  },
  {
    id: 2,
    name: 'sweets_2',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 3,
    name: 'sweets_3',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 4,
    name: 'sweets_4',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 5,
    name: 'sweets_5',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 6,
    name: 'sweets_6',
    price: 30,
    expDate: '10/2/22',
  },
];

const myIceCream = [
  {
    id: 1,
    name: 'ice_cream_1',
    price: 10,
    expDate: '10/2/22',
  },
  {
    id: 2,
    name: 'ice_cream_2',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 3,
    name: 'ice_cream_3',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 4,
    name: 'ice_cream_4',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 4,
    name: 'ice_cream_5',
    price: 20,
    expDate: '10/2/22',
  },
  {
    id: 5,
    name: 'ice_cream_6',
    price: 30,
    expDate: '10/2/22',
  },
];