import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('billing setting')}>
          <Text style={styles.buttonText}>BILLING SETTING</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('print setting')}>
          <Text style={styles.buttonText}>PRINT SETTING</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('discount setting')}>
          <Text style={styles.buttonText}>DISCOUNT SETTING</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('staff setting')}>
          <Text style={styles.buttonText}>STAFF SETTING</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('online shop setting')}>
          <Text style={styles.buttonText}>ONLINE SHOP SETTING</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => alert('upload Data')}>
          <Text style={styles.buttonText}>UPLOAD DATA</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'green',
    height: 40,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText:{
    alignSelf: 'center',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
  },
})