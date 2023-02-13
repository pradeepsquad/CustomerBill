import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default function Inventory({navigation}) {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = (index) => {
    setCustomStyleIndex(index);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{marginHorizontal: 20, marginTop: 15}}>

      {/* Simple Segmented with Custom Styling */}
      <SegmentedControlTab
        values={['INVENTORY', 'CATEGORIES']}
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
      {/* Inventory component ====================================================== */}
      {customStyleIndex === 0 && (
        <SafeAreaView style={{marginTop: 15}}>
          <View>
          <TouchableOpacity style={styles.listView}>
            <Text style={styles.textOne}>ABCD</Text>
            <Text style={styles.textTwo}>Sale Price: 54564 (Purchase Price: 465454)</Text>
            <Text style={styles.textThree}>Current Stock: 0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listView}>
            <Text style={styles.textOne}>ABCD</Text>
            <Text style={styles.textTwo}>Sale Price: 54564 (Purchase Price: 465454)</Text>
            <Text style={styles.textThree}>Current Stock: 0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listView}>
            <Text style={styles.textOne}>ABCD</Text>
            <Text style={styles.textTwo}>Sale Price: 54564 (Purchase Price: 465454)</Text>
            <Text style={styles.textThree}>Current Stock: 0</Text>
          </TouchableOpacity>
          </View>

           {/* New Item Button */}
          <TouchableOpacity style={styles.newItemButton} onPress={() => navigation.navigate('New Item')}>
            <Text style={styles.newItemText}> NEW ITEM </Text>
          </TouchableOpacity>
        </SafeAreaView>
        
      )}
      {/* Categories Component ===================================================== */}
      {customStyleIndex === 1 && (
        <SafeAreaView style={{marginTop: 15}}>
          <View>

          <TouchableOpacity style={{backgroundColor: 'white', height: 40, marginTop: 8}}>
            <Text style={{fontWeight: 'bold', color: 'black', margin: 10}}>ABCD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: 'white', height: 40, marginTop: 8}}>
            <Text style={{fontWeight: 'bold', color: 'black', margin: 10}}>EFGH</Text>
          </TouchableOpacity>
          
          </View>
          {/* New Categories Button */}
          <TouchableOpacity style={styles.newCategoryButton} onPress={() => navigation.navigate('New Item Category')}>
            <Text style={styles.newItemText}> NEW CATEGORIES </Text>
          </TouchableOpacity>
        </SafeAreaView>
        
      )}
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 7,
    marginTop: 8,
  },
  textOne:{
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
  },
  textTwo: {
    // color: 'silver',
    fontSize: 11,
    fontWeight: '600',
  },
  textThree: {
    // color: 'silver',
    fontSize: 11,
    fontWeight: '600',
    color: 'red',
  },
  newItemButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 100,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 400,
  },
  newCategoryButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 150,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 510,
  },
  newItemText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 7,
  },
})