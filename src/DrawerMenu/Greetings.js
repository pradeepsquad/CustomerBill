import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Greetings({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 20, marginTop: 10, marginBottom: '30%'}}>

          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Chats')}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/pack.jpeg')} style={styles.image}/>
            <Text style={styles.buttonText}> User 1</Text>
          </View>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'silver',
    marginTop: 5,
    height: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  image: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    borderRadius: 40/2,
    marginLeft: 10,
    marginTop: 4.5,
  },
})