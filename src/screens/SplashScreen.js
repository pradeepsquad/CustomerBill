import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React, {useEffect} from 'react'

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Authentication');
    }, 4000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../assets/pack.jpeg')} style={styles.image}/>
        <Text style={styles.text}>Welcome MyShop</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  },
  image: {
    height: 200,
    width: 180,
    alignSelf: 'center',
    marginTop: 190,
  },
  text: {
    color: 'silver',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 300,
    fontSize: 25,
  },
})