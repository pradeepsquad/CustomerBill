import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';

export default function ReportScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDays, setSelectedDays] = useState(0);
  

  const currentDate = new Date();
  const startDate = currentDate.toLocaleDateString();
  const endDate = currentDate.toLocaleDateString();

  const selectDays = ['Today', 'Last Week', 'Last Month', 'Last Year'];

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Modal ----------------------------------------------- */}
      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <Text style={styles.reportText}>GENERATE REPORT</Text>
            <View style={{marginTop: 10, marginHorizontal: 10}}>
              {/* Selected Days */}
              <SelectDropdown
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={styles.dropdownButtonText}
                rowStyle={styles.dropdownRow}
                rowTextStyle={styles.rowTextStyle}
                data={selectDays}
                defaultButtonText={'Today'}
                defaultValue={selectedDays}
                onSelect={item => setSelectedDays(item)}
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
              
              <View style={{flexDirection: 'row'}}>
                {/* started Date */}
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="silver"
                  value={startDate}
                  onChangeText={startDate => setStartDate(startDate)}
                />

                {/* End date */}
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="silver"
                  value={endDate}
                  onChangeText={endDate => setEndDate(endDate)}
                />
              </View>

              {/* Submit and cancel button */}
              <View
                style={styles.submitView}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.cancelButtonText}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={() => alert('Report Genrate')}>
                  <Text style={styles.submitButtonText}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* GSTR REPORTS */}
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={styles.headingText}>GSTR REPORTS</Text>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>GSTR - 1 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>GSTR - 2 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>GSTR - 3b </Text>
          </TouchableOpacity>
        </View>

        {/* TRANSACTION REPORTS */}
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={styles.headingText}>TRANSACTION REPORTS</Text>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Sale Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Sale Return Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>
              Sale Wise Profit and Loss Statement
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Purchase Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Purchase Return Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Money In Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Money Out Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Order Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Sale Person Wise Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>
              Sale Person Wise Money In Report
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Expense Category Wise Report </Text>
          </TouchableOpacity>
        </View>

        {/* PARTY REPORTS */}
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={styles.headingText}>PARTY REPORTS</Text>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => navigation.navigate('Party List')}>
            <Text style={styles.textColor}>Party Ledger </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>
              Party Receivable/Payable Report
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => navigation.navigate('Party List')}>
            <Text style={styles.textColor}>Pending Invoices for Customers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Party Details Report </Text>
          </TouchableOpacity>
        </View>

        {/* ITEM/STOCK REPORTS */}
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={styles.headingText}>ITEM/STOCK REPORTS</Text>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Stock Summary Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Item Sale Report</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.listButton}>
            <Text style={styles.textColor}>Item Report </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Item Order Report</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Barcode File Report </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textColor}>Items Details Report </Text>
          </TouchableOpacity>
        </View>
        {/* OTHER REPORTS */}
        <View style={{marginHorizontal: 20, marginTop: 15, marginBottom: 150}}>
          <Text style={styles.headingText}>OTHER REPORTS</Text>

          {/* <TouchableOpacity style={styles.listButton}>
            <Text style={styles.textColor}>Day End Report </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#008AD0',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textColor: {
    color: 'black',
    fontWeight: '600',
    margin: 10,
  },
  listButton: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 8,
    borderRadius: 5,
  },

  dropdownButton: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
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
  textInput: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    width: '48%',
    marginLeft: 6,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 150,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 8,
  },
  cancelButton: {
    backgroundColor: 'white',
    height: 35,
    width: 150,
    borderRadius: 5,
    borderColor: 'silver',
    borderWidth: 1,
  },
  cancelButtonText: {
    color: '#008AD0',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 8,
  },
  reportText: {
    color: '#008AD0',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  modalView: {
    backgroundColor: '#c3e6fc',
    marginHorizontal: 5,
    height: 200,
    marginTop: 280,
  },
  submitView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
