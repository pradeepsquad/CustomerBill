import { StyleSheet, TouchableOpacity, View , SafeAreaView, ScrollView, TextInput, Text} from 'react-native'
import React, {useState} from 'react'

export default function NewItemCategory({navigation}) {
        const [categoryName, setCategoryName] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
            <TextInput 
                style={styles.textInput}
                placeholder='Category Name'
                keyboardType='email-address'
                placeholderTextColor='black'
                value={categoryName}
                onChangeText={(categoryName) => setCategoryName(categoryName)}
            />    
        </View>
      </ScrollView>
        <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('Inventory')}>
                <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
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
        },
        newButton: {
                backgroundColor: '#008AD0',
                height: 35,
                width: 140,
                marginBottom: 10,
                borderRadius: 15,
                alignSelf: 'flex-end',
                marginHorizontal: 20,
                // marginTop: 690,
              },
        buttonText: {
                color: 'white',
                alignSelf: 'center',
                fontWeight: 'bold',
                marginTop: 8,
        },
})