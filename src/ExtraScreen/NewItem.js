import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/reducerSlice/AddProductSlice';
import { addService } from '../Redux/reducerSlice/AddServiceSlice';


export default function NewItem({navigation}) {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [productName, setProductName] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [salePrice, setSalePrice] = useState();
  const [selectPriceUnit, setSelectPriceUnit] = useState();
  const [optionalMRP, setOptionalMRP] = useState();
  const [purchasePrice, setPurchasePrice] = useState();
  const [itemCategory, setItemCategory] = useState();
  const [selectGST, setSelectGST] = useState();
  const [cessValue, setCessValue] = useState();
  const [showGst, setShowGst] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [HSNCode, setHSNCode] = useState();
  const [itemCode, setItemCode] = useState();
  const [barCode, setBarCode] = useState();
  const [itemDescription, setItemDescription] = useState();
  const [openingStock, setOpeningStock] = useState()
  const [lowStock, setLowStock] = useState()
  const [storageLocation, setStorageLocation] = useState()
  const [selectBulkPurchase, setSelectBulkPurchase] = useState()
  const [saleUnit, setSaleUnit] = useState()
  const [purchaseUnit, setPurchaseUnit] = useState()

  const [filePath, setFilePath] = useState({});

  const dispatch = useDispatch();

  // Product Unit
  const productUnit = ['Add Unit', 'Bags', 'Bale', 'Billion of Unit', 'Bottles', 'Box', 'Buckles', 'Bunches', 'Bundles', 'Cans',
                          'Cartons', 'Centimeters', 'Cubic Centimeters', 'Cubic Meters', 'Days', 'Dozens', 'Drums', 'Grammes',
                            'Great Gross', 'Gross Yards', 'Kilograms', 'KiloLitre', 'Kilometer', 'Litre', 'Meters', 'Metric Ton', 
                            'Milligram', 'Millilitre', 'Numbers', 'Others', 'Packs', 'Pairs', 'Pieces', 'Quintal', 'Rolls', 'Sets',
                          'Sq. Feet', 'Sq. Meters', 'Sq. Yards', 'Tablets', 'Ten Gross', 'Thousand', 'Tonnes', 'Tubes', 'US Gallons',
                        'Units', 'Yards'];
  const categoryItems = [];
  const taxChoice = ['Exempted', 'GST @ 0%', 'GST @ 0.25%', 'GST @ 1%', 'GST @ 3%','GST @ 5%','GST @ 12%','GST @ 18%','GST @ 28%']

  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };

  // Handle Product
  const handleProduct = () => {
    dispatch(addProduct({productName, salePrice, selectPriceUnit, optionalMRP, purchasePrice,itemCategory,selectGST, cessValue,
      HSNCode, itemCode, barCode, itemDescription, openingStock, lowStock, storageLocation, selectBulkPurchase,
      saleUnit, purchaseUnit}))
      navigation.navigate('Inventory');
  }

  // Handle Service
  const handleService = () => {
    dispatch(addService({serviceName, salePrice, selectPriceUnit, optionalMRP, purchasePrice,itemCategory,selectGST, cessValue,
      HSNCode, itemCode, barCode, itemDescription, openingStock, lowStock, storageLocation, selectBulkPurchase,
      saleUnit, purchaseUnit}))
      navigation.navigate('Inventory');
  }

  // Upload Images
  const handleUploadImages = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        // alert('User cancelled camera picker');
        console.log('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        // alert('Camera not available on device');
        console.log('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        // alert('Permission not satisfied');
        console.log('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        // alert(response.errorMessage);
        console.log(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 30, marginHorizontal: 20}}>
        {/* Upload Image */}
          <TouchableOpacity
            style={{
              backgroundColor: '#008AD0',
              height: 35,
              width: 185,
              marginBottom: 8,
              borderRadius: 2,
              alignSelf: 'flex-end',
            }} onPress={() => handleUploadImages('photo')}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginTop: 8,
              }}>
              UPLOAD ITEM IMAGES
            </Text>
          </TouchableOpacity>
          <SegmentedControlTab
            values={['PRODUCT', 'SERVICE']}
            selectedIndex={customStyleIndex}
            onTabPress={handleCustomIndexSelect}
            borderRadius={1}
            tabsContainerStyle={{
              backgroundColor: 'white',
            }}
            tabStyle={{
              backgroundColor: 'white',
              borderWidth: 0,
              borderColor: 'transparent',
            }}
            activeTabStyle={{backgroundColor: '#008AD0', marginTop: 2}}
            tabTextStyle={{color: '#008AD0', fontWeight: '600'}}
            activeTabTextStyle={{color: 'white'}}
          />
          {/* Product Component =======================================================*/}
          {customStyleIndex === 0 && (
            <SafeAreaView styles={{flex: 1}}>
              <ScrollView>
                <View>
                  {/* Product Name */}
                  <TextInput
                    style={styles.textInput}
                    placeholder="Product Name"
                    placeholderTextColor='black'
                    keyboardType='email-address'
                    value={productName}
                    onChangeText={(productName) => setProductName(productName)}
                  />

                  {/* Product Sale Price */}
                  <TextInput
                    style={styles.textInput}
                    placeholder="Sale Price"
                    placeholderTextColor='black'
                    keyboardType='decimal-pad'
                    value={salePrice}
                    onChangeText={(salePrice) => setSalePrice(salePrice)}
                  />

                  {/* Product Price Unit */}
                  <SelectDropdown
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.rowTextStyle}
                    data={productUnit}
                    defaultButtonText={'Select Sale Price Unit'}
                    defaultValue={selectPriceUnit}
                    onSelect={item => setSelectPriceUnit(item)}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    dropdownIconPosition={'right'}
                  />

                  {/* Product MRP */}
                  <TextInput
                    style={styles.textInput}
                    placeholder="MRP (optional)"
                    placeholderTextColor='black'
                    keyboardType='decimal-pad'
                    value={optionalMRP}
                    onChangeText={(optionalMRP) => setOptionalMRP(optionalMRP)}
                  />
                  {/* Product Purchase Price */}
                  <TextInput
                    style={styles.textInput}
                    placeholder="Purchase Price"
                    placeholderTextColor='black'
                    keyboardType='decimal-pad'
                    value={purchasePrice}
                    onChangeText={(purchasePrice) => setPurchasePrice(purchasePrice)}
                  />
                  {/* Product Item Category */}
                  <SelectDropdown
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.rowTextStyle}
                    data={categoryItems}
                    defaultButtonText={'Item Category'}
                    defaultValue={itemCategory}
                    onSelect={item => setItemCategory(item)}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    dropdownIconPosition={'right'}
                  />
                    {/*  GST AND TAX (OPTIONAL)*/}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#008AD0',
                      height: 35,
                      marginTop: 15,
                      borderRadius: 3,
                    }} onPress={() => setShowGst(!showGst)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                      }}>
                      GST AND TAX (OPTIONAL)
                    </Text>
                  </TouchableOpacity>

                  { !showGst ? null :<View>
                  {/* Tax % */}
                    <SelectDropdown
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.rowTextStyle}
                    data={taxChoice}
                    defaultButtonText={'Select Tax'}
                    defaultValue={selectGST}
                    onSelect={item => setSelectGST(item)}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    dropdownIconPosition={'right'}
                  />

                  {/* CESS % */}
                  <TextInput 
                    style={styles.textInput}
                    placeholder='CESS %'
                    placeholderTextColor='black'
                    keyboardType='decimal-pad'
                    value={cessValue}
                    onChangeText={(cessValue) => setCessValue(cessValue)}
                  />
                  </View>}

                  {/* PRODUCT DETAILS (OPTIONAL) */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#008AD0',
                      height: 35,
                      marginTop: 15,
                      borderRadius: 3,
                    }} onPress={() => setShowProduct(!showProduct)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                      }}>
                      PRODUCT DETAILS (OPTIONAL)
                    </Text>
                  </TouchableOpacity>

                  {!showProduct ? null : <View>
                    {/* HSN/SAC Code */}
                      <TextInput 
                        style={styles.textInput}
                        placeholder='HSN/SAC Code'
                        placeholderTextColor='black'
                        keyboardType='decimal-pad'
                        value={HSNCode}
                        onChangeText={(HSNCode) => setHSNCode(HSNCode)}
                      />
                      {/* Item Code */}
                      <TextInput 
                        style={styles.textInput}
                        placeholder='Item Code'
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        value={itemCode}
                        onChangeText={(itemCode) => setItemCode(itemCode)}

                      />
                      {/* Bar Code */}
                      <TextInput 
                        style={styles.textInput}
                        placeholder='Bar Code'
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        value={barCode}
                        onChangeText={(barCode)=> setBarCode(barCode)}
                      />
                        {/* Item Description */}
                      <TextInput 
                        style={styles.textInput}
                        placeholder='Item Description'
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        value={itemDescription}
                        onChangeText={(itemDescription) => setItemDescription(itemDescription)}
                      />
                  </View>}

                  {/* INVENTORY DETAILS (OPTIONAL) */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#008AD0',
                      height: 35,
                      marginTop: 15,
                      borderRadius: 3,
                    }} onPress={() => setShowInventory(!showInventory)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                      }}>
                      INVENTORY DETAILS (OPTIONAL)
                    </Text>
                  </TouchableOpacity>

                  {!showInventory ? null :<View>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Opening Stock'
                        placeholderTextColor='black'
                        keyboardType='default'
                        value={openingStock}
                        onChangeText={(openingStock) => setOpeningStock(openingStock)}
                      />

                      <TextInput 
                        style={styles.textInput}
                        placeholder='Low Stock Alert'
                        placeholderTextColor='black'
                        keyboardType='default'
                        value={lowStock}
                        onChangeText={(lowStock) => setLowStock(lowStock)}
                      />

                      <TextInput 
                        style={styles.textInput}
                        placeholder='Product Storage Location'
                        placeholderTextColor='black'
                        keyboardType='default'
                        value={storageLocation}
                        onChangeText={(storageLocation) => setStorageLocation(storageLocation)}
                      />

                    <SelectDropdown
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.rowTextStyle}
                    data={productUnit}
                    defaultButtonText={'Select Bulk Purchase Unit'}
                    defaultValue={selectBulkPurchase}
                    onSelect={item => setSelectBulkPurchase(item)}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    dropdownIconPosition={'right'}
                  />
                      <TextInput 
                        style={styles.textInput}
                        placeholder='Sale Unit'
                        placeholderTextColor='black'
                        keyboardType='decimal-pad'
                        value={saleUnit}
                        onChangeText={(saleUnit) => setSaleUnit(saleUnit)}
                      />

                      <TextInput 
                        style={styles.textInput}
                        placeholder='Purchase Unit'
                        placeholderTextColor='black'
                        keyboardType='decimal-pad'
                        value={purchaseUnit}
                        onChangeText={(purchaseUnit) => setPurchaseUnit(purchaseUnit)}
                      />
                  </View>}

                  {/* PRODUCT DISPLAY (OPTIONAL) */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#008AD0',
                      height: 35,
                      marginTop: 15,
                      borderRadius: 3,
                    }} onPress={() => setShowDisplay(!showDisplay)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                      }}>
                      PRODUCT DISPLAY (OPTIONAL)
                    </Text>
                  </TouchableOpacity>

                  {!showDisplay ? null :<View>

                  </View>}
                </View>
              </ScrollView>
              <TouchableOpacity style={styles.newButton} onPress={() => handleProduct()}>
                <Text style={styles.buttonText}>SAVE</Text>
              </TouchableOpacity>
            </SafeAreaView>
          )}
          {/* Service Component ===================================================================*/}
          {customStyleIndex === 1 && (
            <SafeAreaView styles={{flex: 1}}>
              <ScrollView>
                <View>
                  {/* Service Name */}
                  <TextInput
                    style={styles.textInput}
                    placeholder="Service Name"
                    placeholderTextColor='black'
                    keyboardType='email-address'
                    value={serviceName}
                    onChangeText={(serviceName) => setServiceName(serviceName)}
                  />

                  {/* Product Sale Price */}
                  <TextInput
                    style={styles.textInput}
                    placeholder="Sale Price"
                    placeholderTextColor='black'
                    keyboardType='decimal-pad'
                    value={salePrice}
                    onChangeText={(salePrice) => setSalePrice(salePrice)}
                  />

                  {/* Product Price Unit */}
                  <SelectDropdown
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.rowTextStyle}
                    data={productUnit}
                    defaultButtonText={'Select Sale Price Unit'}
                    defaultValue={selectPriceUnit}
                    onSelect={item => setSelectPriceUnit(item)}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    dropdownIconPosition={'right'}
                  />

                  {/* Product MRP */}
                  <TextInput
                    style={styles.textInput}
                    placeholder="MRP (optional)"
                    placeholderTextColor='black'
                    keyboardType='decimal-pad'
                    value={optionalMRP}
                    onChangeText={(optionalMRP) => setOptionalMRP(optionalMRP)}
                  />
                  {/* Product Purchase Price */}
                  <TextInput
                    style={styles.textInput}
                    placeholder="Purchase Price"
                    placeholderTextColor='black'
                    keyboardType='decimal-pad'
                    value={purchasePrice}
                    onChangeText={(purchasePrice) => setPurchasePrice(purchasePrice)}
                  />
                  {/* Product Item Category */}
                  <SelectDropdown
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.rowTextStyle}
                    data={categoryItems}
                    defaultButtonText={'Item Category'}
                    defaultValue={itemCategory}
                    onSelect={item => setItemCategory(item)}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    dropdownIconPosition={'right'}
                  />
                    {/*  GST AND TAX (OPTIONAL)*/}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#008AD0',
                      height: 35,
                      marginTop: 15,
                      borderRadius: 3,
                    }} onPress={() => setShowGst(!showGst)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                      }}>
                      GST AND TAX (OPTIONAL)
                    </Text>
                  </TouchableOpacity>

                  { !showGst ? null :<View>
                  {/* Tax % */}
                    <SelectDropdown
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.rowTextStyle}
                    data={taxChoice}
                    defaultButtonText={'Select Tax'}
                    defaultValue={selectGST}
                    onSelect={item => setSelectGST(item)}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    dropdownIconPosition={'right'}
                  />

                  {/* CESS % */}
                  <TextInput 
                    style={styles.textInput}
                    placeholder='CESS %'
                    placeholderTextColor='black'
                    keyboardType='decimal-pad'
                    value={cessValue}
                    onChangeText={(cessValue) => setCessValue(cessValue)}
                  />
                  </View>}

                  {/* PRODUCT DETAILS (OPTIONAL) */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#008AD0',
                      height: 35,
                      marginTop: 15,
                      borderRadius: 3,
                    }} onPress={() => setShowProduct(!showProduct)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                      }}>
                      PRODUCT DETAILS (OPTIONAL)
                    </Text>
                  </TouchableOpacity>

                  {!showProduct ? null : <View>
                    {/* HSN/SAC Code */}
                      <TextInput 
                        style={styles.textInput}
                        placeholder='HSN/SAC Code'
                        placeholderTextColor='black'
                        keyboardType='decimal-pad'
                        value={HSNCode}
                        onChangeText={(HSNCode) => setHSNCode(HSNCode)}
                      />
                      {/* Item Code */}
                      <TextInput 
                        style={styles.textInput}
                        placeholder='Item Code'
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        value={itemCode}
                        onChangeText={(itemCode) => setItemCode(itemCode)}

                      />
                      {/* Bar Code */}
                      <TextInput 
                        style={styles.textInput}
                        placeholder='Bar Code'
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        value={barCode}
                        onChangeText={(barCode)=> setBarCode(barCode)}
                      />
                        {/* Item Description */}
                      <TextInput 
                        style={styles.textInput}
                        placeholder='Item Description'
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        value={itemDescription}
                        onChangeText={(itemDescription) => setItemDescription(itemDescription)}
                      />
                  </View>}

                  {/* INVENTORY DETAILS (OPTIONAL) */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#008AD0',
                      height: 35,
                      marginTop: 15,
                      borderRadius: 3,
                    }} onPress={() => setShowInventory(!showInventory)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                      }}>
                      INVENTORY DETAILS (OPTIONAL)
                    </Text>
                  </TouchableOpacity>

                  {!showInventory ? null :<View>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Opening Stock'
                        placeholderTextColor='black'
                        keyboardType='default'
                        value={openingStock}
                        onChangeText={(openingStock) => setOpeningStock(openingStock)}
                      />

                      <TextInput 
                        style={styles.textInput}
                        placeholder='Low Stock Alert'
                        placeholderTextColor='black'
                        keyboardType='default'
                        value={lowStock}
                        onChangeText={(lowStock) => setLowStock(lowStock)}
                      />

                      <TextInput 
                        style={styles.textInput}
                        placeholder='Product Storage Location'
                        placeholderTextColor='black'
                        keyboardType='default'
                        value={storageLocation}
                        onChangeText={(storageLocation) => setStorageLocation(storageLocation)}
                      />

                    <SelectDropdown
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownButtonText}
                    rowStyle={styles.dropdownRow}
                    rowTextStyle={styles.rowTextStyle}
                    data={productUnit}
                    defaultButtonText={'Select Bulk Purchase Unit'}
                    defaultValue={selectBulkPurchase}
                    onSelect={item => setSelectBulkPurchase(item)}
                    renderDropdownIcon={isOpened => {
                      return (
                        <Icons
                          name={
                            isOpened ? 'caret-down-outline' : 'caret-up-outline'
                          }
                          color={'#444'}
                          size={14}
                        />
                      );
                    }}
                    dropdownIconPosition={'right'}
                  />
                      <TextInput 
                        style={styles.textInput}
                        placeholder='Sale Unit'
                        placeholderTextColor='black'
                        keyboardType='decimal-pad'
                        value={saleUnit}
                        onChangeText={(saleUnit) => setSaleUnit(saleUnit)}
                      />

                      <TextInput 
                        style={styles.textInput}
                        placeholder='Purchase Unit'
                        placeholderTextColor='black'
                        keyboardType='decimal-pad'
                        value={purchaseUnit}
                        onChangeText={(purchaseUnit) => setPurchaseUnit(purchaseUnit)}
                      />
                  </View>}

                  {/* PRODUCT DISPLAY (OPTIONAL) */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#008AD0',
                      height: 35,
                      marginTop: 15,
                      borderRadius: 3,
                    }} onPress={() => setShowDisplay(!showDisplay)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop: 8,
                      }}>
                      PRODUCT DISPLAY (OPTIONAL)
                    </Text>
                  </TouchableOpacity>

                  {!showDisplay ? null :<View>

                  </View>}
                </View>
              </ScrollView>
              <TouchableOpacity style={styles.newButton} onPress={() => handleService()}>
                <Text style={styles.buttonText}>SAVE</Text>
              </TouchableOpacity>
            </SafeAreaView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dropdownButton: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    width: '100%',
  },
  dropdownButtonTwo: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
    width: '49%',
    marginLeft: '.5%',
    marginRight: '.5%',
  },
  dropdownButtonText: {
    textAlign: 'justify',
    fontSize: 14,
    color: 'black',
  },
  dropdownRow: {
    backgroundColor: 'white',
    borderBottomColor: 'silver',
  },
  rowTextStyle: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  newButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 100,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 60,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 8,
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    color: 'black',
    borderColor: 'silver',
    borderWidth: 1,
    marginTop: 8,
    paddingLeft: 20,
    borderRadius: 5,
  },
});
