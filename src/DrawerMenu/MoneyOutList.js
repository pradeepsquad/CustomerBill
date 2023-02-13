import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Ionicons';

export default function MoneyOutList({navigation}) {
  const [selectedDays, setSelectedDays] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let date = today.getDate() + '/' + today.getMonth() + 1 + '/' + today.getFullYear();
    setStartDate(date);
    setEndDate(date);
    
  },[]);

  const selectDays = ['Today', 'Last Week', 'Last Month', 'Last Year'];
  return (
    <SafeAreaView styles={{flex: 1}}>
       <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
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
      </ScrollView>


      <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('New MoneyOut')}>
        <Text style={styles.buttonText}>NEW MONEY OUT</Text>
      </TouchableOpacity>
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
    marginLeft: 6,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 5,
  },
  newButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 140,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 500,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 8,
  },
})