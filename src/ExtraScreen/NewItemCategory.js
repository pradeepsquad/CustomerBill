import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {newCategory} from '../Redux/reducerSlice/NewCategorySlice';

export default function NewItemCategory({navigation}) {
  const [categoryName, setCategoryName] = useState('');

  const dispatch = useDispatch();

  // HANDLE SAVE CATEGORY
  const handleSaveCategory = () => {
        dispatch(newCategory({categoryName}));
        console.log(categoryName)
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Category Name"
          keyboardType="email-address"
          placeholderTextColor="gray"
          value={categoryName}
          onChangeText={categoryName => setCategoryName(categoryName)}
        />
      </View>

        {/* SAVE BUTTON */}
      <TouchableOpacity
        style={styles.newButton}
        onPress={() => [
          navigation.navigate('Inventory'),
          handleSaveCategory(),
        ]}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 30,
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  newButton: {
    backgroundColor: '#008AD0',
    height: 38,
    width: 100,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginTop: 630,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 9,
  },
});
