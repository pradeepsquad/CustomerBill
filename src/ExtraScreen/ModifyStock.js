import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default function ModifyStock() {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [addQuantity, setAddQuantity] = useState() 
  const [addNote, setAddNote] = useState() 
  const [reduceQuantity, setReduceQuantity] = useState() 
  const [reduceNote, setReduceNote] = useState() 
  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text style={styles.selectItem}>SELECTED ITEM :</Text>
          <Text style={styles.itemText}>Item Name : Samosa</Text>
          <Text style={styles.itemText}>Sell Price : 20.0</Text>
          <Text style={styles.itemText}>Purchase Price : 0.0</Text>
          <Text style={styles.itemText}>Current Stock : {addQuantity}</Text>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <SegmentedControlTab
            values={['ADD', 'REDUCE']}
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
          {/* ADD QUANTITY ===================================================*/}
          {customStyleIndex === 0 && (
            <ScrollView>
              <View style={{marginTop: 20}}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Add Quantity"
                  placeholderTextColor="silver"
                  value={addQuantity}
                  onChangeText={(addQuantity) => setAddQuantity(addQuantity)}
                />
                <Text
                  style={{
                    color: 'black',
                    marginTop: 15,
                    marginBottom: 15,
                    fontWeight: '600',
                  }}>
                  Stock After Add : 7.0
                </Text>
                <TextInput
                  style={styles.inputText}
                  placeholderTextColor="silver"
                  placeholder="Note"
                  value={addNote}
                  onChangeText={(addNote) => setAddNote(addNote)}
                />
              </View>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveText}>SAVE</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
          {/* REDUCE QUANTITY ===================================================*/}
          {customStyleIndex === 1 && (
            <ScrollView>
              <View style={{marginTop: 20}}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Reduce Quantity"
                  placeholderTextColor="silver"
                  value={reduceQuantity}
                  onChangeText={(reduceQuantity) => setAddQuantity(reduceQuantity)}
                />
                <Text
                  style={{
                    color: 'black',
                    marginTop: 15,
                    marginBottom: 15,
                    fontWeight: '600',
                  }}>
                  Stock After Reduce : -9.0
                </Text>
                <TextInput
                  style={styles.inputText}
                  multiline={true}
                  placeholder="Note"
                  placeholderTextColor="silver"
                  value={reduceNote}
                  onChangeText={(reduceNote) => setReduceNote(reduceNote)}
                />
              </View>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveText}>SAVE</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectItem: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemText: {
    color: 'black',
  },
  inputText: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'silver',
    height: 40,
    paddingLeft: 10,
  },
  saveButton: {
    backgroundColor: '#008Ad0',
    height: 40,
    width: 100,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginTop: 90,
  },
  saveText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
