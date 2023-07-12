import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {useSelector} from 'react-redux';
import {newCategory} from '../Redux/reducerSlice/NewCategorySlice';

export default function Inventory({navigation}) {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const myCategory = useSelector(newCategory);
  const selectCategory =
    myCategory.payload.newCategorySlice.categoryName.categoryName;

  console.log('==============================>', selectCategory);

  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };

  // RENDER INVENTORY
  const renderInventory = ({item}) => {
    return (
      <TouchableOpacity style={styles.listView}>
        <View style={{marginTop: 8, marginLeft: 5}}>
          <Text style={styles.textOne}>{item.name}</Text>
          <Text style={styles.textTwo}>
            Sale Price: {item.price} (Purchase Price: {item.purchasePrice})
          </Text>
          <Text style={styles.textThree}>Current Stock: {item.stock}</Text>
        </View>
        <View style={{position: 'absolute', right: 10}}>
          <Image source={require('../assets/pack.jpeg')} style={styles.image} />
          <TouchableOpacity
            style={styles.adjust}
            onPress={() => navigation.navigate('Modify Item Stock')}>
            <Text style={styles.adjustText}>Adjust Quantity</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
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
          {/* Inventory component ====================================================== */}
          {customStyleIndex === 0 && (
            <SafeAreaView style={{marginTop: 15}}>
              <FlatList
                data={inventoryList}
                renderItem={renderInventory}
                scrollEnabled={true}
                keyExtractor={item => item.id}
              />

              {/* ITEM BUTTON */}
              <TouchableOpacity
                style={styles.newItemButton}
                onPress={() => navigation.navigate('New Item')}>
                <Text style={styles.newItemText}> + ITEM </Text>
              </TouchableOpacity>
            </SafeAreaView>
          )}
          {/* Categories Component ===================================================== */}
          {customStyleIndex === 1 && (
            <SafeAreaView style={{marginTop: 15}}>
              <View
                style={{
                  height: 40,
                  marginTop: 8,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'silver',
                }}>
                <Text style={{fontWeight: 'bold', color: 'black', margin: 10}}>
                  {selectCategory}
                </Text>
              </View>

              {/* New Categories Button */}
              <TouchableOpacity
                style={styles.newCategoryButton}
                onPress={() => navigation.navigate('New Item Category')}>
                <Text style={styles.newItemText}> + CATEGORIES </Text>
              </TouchableOpacity>
            </SafeAreaView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 7,
    marginTop: 8,
    height: 80,
    flexDirection: 'row',
  },
  textOne: {
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
  },
  textTwo: {
    color: 'gray',
    fontSize: 11,
    fontWeight: '600',
  },
  textThree: {
    color: 'gray',
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
    // alignSelf: 'flex-end',
    marginHorizontal: 20,
    // marginTop: 250,
    position: 'absolute',
    bottom: 10,
    right: 0,
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
  image: {
    height: 35,
    width: 35,
    borderColor: 'silver',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 70,
  },
  adjust: {
    borderWidth: 1,
    borderColor: '#008AD0',
    borderRadius: 6,
    marginTop: 5,
    marginLeft: 30,
  },
  adjustText: {
    color: '#008AD0',
    padding: 3,
  },
});

const inventoryList = [
  {
    name: 'ITEM NAME',
    price: 20,
    purchasePrice: 15,
    stock: 10,
  },
  {
    name: 'item_1',
    price: 20,
    purchasePrice: 15,
    stock: 10,
  },
  {
    name: 'item_2',
    price: 20,
    purchasePrice: 15,
    stock: 10,
  },
  {
    name: 'item_3',
    price: 20,
    purchasePrice: 15,
    stock: 10,
  },
];
