import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Greetings() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
          <Text>hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})