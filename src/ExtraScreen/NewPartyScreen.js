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
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';
import {Checkbox} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {newCustomer} from '../Redux/reducerSlice/NewCustomerSlice';
import {newSupplier} from '../Redux/reducerSlice/NewSupplierSlice';

export default function NewPartyScreen() {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [billingAddress, setBillingAddress] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [selectBillingState, setSelectBillingState] = useState();
  const [selectDeliveryState, setSelectDeliveryState] = useState();
  const [billingPinCode, setBillingPinCode] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [deliveryPinCode, setDeliveryPinCode] = useState();
  const [selectBalanceType, setSelectBalanceType] = useState()
  const [selectBillingTerm, setSelectBillingTerm] = useState()
  const [openGst, setOpenGst] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [sameChecked, setSameChecked] = useState(false);
  const [addressOptional, setAddressOptional] = useState(false);
  const [balanceOptional, setBalanceOptional] = useState(false);
  const [openingBalance, setOpeningBalance] = useState();

  const dispatch = useDispatch();

  const billingState = [
    ' Select Billing State',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra & Nagar Haveli and Daman & Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Lakshadweep',
    'Puducherry',
    'Ladakh',
  ];

  const balanceType = ['To Receive - credit', 'To Pay - Balance'];
  const billingTerm = ['Net 0', 'Net 1', 'Net 7', 'Net 15', 'Net 30', 'Net 90'];

  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };

  // Handle Customer
  const handleCustomer = () => {
      dispatch(newCustomer({customerName, phoneNumber, billingAddress, gstNumber, selectBillingState, billingPinCode,
        deliveryAddress, selectDeliveryState, deliveryPinCode, openingBalance, selectBalanceType, selectBillingTerm
      }))
  }

  // Handle Supplier
  const handleSupplier = () => {
    dispatch(newSupplier({supplierName, phoneNumber, billingAddress, gstNumber, selectBillingState, billingPinCode,
      deliveryAddress, selectDeliveryState, deliveryPinCode, openingBalance, selectBalanceType, selectBillingTerm
    }))
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <SegmentedControlTab
          values={['CUSTOMER', 'SUPPLIER']}
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
        {/* Customer component ==================================================*/}
        {customStyleIndex === 0 && (
          <SafeAreaView styles={{flex: 1}}>
            <View>
                 {/* Customer Name */}
                <TextInput
                  style={styles.textInput}
                  placeholder="Customer Name"
                  placeholderTextColor='black'
                  keyboardType='default'
                  value={customerName}
                  onChangeText={customerName => setCustomerName(customerName)}
                />
                  {/* Phone Number */}
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone Number"
                  placeholderTextColor='black'
                  keyboardType='phone-pad'
                  numeric
                  value={phoneNumber}
                  onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                />
                  {/* billing Address */}
                <TextInput
                  style={styles.textInput}
                  placeholder="Billing Address"
                  placeholderTextColor='black'
                  keyboardType='default'
                  value={billingAddress}
                  onChangeText={billingAddress =>
                    setBillingAddress(billingAddress)
                  }
                />

                  {/* show and hide GST */}
                <TouchableOpacity
                  style={styles.gstButton}
                  onPress={() => setOpenGst(!openGst)}>
                  <Text style={styles.gstText}>+ GST AND ADDRESS</Text>
                </TouchableOpacity>

                {!openGst ? null : (
                  <View>
                  {/* GST Number */}
                    <TextInput
                      style={styles.textInput}
                      placeholder="GST Number"
                      placeholderTextColor='black'
                      keyboardType='default'
                      value={gstNumber}
                      onChangeText={gstNumber => setGstNumber(gstNumber)}
                    />
                      {/* address Optionals */}
                    <TouchableOpacity
                      style={styles.addressButton}
                      onPress={() => setAddressOptional(!addressOptional)}>
                      <Text style={styles.addressText}>ADDRESS (OPTIONAL)</Text>
                    </TouchableOpacity>

                    {!addressOptional ? null : (
                      <View>
                        {/* select State */}
                        <SelectDropdown
                          buttonStyle={styles.dropdownButton}
                          buttonTextStyle={styles.dropdownButtonText}
                          rowStyle={styles.dropdownRow}
                          rowTextStyle={styles.rowTextStyle}
                          data={billingState}
                          defaultButtonText={'Select Billing State'}
                          defaultValue={selectBillingState}
                          onSelect = {(item) =>setSelectBillingState(item) }
                          renderDropdownIcon={isOpened => {
                            return (
                              <Icons
                                name={
                                  isOpened
                                    ? 'caret-down-outline'
                                    : 'caret-up-outline'
                                }
                                color={'#444'}
                                size={14}
                              />
                            );
                          }}
                          dropdownIconPosition={'right'}
                        />

                        {/* Billing PinCode */}
                        <TextInput
                          style={styles.textInput}
                          placeholder="Billing PinCode"
                          placeholderTextColor='black'
                          value={billingPinCode}
                          keyboardType="number-pad"
                          onChangeText={billingPinCode => setBillingPinCode(billingPinCode)}
                        />

                        {/* DELIVERY Address */}
                        <TouchableOpacity
                          style={[styles.textInput, {flexDirection: 'row'}]}>
                          <Checkbox
                            color="black"
                            uncheckedColor="silver"
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <Text
                            style={{
                              marginTop: 10,
                              fontSize: 13,
                              color: 'black',
                            }}>
                            DELIVERY ADDRESS
                          </Text>
                        </TouchableOpacity>

                        {/* Same As Billing Address */}
                        {!isChecked ? null : (
                          <View>
                            <TouchableOpacity
                              style={[
                                styles.textInput,
                                {flexDirection: 'row'},
                              ]}>
                              <Checkbox
                                color="black"
                                uncheckedColor="silver"
                                status={sameChecked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                  setSameChecked(!sameChecked);
                                }}
                              />
                              <Text
                                style={{
                                  marginTop: 10,
                                  fontSize: 13,
                                  color: 'black',
                                }}>
                               
                                SAME AS BILLING ADDRESS
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}

                        {/* Delivery Address */}
                        {sameChecked ? null : (
                          <View>
                            <TextInput
                              style={styles.textInput}
                              placeholder="Delivery Address"
                              placeholderTextColor='black'
                              keyboardType='default'
                              value={deliveryAddress}
                              onChangeText={deliveryAddress =>
                                setDeliveryAddress(deliveryAddress)
                              }
                            />
                            {/* Delivery State */}
                            <SelectDropdown
                              buttonStyle={styles.dropdownButton}
                              buttonTextStyle={styles.dropdownButtonText}
                              rowStyle={styles.dropdownRow}
                              rowTextStyle={styles.rowTextStyle}
                              data={billingState}
                              defaultButtonText={'Select Delivery State'}
                              defaultValue={selectDeliveryState}
                              onSelect={item => setSelectDeliveryState(item)}
                              renderDropdownIcon={isOpened => {
                                return (
                                  <Icons
                                    name={
                                      isOpened
                                        ? 'caret-down-outline'
                                        : 'caret-up-outline'
                                    }
                                    color={'#444'}
                                    size={14}
                                  />
                                );
                              }}
                              dropdownIconPosition={'right'}
                            />
                            {/* Delivery PinCode */}
                            <TextInput
                              style={styles.textInput}
                              placeholder="Delivery PinCode"
                              placeholderTextColor='black'
                              keyboardType='numeric'
                              value={deliveryPinCode}
                              onChangeText={deliveryPinCode =>
                                setDeliveryPinCode(deliveryPinCode)
                              }
                            />
                          </View>
                        )}
                      </View>
                    )}

                    {/* Balance Details Optionals */}
                    <TouchableOpacity
                      style={styles.addressButton}
                      onPress={() => setBalanceOptional(!balanceOptional)}>
                      <Text style={styles.addressText}>
                        BALANCE DETAILS (OPTIONAL)
                      </Text>
                    </TouchableOpacity>

                    {!balanceOptional ? null : (
                      <View>
                        {/* opening Balance */}
                        <TextInput
                          style={styles.textInput}
                          placeholder="Opening Balance"
                          placeholderTextColor='black'
                          keyboardType='numeric'
                          value={openingBalance}
                          onChangeText={openingBalance => setOpeningBalance(openingBalance)}
                        />
                        {/* opening Balance Type */}
                        <SelectDropdown
                          buttonStyle={styles.dropdownButton}
                          buttonTextStyle={styles.dropdownButtonText}
                          rowStyle={styles.dropdownRow}
                          rowTextStyle={styles.rowTextStyle}
                          data={balanceType}
                          defaultButtonText={'Select Opening Balance Type'}
                          defaultValue={selectBalanceType}
                          onSelect={item => setSelectBalanceType(item)}
                          renderDropdownIcon={isOpened => {
                            return (
                              <Icons
                                name={
                                  isOpened
                                    ? 'caret-down-outline'
                                    : 'caret-up-outline'
                                }
                                color={'#444'}
                                size={14}
                              />
                            );
                          }}
                          dropdownIconPosition={'right'}
                        />
                        {/* billing Term */}
                        <SelectDropdown
                          buttonStyle={styles.dropdownButton}
                          buttonTextStyle={styles.dropdownButtonText}
                          rowStyle={styles.dropdownRow}
                          rowTextStyle={styles.rowTextStyle}
                          data={billingTerm}
                          defaultButtonText={'Select Billing Term'}
                          defaultValue={selectBillingTerm}
                          onSelect={(item) => setSelectBillingTerm(item)}
                          renderDropdownIcon={isOpened => {
                            return (
                              <Icons
                                name={
                                  isOpened
                                    ? 'caret-down-outline'
                                    : 'caret-up-outline'
                                }
                                color={'#444'}
                                size={14}
                              />
                            );
                          }}
                          dropdownIconPosition={'right'}
                        />
                      </View>
                    )}
                  </View>
                )} 
                </View>
         

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={() => handleCustomer()}>
              <Text style={styles.saveText}>SAVE</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}

        {/* Supplier Component ================================================== */}
        {customStyleIndex === 1 && (
          <SafeAreaView styles={{flex: 1}}>
              <View>
              {/* Supplier Name */}
                <TextInput
                  style={styles.textInput}
                  placeholder="Supplier Name"
                  placeholderTextColor='black'
                  keyboardType='default'
                  value={supplierName}
                  onChangeText={supplierName => setSupplierName(supplierName)}
                />
                {/* Phone Number */}
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone Number"
                  placeholderTextColor='black'
                  keyboardType='phone-pad'
                  value={phoneNumber}
                  onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                />
                {/* Billing Address */}
                <TextInput
                  style={styles.textInput}
                  placeholder="Billing Address"
                  placeholderTextColor='black'
                  keyboardType='default'
                  value={billingAddress}
                  onChangeText={billingAddress =>
                    setBillingAddress(billingAddress)
                  }
                />
                  {/* show and Hide GST */}
                <TouchableOpacity
                  style={styles.gstButton}
                  onPress={() => setOpenGst(!openGst)}>
                  <Text style={styles.gstText}>+ GST AND ADDRESS</Text>
                </TouchableOpacity>

                {!openGst ? null : (
                  <View>
                  {/* GST Number */}
                    <TextInput
                      style={styles.textInput}
                      placeholder="GST Number"
                      placeholderTextColor='black'
                      keyboardType='default'
                      value={gstNumber}
                      onChangeText={gstNumber => setGstNumber(gstNumber)}
                    />
                    {/* Address Optionals */}
                    <TouchableOpacity
                      style={styles.addressButton}
                      onPress={() => setAddressOptional(!addressOptional)}>
                      <Text style={styles.addressText}>ADDRESS (OPTIONAL)</Text>
                    </TouchableOpacity>

                    {!addressOptional ? null : (
                      <View>
                        {/* select State */}
                        <SelectDropdown
                          buttonStyle={styles.dropdownButton}
                          buttonTextStyle={styles.dropdownButtonText}
                          rowStyle={styles.dropdownRow}
                          rowTextStyle={styles.rowTextStyle}
                          data={billingState}
                          defaultValue={selectBillingState}
                          onSelect={item => setSelectBillingState(item)}
                          defaultButtonText={'Select Billing State'}
                          renderDropdownIcon={isOpened => {
                            return (
                              <Icons
                                name={
                                  isOpened
                                    ? 'caret-down-outline'
                                    : 'caret-up-outline'
                                }
                                color={'#444'}
                                size={14}
                              />
                            );
                          }}
                          dropdownIconPosition={'right'}
                        />

                        {/* Billing PinCode */}
                        <TextInput
                          style={styles.textInput}
                          placeholder="Billing PinCode"
                          placeholderTextColor='black'
                          keyboardType='numeric'
                          value={billingPinCode}
                          onChangeText={billingPinCode => setBillingPinCode(billingPinCode)}
                        />

                        {/* DELIVERY Address */}
                        <TouchableOpacity
                          style={[styles.textInput, {flexDirection: 'row'}]}>
                          <Checkbox
                            color="black"
                            uncheckedColor="silver"
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <Text
                            style={{
                              marginTop: 10,
                              fontSize: 13,
                              color: 'black',
                            }}>
                            DELIVERY ADDRESS
                          </Text>
                        </TouchableOpacity>

                        {/* Same As Billing Address */}
                        {!isChecked ? null : (
                          <View>
                            <TouchableOpacity
                              style={[
                                styles.textInput,
                                {flexDirection: 'row'},
                              ]}>
                              <Checkbox
                                color="black"
                                uncheckedColor="silver"
                                status={sameChecked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                  setSameChecked(!sameChecked);
                                }}
                              />
                              <Text
                                style={{
                                  marginTop: 10,
                                  fontSize: 13,
                                  color: 'black',
                                }}>
                                SAME AS BILLING ADDRESS
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}

                        {/* Delivery Address */}
                        {sameChecked ? null : (
                          <View>
                            <TextInput
                              style={styles.textInput}
                              placeholder="Delivery Address"
                              placeholderTextColor='black'
                              keyboardType='default'
                              value={deliveryAddress}
                              onChangeText={deliveryAddress =>
                                setDeliveryAddress(deliveryAddress)
                              }
                            />
                            {/* Delivery State */}
                            <SelectDropdown
                              buttonStyle={styles.dropdownButton}
                              buttonTextStyle={styles.dropdownButtonText}
                              rowStyle={styles.dropdownRow}
                              rowTextStyle={styles.rowTextStyle}
                              data={billingState}
                              defaultButtonText={'Select Delivery State'}
                              defaultValue={selectDeliveryState}
                              onSelect={(item) => setSelectDeliveryState(item)}
                              renderDropdownIcon={isOpened => {
                                return (
                                  <Icons
                                    name={
                                      isOpened
                                        ? 'caret-down-outline'
                                        : 'caret-up-outline'
                                    }
                                    color={'#444'}
                                    size={14}
                                  />
                                );
                              }}
                              dropdownIconPosition={'right'}
                            />
                            {/* Delivery PinCode */}
                            <TextInput
                              style={styles.textInput}
                              placeholder="Delivery PinCode"
                              placeholderTextColor='black'
                              keyboardType='numeric'
                              value={deliveryPinCode}
                              onChangeText={deliveryPinCode =>
                                setDeliveryPinCode(deliveryPinCode)
                              }
                            />
                          </View>
                        )}
                      </View>
                    )}

                    {/* Balance Details Optionals */}
                    <TouchableOpacity
                      style={styles.addressButton}
                      onPress={() => setBalanceOptional(!balanceOptional)}>
                      <Text style={styles.addressText}>
                        BALANCE DETAILS (OPTIONAL)
                      </Text>
                    </TouchableOpacity>

                    {!balanceOptional ? null : (
                      <View>
                        {/* opening Balance */}
                        <TextInput
                          style={styles.textInput}
                          placeholder="Opening Balance"
                          placeholderTextColor='black'
                          keyboardType='numeric'
                          value={openingBalance}
                          onChangeText={(openingBalance) => setOpeningBalance(openingBalance)}
                        />
                        {/* opening Balance Type */}
                        <SelectDropdown
                          buttonStyle={styles.dropdownButton}
                          buttonTextStyle={styles.dropdownButtonText}
                          rowStyle={styles.dropdownRow}
                          rowTextStyle={styles.rowTextStyle}
                          data={balanceType}
                          defaultButtonText={'Select Opening Balance Type'}
                          defaultValue={selectBalanceType}
                          onSelect={item => setSelectBalanceType(item)}
                          renderDropdownIcon={isOpened => {
                            return (
                              <Icons
                                name={
                                  isOpened
                                    ? 'caret-down-outline'
                                    : 'caret-up-outline'
                                }
                                color={'#444'}
                                size={14}
                              />
                            );
                          }}
                          dropdownIconPosition={'right'}
                        />
                        {/* billing Term */}
                        <SelectDropdown
                          buttonStyle={styles.dropdownButton}
                          buttonTextStyle={styles.dropdownButtonText}
                          rowStyle={styles.dropdownRow}
                          rowTextStyle={styles.rowTextStyle}
                          data={billingTerm}
                          defaultButtonText={'Select Billing Term'}
                          defaultValue={selectBillingTerm}
                          onSelect={item => setSelectBillingTerm(item)}
                          renderDropdownIcon={isOpened => {
                            return (
                              <Icons
                                name={
                                  isOpened
                                    ? 'caret-down-outline'
                                    : 'caret-up-outline'
                                }
                                color={'#444'}
                                size={14}
                              />
                            );
                          }}
                          dropdownIconPosition={'right'}
                        />
                      </View>
                    )}
                  </View>
                )}
              </View>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={() => handleSupplier()}>
              <Text style={styles.saveText}>SAVE</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 10,
    borderColor: 'silver',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  gstButton: {
    borderColor: '#008AD0',
    borderWidth: 1,
    height: 35,
    width: 170,
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
    backgroundColor: 'white',
  },
  gstText: {
    color: '#008AD0',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 7,
  },
  addressButton: {
    height: 35,
    backgroundColor: '#008AD0',
    marginTop: 15,
    borderRadius: 5,
  },
  addressText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 8,
  },
  dropdownButton: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
    width: '100%',
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
  saveButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 100,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 100,
  },
  saveText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 8,
  },
});
