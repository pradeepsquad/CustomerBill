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
// import {BluetoothManager,BluetoothEscposPrinter,BluetoothTscPrinter} from 'react-native-bluetooth-escpos-printer';

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
  const [showCategoriesSweet, setShowCategoriesSweet] = useState(false)
  const [showCategoriesIce, setShowCategoriesIce] = useState(false)

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

//  Handle Categories Sweet
const handleCategoriesSweet = () => {
  setShowCategories(false)
  setShowCategoriesTwo(false)
  setShowCategoriesThree(false)
  setShowCategoriesIce(false)
  setShowCategoriesSweet(true)
 
}

//  Handle Categories Ice-Creams
const handleCategoriesIce = () => {
  setShowCategories(false)
  setShowCategoriesTwo(false)
  setShowCategoriesThree(false)
  setShowCategoriesSweet(false)
  setShowCategoriesIce(true)
  
}

// Handle Print Button
// const handlePrintButton = async () => {
// // navigation.navigate('Dashboard');   //  navigate component on Dashboard
// await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
// await BluetoothEscposPrinter.setBlob(0);
// await  BluetoothEscposPrinter.printText("广州俊烨\n\r",{
//   encoding:'GBK',
//   codepage:0,
//   widthtimes:3,
//   heigthtimes:3,
//   fonttype:1
// });
// await BluetoothEscposPrinter.setBlob(0);
// await  BluetoothEscposPrinter.printText("销售单\n\r",{
//   encoding:'GBK',
//   codepage:0,
//   widthtimes:0,
//   heigthtimes:0,
//   fonttype:1
// });
// await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.LEFT);
// await  BluetoothEscposPrinter.printText("客户：零售客户\n\r",{});
// await  BluetoothEscposPrinter.printText("单号：xsd201909210000001\n\r",{});
// await  BluetoothEscposPrinter.printText("日期："+(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"))+"\n\r",{});
// await  BluetoothEscposPrinter.printText("销售员：18664896621\n\r",{});
// await  BluetoothEscposPrinter.printText("--------------------------------\n\r",{});
// let columnWidths = [12,6,6,8];
// await BluetoothEscposPrinter.printColumn(columnWidths,
//   [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.RIGHT],
//   ["商品",'数量','单价','金额'],{});
// await BluetoothEscposPrinter.printColumn(columnWidths,
//   [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.RIGHT],
//   ["React-Native定制开发我是比较长的位置你稍微看看是不是这样?",'1','32000','32000'],{});
//     await  BluetoothEscposPrinter.printText("\n\r",{});
//   await BluetoothEscposPrinter.printColumn(columnWidths,
//   [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.RIGHT],
//   ["React-Native定制开发我是比较长的位置你稍微看看是不是这样?",'1','32000','32000'],{});
// await  BluetoothEscposPrinter.printText("\n\r",{});
// await  BluetoothEscposPrinter.printText("--------------------------------\n\r",{});
// await BluetoothEscposPrinter.printColumn([12,8,12],
//   [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.RIGHT],
//   ["合计",'2','64000'],{});
// await  BluetoothEscposPrinter.printText("\n\r",{});
// await  BluetoothEscposPrinter.printText("折扣率：100%\n\r",{});
// await  BluetoothEscposPrinter.printText("折扣后应收：64000.00\n\r",{});
// await  BluetoothEscposPrinter.printText("会员卡支付：0.00\n\r",{});
// await  BluetoothEscposPrinter.printText("积分抵扣：0.00\n\r",{});
// await  BluetoothEscposPrinter.printText("支付金额：64000.00\n\r",{});
// await  BluetoothEscposPrinter.printText("结算账户：现金账户\n\r",{});
// await  BluetoothEscposPrinter.printText("备注：无\n\r",{});
// await  BluetoothEscposPrinter.printText("快递单号：无\n\r",{});
// await  BluetoothEscposPrinter.printText("打印时间："+(dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"))+"\n\r",{});
// await  BluetoothEscposPrinter.printText("--------------------------------\n\r",{});
// await  BluetoothEscposPrinter.printText("电话：\n\r",{});
// await  BluetoothEscposPrinter.printText("地址:\n\r\n\r",{});
// await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
// await  BluetoothEscposPrinter.printText("欢迎下次光临\n\r\n\r\n\r",{});
// await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.LEFT);


// }
 
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
            style={styles.categoryView}>
            <TouchableOpacity
              style={styles.categoryStyle}
              onPress={() => handleCategories()}>
              <Text style={styles.categoryText}>Drink's</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryStyle}
              onPress={() => handleCategoriesTwo()}>
              <Text style={styles.categoryText}>Snack's</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryStyle}
              onPress={() => handleCategoriesThree()}>
              <Text style={styles.categoryText}>Food's</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryStyle}
              onPress={() => handleCategoriesSweet()}>
              <Text style={styles.categoryText}>Sweet's</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryStyle}
              onPress={() => handleCategoriesIce()}>
              <Text style={styles.categoryText}>Ice-Cream's</Text>
            </TouchableOpacity>
          </View>

            {/* Show Category One */}
          { !showCategories ? null :<View
            style={styles.listView}>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>Coke</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>Pepsi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>Dew</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.imageSize}>
              <Text style={styles.imageText}>Coffee</Text>
            </TouchableOpacity>
          </View>}

          {/* Show Category Two */}
          { !showCategoriesTwo ? null :<View
            style={styles.listView}>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.imageSize}>
              <Text style={styles.imageText}>Pizza</Text>
            </TouchableOpacity>
          </View>}

            {/* Show Category Three */}
          { !showCategoriesThree? null :<View
            style={styles.listView}>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>Sahi Paneer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>Mix Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>Razma</Text>
            </TouchableOpacity>
          </View>}

            {/* Show Category Sweet */}
          { !showCategoriesSweet ? null :<View
            style={styles.listView}>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>besan laddu</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.imageSize}>
              <Text style={styles.imageText}>rasmalai</Text>
            </TouchableOpacity>
          </View>}

            {/* Show Category Ice-Cream */}
          { !showCategoriesIce ? null :<View
            style={styles.listView}>
            <TouchableOpacity
              style={styles.imageSize}>
              <Text style={styles.imageText}>American nuts</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.imageSize}>
              <Text style={styles.imageText}>Vanilla</Text>
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
  categoryStyle: {
    backgroundColor: 'yellow',
    height: 40,
    paddingTop: 10,
    marginTop: 5,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  imageSize: {
    height: 120,
    width: 95,
    backgroundColor: 'blue',
    margin: 5,
    borderRadius: 5,
  },
  imageText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: '800',
  },
  categoryView: {
    backgroundColor: 'silver',
    width: 90,
    // marginHorizontal: 3,
    marginLeft: 3,
    height: 610,
  },
  categoryText: {
    alignSelf: 'center',
    fontWeight: 'bold', 
    color: 'green',
  },
  listView: {
    marginLeft: 3,
    width: 315,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
});
