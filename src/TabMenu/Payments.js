import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput} from 'react-native'
import React, {useState, useEffect} from 'react'
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';

export default function Payments() {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [selectedDays, setSelectedDays] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const selectDays = ['Today', 'Last Week', 'Last Month', 'Last Year'];

  useEffect(() => {
    let today = new Date();
    let date = today.getDate() + '/' + today.getMonth() + 1 + '/' + today.getFullYear();
    setStartDate(date);
    setEndDate(date);
    
  },[]);

  const handleCustomIndexSelect = (index) => {
    setCustomStyleIndex(index);
  };

  
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <View style={{marginHorizontal: 20, marginTop: 15}}>
        {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={['SETTLEMENTS', 'PAYMENTS']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={1}
          tabsContainerStyle={{
            backgroundColor: 'white'
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
        {/* SETTLEMENTS Component ============================================================*/}
        {customStyleIndex === 0 && (
          <SafeAreaView styles={{flex: 1}}>
          <View style={{marginTop: 10}}>
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
                  name={isOpened ? 'caret-down-outline' : 'caret-up-outline'}
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
            keyboardType='numbers-and-punctuation'
            value={startDate}
            onChangeText={(startDate) => setStartDate(startDate)}
          />

          {/* End date */}
          <TextInput 
            style={styles.textInput}
            keyboardType='numbers-and-punctuation'
            value={endDate}
            onChangeText={(endDate) => setEndDate(endDate)}
          />
          </View>
          {/* Amount and Count */}
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={styles.AmountView}>
              <Text style={{alignSelf: 'center'}}>Amount</Text>
              <Text style={{color: '#008AD0', alignSelf: 'center'}}>₹ 0</Text>
            </View>
            <View style={styles.AmountView}>
              <Text style={{alignSelf: 'center'}}>Count</Text>
              <Text style={{color: 'red', alignSelf: 'center'}}>0</Text>
            </View>
          </View>
        </View>
          </SafeAreaView>
          
        )}
        {/* payments Component ===============================================*/}
        {customStyleIndex === 1 && (
          <SafeAreaView styles={{flex: 1}}>
          <View style={{marginTop: 10}}>
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
                  name={isOpened ? 'caret-down-outline' : 'caret-up-outline'}
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
            value={startDate}
            onChangeText={(startDate) => setStartDate(startDate)}
          />

          {/* End date */}
          <TextInput 
            style={styles.textInput}
            value={endDate}
            onChangeText={(endDate) => setEndDate(endDate)}
          />
          </View>
          
          {/* Amount and Count */}
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={styles.AmountView}>
              <Text style={{alignSelf: 'center'}}>Amount</Text>
              <Text style={{color: '#008AD0', alignSelf: 'center'}}>₹ 0</Text>
            </View>
            <View style={styles.AmountView}>
              <Text style={{alignSelf: 'center'}}>Count</Text>
              <Text style={{color: 'red', alignSelf: 'center'}}>0</Text>
            </View>
          </View>
        </View>
          </SafeAreaView>
          
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dropdownButton: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    marginTop: 15,
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
  AmountView: {
    backgroundColor: 'white', 
    height: 50,
    width: '49%', 
    marginLeft: '.5%',
    marginRight: '.7%', 
    borderRadius: 4, 
    paddingTop: 5,
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'silver',
    width: '48%',
    color: 'black',
    marginLeft: 6,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 5,
  },
})