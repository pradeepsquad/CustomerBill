import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';

export default function Profile() {
  const [showUpi, setShowUpi] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [selectBusiness, setSelectBusiness] = useState();
  const [selectBillingState, setSelectBillingState] = useState();
  const [businessCategory, setBusinessCategory] = useState();
  const [filePath, setFilePath] = useState();
  const [signaturePath, setSignaturePath] = useState('');
  const [dashboardPath, setDashboardPath] = useState();
  const [aadhaarFront, setAadhaarFront] = useState();
  const [aadhaarBack, setAadhaarBack] = useState();
  const [panCard, setPanCard] = useState();

  const [businessName, setBusinessName] = useState('');
  const [businessPersonName, setBusinessPersonName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [gstNumber, setGstNumber] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [pinCode, setPinCode] = useState();
  const [bankAccountNumber, setBankAccountNumber] = useState();
  const [bankAccountNumberAgain, setBankAccountNumberAgain] = useState();
  const [ifscCode, setIfscCode] = useState();
  const [ifscCodeAgain, setIfscCodeAgain] = useState();
  const [acHolderName, setAcHolderName] = useState('');
  const [bankName, setBankName] = useState('');
  const [upiID, setUpiId] = useState('');
  const [aboutBusiness, setAboutBusiness] = useState('');

  const businessType = [
    'Food/Restaurant/Hotel',
    'Bakery/Cake Shop',
    'Kirana/Super Market',
    'Clothing Shop',
    'FMCG/Distributor',
    'Mobile/Computer',
    'Art and Design',
    'Automobile',
    'Agriculture',
    'Carpentry',
    'Construction',
    'Dairy',
    'Doctor/Clinic/Hospital',
    'Electronics',
    'Engineering',
    'Fruit and vegetable',
    'General Store',
    'Gift Shop',
    'Hotel',
    'Ice Cream Parlour',
    'Interior Designer or Architect',
    'IT Services',
    'Jewellery',
    'Kirana Mart',
    'Laundry',
    'Meat',
    'Medicine (Pharma)',
    'NGO Charity',
    'Others',
    'Photography',
    'Plumbing',
    'Printing',
    'Salon/Beauty Parlour',
    'School/Coaching',
    'Security Services',
    'Service',
    'Staffing',
    'Stationary',
    'Sweet Mart',
    'Tailoring/Boutique',
    'Textile',
    'Tiffin Service',
    'Tour & Travel',
    'Transportation',
  ];

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

  const billingType = [
    'Freelancer',
    'Manufacturer',
    'Others',
    'Retailer/Trader',
    'Services',
    'Wholesaler',
  ];
  // handle Aadhaar Front
  const handleAadhaarFront = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
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
      // console.log('base64 -> ', response.assets[0].base64);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].width);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      // console.log('fileName -> ', response.assets[0].fileName);
      setAadhaarFront(response.assets[0].uri);
    });
  };
  // handle Aadhaar Back
  const handleAadhaarBack = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
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
      // console.log('base64 -> ', response.assets[0].base64);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].width);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      // console.log('fileName -> ', response.assets[0].fileName);
      setAadhaarBack(response.assets[0].uri);
    });
  };
  // handle pan Card
  const handlePanCard = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
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
      // console.log('base64 -> ', response.assets[0].base64);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].width);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      // console.log('fileName -> ', response.assets[0].fileName);
      setPanCard(response.assets[0].uri);
    });
  };
  // handle Display
  const handleDisplayPic = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
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
      // console.log('base64 -> ', response.assets[0].base64);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].width);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      // console.log('fileName -> ', response.assets[0].fileName);
      setFilePath(response.assets[0].uri);
    });
  };
  // upload dashboard
  const handleDashboard = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
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
      // console.log('base64 -> ', response.assets[0].base64);
      // console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.assets[0].width);
      // console.log('height -> ', response.assets[0].height);
      // console.log('fileSize -> ', response.assets[0].fileSize);
      // console.log('type -> ', response.assets[0].type);
      // console.log('fileName -> ', response.assets[0].fileName);
      setDashboardPath(response.assets[0].uri);
    });
  };
  // upload signature
  const handleSignature = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, response => {
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
      setSignaturePath(response.assets[0].uri);
    });
  };

  // handle Save bUtton
  const handleSaveButton = () => {
    console.log(
      selectBusiness,
      businessName,
      businessPersonName,
      phoneNumber,
      gstNumber,
      businessAddress,
      selectBillingState,
      pinCode,
      bankAccountNumber,
      bankAccountNumberAgain,
      ifscCode,
      ifscCodeAgain,
      acHolderName,
      bankName,
      upiID,
      aboutBusiness,
      businessCategory,
    );
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 30, marginHorizontal: 20, marginBottom: 150}}>
          <TouchableOpacity onPress={() => handleDisplayPic('photo')}>
            
          {!filePath ?<Image
              source={require('../assets/pack.jpeg')}
              style={styles.image}
            />
            :<Image
              source={{uri: filePath}}
              style={styles.image}
            />}
          </TouchableOpacity>

          <View style={{marginTop: 30}}>
            {/* BUSINESS TYPE */}
            <SelectDropdown
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.dropdownButtonText}
              rowStyle={styles.dropdownRow}
              rowTextStyle={styles.rowTextStyle}
              data={businessType}
              defaultButtonText={'Business Industry'}
              defaultValue={selectBusiness}
              onSelect={item => setSelectBusiness(item)}
              renderDropdownIcon={isOpened => {
                return (
                  <Icons
                    name={isOpened ? 'caret-down-outline' : 'caret-up-outline'}
                    color={'#444'}
                    size={14}
                  />
                );
              }}
              dropdownIconPosition={'right'}
            />
            {/* BUSINESS NAME */}
            <TextInput
              style={styles.textInput}
              placeholder="Business Name"
              placeholderTextColor="black"
              keyboardType="default"
              value={businessName}
              onChangeText={businessName => setBusinessName(businessName)}
            />
            {/* CONTACT PERSON NAME */}
            <TextInput
              style={styles.textInput}
              placeholder="Contact Person Name"
              placeholderTextColor="black"
              keyboardType="default"
              value={businessPersonName}
              onChangeText={businessPersonName =>
                setBusinessPersonName(businessPersonName)
              }
            />
            {/* PHONE NUMBER */}
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              placeholderTextColor="black"
              keyboardType="decimal-pad"
              value={phoneNumber}
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowBusiness(!showBusiness)}>
              <Text style={styles.buttonText}>BUSINESS DETAILS</Text>
            </TouchableOpacity>
          </View>
          {/* SHOW BUSINESS DETAILS */}
          {!showBusiness ? null : (
            <View>
              {/* GST NUMBER */}
              <TextInput
                style={styles.textInput}
                placeholder="GST Number"
                placeholderTextColor="black"
                keyboardType="default"
                value={gstNumber}
                onChangeText={gstNumber => setGstNumber(gstNumber)}
              />
              {/* BUSINESS ADDRESS */}
              <TextInput
                style={styles.textInput}
                placeholder="Business Address"
                placeholderTextColor="black"
                keyboardType="default"
                value={businessAddress}
                onChangeText={businessAddress =>
                  setBusinessAddress(businessAddress)
                }
              />
              {/* BILLING STATE */}
              <SelectDropdown
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={styles.dropdownButtonText}
                rowStyle={styles.dropdownRow}
                rowTextStyle={styles.rowTextStyle}
                data={billingState}
                defaultButtonText={'Select Billing State'}
                defaultValue={selectBillingState}
                onSelect={item => setSelectBillingState(item)}
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
                placeholder="Pin Code"
                placeholderTextColor="black"
                keyboardType="decimal-pad"
                value={pinCode}
                onChangeText={pinCode => setPinCode(pinCode)}
              />
            </View>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowBankDetails(!showBankDetails)}>
            <Text style={styles.buttonText}>
              BANK DETAILS (ACCEPT ONLINE PAYMENTS)
            </Text>
          </TouchableOpacity>
          {/* SHOW BANK DETAILS */}
          {!showBankDetails ? null : (
            <View>
              {/* BANK ACCOUNT NUMBER */}
              <TextInput
                style={styles.textInput}
                placeholder="Bank Account Number"
                placeholderTextColor="black"
                keyboardType="decimal-pad"
                value={bankAccountNumber}
                onChangeText={bankAccountNumber =>
                  setBankAccountNumber(bankAccountNumber)
                }
              />
              {/* RE-BNAK ACCOUNT NUMBER */}
              <TextInput
                style={styles.textInput}
                placeholder="Bank Account Number Again"
                placeholderTextColor="black"
                keyboardType="decimal-pad"
                value={bankAccountNumberAgain}
                onChangeText={bankAccountNumberAgain =>
                  setBankAccountNumberAgain(bankAccountNumberAgain)
                }
              />
              {/* IFSC CODE */}
              <TextInput
                style={styles.textInput}
                placeholder="IFSC Code"
                placeholderTextColor="black"
                keyboardType="default"
                value={ifscCode}
                onChangeText={ifscCode => setIfscCode(ifscCode)}
              />
              {/* IFSC CODE AGAIN */}
              <TextInput
                style={styles.textInput}
                placeholder="IFSC Code Again"
                placeholderTextColor="black"
                keyboardType="default"
                value={ifscCodeAgain}
                onChangeText={ifscCodeAgain => setIfscCodeAgain(ifscCodeAgain)}
              />
              {/* ACCOUNT HOLDER NAME */}
              <TextInput
                style={styles.textInput}
                placeholder="Account Holder Name"
                placeholderTextColor="black"
                keyboardType="default"
                value={acHolderName}
                onChangeText={acHolderName => setAcHolderName(acHolderName)}
              />
              {/* BANK NAME */}
              <TextInput
                style={styles.textInput}
                placeholder="Bank Name"
                placeholderTextColor="black"
                keyboardType="default"
                value={bankName}
                onChangeText={bankName => setBankName(bankName)}
              />
              <Text style={{marginTop: 10, fontWeight: '600', color: 'black'}}>
                KYC for Online Payments
              </Text>
              <View style={{flexDirection: 'row'}}>
                {/* AADHAAR CARD FRONT */}
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={() => handleAadhaarFront('photo')}>
                  {!aadhaarFront ?<Text style={{color: 'black', alignSelf: 'center'}}>
                    Aadhaar Card (Front)
                  </Text>:
                  <Image
                    source={{uri: aadhaarFront}}
                    style={styles.imageSize}
                  />}
                </TouchableOpacity>

                {/* AADHAAR CARD BACK */}
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={() => handleAadhaarBack('photo')}>
                {!aadhaarBack ?<Text style={{color: 'black', alignSelf: 'center'}}>
                  Aadhaar Card (Back)
                </Text>
                :
                <Image
                  source={{uri: aadhaarBack}}
                  style={styles.imageSize}
                />}
                </TouchableOpacity>
              </View>

              {/* PAN CARD FRONT */}

              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => handlePanCard('photo')}>
               {!panCard ? <Text style={{color: 'black', alignSelf: 'center'}}>
                  PAN Card (Front)
                </Text>
                :
                <Image
                  source={{uri: panCard}}
                  style={styles.imageSize}
                />}
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowUpi(!showUpi)}>
            <Text style={styles.buttonText}>UPI</Text>
          </TouchableOpacity>
          {/* SHOW UPI DETAILS */}
          {!showUpi ? null : (
            <View>
              {/* ADD UPI */}
              <TextInput
                style={styles.textInput}
                placeholder="Add UPI Id"
                placeholderTextColor="black"
                keyboardType="default"
                value={upiID}
                onChangeText={upiID => setUpiId(upiID)}
              />
            </View>
          )}
          {/* ABOUT BUSINESS */}
          <TextInput
            style={styles.textInput}
            placeholder="About Your Business"
            placeholderTextColor="black"
            keyboardType="default"
            multiline={true}
            value={aboutBusiness}
            onChangeText={aboutBusiness => setAboutBusiness(aboutBusiness)}
          />
          {/* BUSINESS CATEGORY */}
          <SelectDropdown
            buttonStyle={styles.dropdownButton}
            buttonTextStyle={styles.dropdownButtonText}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.rowTextStyle}
            data={billingType}
            defaultButtonText={'Select Business Type'}
            defaultValue={businessCategory}
            onSelect={item => setBusinessCategory(item)}
            renderDropdownIcon={isOpened => {
              return (
                <Icons
                  name={isOpened ? 'caret-down-outline' : 'caret-up-outline'}
                  color={'#444'}
                  size={14}
                />
              );
            }}
            dropdownIconPosition={'right'}
          />

          <Text style={{color: 'black', fontWeight: '600', marginTop: 15}}>
            Signature
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => handleSignature('photo')}>
            {!signaturePath ? (
              <Text style={styles.uploadText}>upload</Text>
            ) : (
              <Image source={{uri: signaturePath}} style={styles.imageSize} />
            )}
          </TouchableOpacity>

          <Text style={{color: 'black', fontWeight: '600', marginTop: 15}}>
            Cod to Dashboard
          </Text>

          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => handleDashboard('photo')}>
            {!dashboardPath ? (
              <Text style={styles.uploadText}>upload</Text>
            ) : (
              <Image source={{uri: dashboardPath}} style={styles.imageSize} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => handleSaveButton()}>
            <Text style={styles.saveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    alignSelf: 'center',
    borderColor: 'green',
    borderWidth: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 45,
    marginTop: 10,
    paddingLeft: 15,
  },
  button: {
    // alignSelf: 'center',
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    height: 35,
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#008AD0',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 7,
  },
  dropdownButton: {
    backgroundColor: 'white',
    height: 45,
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
    // fontWeight: '600',
  },
  uploadButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'silver',
    height: 80,
    width: 150,
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  uploadText: {
    color: '#008Ad0',
    alignSelf: 'center',
    marginTop: 30,
  },
  saveButton: {
    backgroundColor: '#008AD0',
    marginTop: 30,
    alignSelf: 'flex-end',
    height: 45,
    width: 90,
    borderRadius: 20,
    // position: 'absolute',
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 12,
  },
  imageSize: {
    height: 80,
    width: 140,
    alignSelf: 'center',
  },
});
